using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.IO;
using ServiceStack.Messaging;
using ServiceStack.OrmLite;
using ServiceStack.Script;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using ServiceStack.Jobs;
using ServiceStack.Text;

namespace CreatorKit.ServiceInterface;

public class EmailRenderer(IVirtualFiles virtualFiles, IBackgroundJobs jobs)
{
    public string CreateRef() => Guid.NewGuid().ToString("N");
    public MailRunResponse CreateMailRunResponse() => new()
    {
        StartedAt = DateTime.UtcNow, 
        CreatedIds = []
    };

    public MailMessage CreateMessage(IDbConnection db, MailMessage msg)
    {
        msg.CreatedDate = DateTime.UtcNow;
        msg.ExternalRef ??= CreateRef(); 
        msg.Id = (int) db.Insert(msg, selectIdentity:true);
        if (!msg.Draft)
        {
            SendMailMessage(msg.Id);
            msg.StartedDate = DateTime.UtcNow; //indicate in API Response msg is being sent
        }
        return msg;
    }

    public MailRun CreateMailRun(IDbConnection db, MailRun mailRun, object request)
    {
        if (request is MailRunBase { MailingList: MailingList.None })
            throw new ArgumentNullException(nameof(MailRunBase.MailingList));

        mailRun.CreatedDate = DateTime.UtcNow;
        mailRun.ExternalRef ??= CreateRef(); 
        mailRun.Id = (int) db.Insert(mailRun.FromRequest(request), selectIdentity:true);
        return mailRun;
    }

    public MailMessageRun CreateMessageRun(IDbConnection db, MailMessageRun msg,
        MailRun mailRun, Contact sub)
    {
        msg.ExternalRef ??= CreateRef();
        msg.CreatedDate = DateTime.UtcNow;
        msg.MailRunId = mailRun.Id;
        msg.ContactId = sub.Id;
        msg.Id = (int) db.Insert(msg, selectIdentity:true);
        return msg;
    }

    public void SendMailMessage(int id)
    {
        jobs.EnqueueCommand<SendMessagesCommand>(new SendMessages { MailMessageIds = [id] });
    }

    public void SendMailMessageRun(int id)
    {
        jobs.EnqueueCommand<SendMessagesCommand>(new SendMessages { MailRunMessageIds = [id] });
    }

    public HttpResult RenderToHtmlResult(IDbConnection db, ScriptContext context, object request,
        Dictionary<string,object?>? args = null)
    {
        var htmlEmail = RenderToHtml(db, context, request, args);
        return new HttpResult(htmlEmail) {
            ContentType = MimeTypes.Html
        };
    }

    public string RenderToHtml(IDbConnection db, ScriptContext context, object request, Dictionary<string,object?>? args = null)
    {
        // If only partially populated with Email/ExternalRef, load contact and populate remaining fields
        if (request is RenderEmailBase email && (email.Email != null || email.ExternalRef != null))
        {
            var requiresPopulating = email.FirstName == null || email.LastName == null || email.Email == null || email.ExternalRef == null;
            if (requiresPopulating)
            {
                var sub = email.Email != null 
                    ? db.Single<Contact>(x => x.EmailLower == email.Email.ToLower())
                    : db.Single<Contact>(x => x.ExternalRef == email.ExternalRef);
                if (sub == null)
                    throw HttpError.NotFound("Contact was not found");
                request.PopulateWith(sub);
            }
        }
        
        var html = new PageResult(context.GetPage("content")) {
            Model = request,
            Layout = "layout",
            Args = args ?? new(),
        }.Result;
        return html;
    }

    public ScriptContext CreateScriptContext(Dictionary<string, object?>? args=null)
    {
        var context = new ScriptContext
        {
            PageFormats = { new MarkdownPageFormat() },
            ScriptBlocks = { new EmailMarkdownScriptBlock() },
            ScriptMethods = { new EmailMarkdownScriptMethods() },
            Args = {
                [nameof(AppData)] = AppData.Instance,
            }
        };
        foreach (var entry in AppData.Instance.Vars)
        {
            context.Args[entry.Key] = entry.Value;
        }
        if (args != null)
        {
            foreach (var entry in args)
            {
                context.Args[entry.Key] = entry.Value;
            }
        }

        context.Init();
        return context;
    }

    public ScriptContext CreateMailContext(string page, string? layout=null, 
        Dictionary<string,object?>? args = null)
    {
        if (string.IsNullOrEmpty(page))
            throw new ArgumentNullException(nameof(page));
        
        layout ??= "layout.html";
        if (!layout.EndsWith(".html"))
            layout += ".html";
        if (!page.EndsWith(".html"))
            page += ".html";
        
        var context = CreateScriptContext(args);

        var emailsDir = virtualFiles.GetDirectory("emails");
        var layoutsDir = virtualFiles.GetDirectory("emails/layouts");
        var partialsDir = virtualFiles.GetDirectory("emails/partials");
        context.VirtualFiles.WriteFile("layout.html", layoutsDir.GetFile(layout));
        context.VirtualFiles.WriteFile("content.html", emailsDir.GetFile(page));
        var partials = partialsDir.GetAllMatchingFiles("*.html");
        foreach (var partial in partials)
        {
            context.VirtualFiles.WriteFile(partial.Name, partial);
        }

        return context;
    }

    public Dictionary<string, object> PassContactArgs { get; } = new(
        new[] { "FirstName", "LastName", "Email", "ExternalRef" }
            .Map(x => KeyValuePairs.Create(x, "{{" + x + "}}")));

    public string ReplaceContactArgs(string html, Contact contact)
    {
        var args = new Dictionary<string, string>
        {
            [nameof(contact.FirstName)] = contact.LastName,
            [nameof(contact.LastName)] = contact.LastName,
            [nameof(contact.Email)] = contact.Email,
            [nameof(contact.ExternalRef)] = contact.ExternalRef,
        };
        foreach (var entry in args)
        {
            html = html.Replace("{{" + entry.Key + "}}", entry.Value);
            html = html.Replace("%7B%7B" + entry.Key + "%7D%7D", entry.Value);
        }
        return html;
    }

    public class SeedMailingList
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public static void SaveMailingListEnum(string seedPath, string savePath)
    {
        var seedMailingLists = File.ReadAllText(seedPath).FromCsv<List<SeedMailingList>>();
        var enumSrc = GenerateMailingListEnum(seedMailingLists);
        File.WriteAllText(savePath, enumSrc);
    }
    
    public static string GenerateMailingListEnum(IEnumerable<SeedMailingList> seedMailingLists)
    {
        var sb = StringBuilderCache.Allocate().Append(@"using System;
using ServiceStack.DataAnnotations;

namespace CreatorKit.ServiceModel.Types;

[Flags]
public enum MailingList
{
");
        var i = 0;
        foreach (var mailingList in seedMailingLists)
        {
            sb.AppendLine($"    [Description(\"{mailingList.Description}\")]");
            var enumValue = i == 0 ? 0 : 1 << (i - 1); 
            var enumValueStr = i == 0 ? "0" : "1 << " + (i - 1);
            sb.AppendLine($"    {mailingList.Name.SafeVarName()} = {enumValueStr},".PadRight(40) + $" //{enumValue}");
            i++;
        }
        sb.AppendLine("}");
        return StringBuilderCache.ReturnAndFree(sb);
    }
}

public static class EmailRendererUtils
{
    public static void CompletedMailRun(this IDbConnection db, MailRun mailRun, MailRunResponse ret)
    {
        ret.Id = mailRun.Id;
        ret.TimeTaken = DateTime.UtcNow - ret.StartedAt;
        db.UpdateMailRunGeneratedEmails(mailRun.Id, ret.CreatedIds.Count);
    }

    public static void UpdateMailRunGeneratedEmails(this IDbConnection db, int mailRunId, int generatedEmails)
    {
        db.UpdateOnly(() => new MailRun { GeneratedDate = DateTime.UtcNow, EmailsCount = generatedEmails },
            where: x => x.Id == mailRunId);
    }
    
    public static List<Contact> GetActiveSubscribers(this IDbConnection db, MailingList mailingList)
    {
        if (mailingList == MailingList.None)
            throw new ArgumentNullException(nameof(mailingList));
            
        return db.Select(db.From<Contact>(db.TableAlias("c"))
            .Where(x => x.DeletedDate == null && x.UnsubscribedDate == null && x.VerifiedDate != null
                        && (mailingList & x.MailingLists) == mailingList)
            .WhereNotExists(db.From<InvalidEmail>()
                .Where<Contact,InvalidEmail>((c,e) => e.EmailLower == Sql.TableAlias(c.EmailLower, "c"))
                .Select(x => x.Id))
        );
    }

    public static void Set(this Dictionary<string, object> map, string name, object? value)
    {
        if (value == null)
            map.Remove(name);
        else
            map[name] = value;
    }
}