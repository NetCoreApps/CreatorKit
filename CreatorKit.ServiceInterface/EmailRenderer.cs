using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.IO;
using ServiceStack.Messaging;
using ServiceStack.OrmLite;
using ServiceStack.Script;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;

namespace CreatorKit.ServiceInterface;

public class EmailRenderer
{
    public static EmailRenderer Instance { get; } = new();
    public IVirtualFiles VirtualFiles { get; private set; }
    public MailData MailData { get; private set; }
    public IMessageService MessageService { get; private set; }

    public void Init(IAppHost appHost)
    {
        VirtualFiles = appHost.VirtualFiles;
        MailData = appHost.Resolve<MailData>();
        MailData = appHost.Resolve<MailData>();
        MessageService = appHost.Resolve<IMessageService>();
    }
    
    public string CreateRef() => Guid.NewGuid().ToString("N");

    public async Task<MailMessage> CreateMessageAsync(IDbConnection db, MailMessage msg)
    {
        msg.CreatedDate = DateTime.UtcNow;
        msg.ExternalRef ??= CreateRef(); 
        msg.Id = (int) await db.InsertAsync(msg, selectIdentity:true);
        if (!msg.Draft)
        {
            SendMailMessage(msg.Id);
            msg.StartedDate = DateTime.UtcNow; //indicate in API Response msg is being sent
        }
        return msg;
    }

    public async Task<MailRun> CreateMailRunAsync(IDbConnection db, MailRun mailRun, object request)
    {
        if (request is MailRunBase { MailingList: MailingList.None })
            throw new ArgumentNullException(nameof(MailRunBase.MailingList));

        mailRun.CreatedDate = DateTime.UtcNow;
        mailRun.ExternalRef ??= CreateRef(); 
        mailRun.Id = (int) await db.InsertAsync(mailRun.FromRequest(request), selectIdentity:true);
        return mailRun;
    }

    public async Task<MailMessageRun> CreateMessageRunAsync(IDbConnection db, MailMessageRun msg,
        MailRun mailRun, Contact sub)
    {
        msg.ExternalRef ??= CreateRef();
        msg.CreatedDate = DateTime.UtcNow;
        msg.MailRunId = mailRun.Id;
        msg.ContactId = sub.Id;
        msg.Id = (int) await db.InsertAsync(msg, selectIdentity:true);
        return msg;
    }

    public void SendMailMessage(int id)
    {
        using var mqProducer = MessageService.CreateMessageProducer();
        mqProducer.Publish(new SendMessages { MailMessageIds = new() { id } });
    }

    public void SendMailMessageRun(int id)
    {
        using var mqProducer = MessageService.CreateMessageProducer();
        mqProducer.Publish(new SendMessages { MailRunMessageIds = new() { id } });
    }

    public async Task<HttpResult> RenderToHtmlResultAsync(IDbConnection db, ScriptContext context, object request,
        Dictionary<string,object?>? args = null)
    {
        var htmlEmail = await RenderToHtmlAsync(db, context, request, args);
        return new HttpResult(htmlEmail) {
            ContentType = MimeTypes.Html
        };
    }

    public async Task<string> RenderToHtmlAsync(IDbConnection db, ScriptContext context, object request,
        Dictionary<string,object?>? args = null)
    {
        // If only partially populated with Email/ExternalRef, load contact and populate remaining fields
        if (request is RenderEmailBase email && (email.Email != null || email.ExternalRef != null))
        {
            var requiresPopulating = email.FirstName == null || email.LastName == null || email.Email == null || email.ExternalRef == null;
            if (requiresPopulating)
            {
                var sub = email.Email != null 
                    ? await db.SingleAsync<Contact>(x => x.EmailLower == email.Email.ToLower())
                    : await db.SingleAsync<Contact>(x => x.ExternalRef == email.ExternalRef);
                if (sub == null)
                    throw HttpError.NotFound("Contact was not found");
                request.PopulateWith(sub);
            }
        }
        
        var html = await new PageResult(context.GetPage("content")) {
            Model = request,
            Layout = "layout",
            Args = args ?? new(),
        }.RenderToStringAsync();
        return html;
    }

    public ScriptContext CreateScriptContext(Dictionary<string, object?>? args=null, MailData? meta=null)
    {
        var context = new ScriptContext
        {
            PageFormats = { new MarkdownPageFormat() },
            ScriptBlocks = { new EmailMarkdownScriptBlock() },
            ScriptMethods = { new EmailMarkdownScriptMethods() },
            Args = {
                [nameof(AppData)] = AppData.Instance,
                ["meta"] = meta ?? MailData,
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
        Dictionary<string,object?>? args = null, MailData? meta=null)
    {
        if (string.IsNullOrEmpty(page))
            throw new ArgumentNullException(nameof(page));
        
        layout ??= "layout.html";
        if (!layout.EndsWith(".html"))
            layout += ".html";
        if (!page.EndsWith(".html"))
            page += ".html";
        
        var context = CreateScriptContext(args, meta);

        var emailsDir = VirtualFiles.GetDirectory("emails");
        var layoutsDir = VirtualFiles.GetDirectory("emails/layouts");
        var partialsDir = VirtualFiles.GetDirectory("emails/partials");
        context.VirtualFiles.WriteFile("layout.html", layoutsDir.GetFile(layout));
        context.VirtualFiles.WriteFile("content.html", emailsDir.GetFile(page));
        var partials = partialsDir.GetAllMatchingFiles("*.html");
        foreach (var partial in partials)
        {
            context.VirtualFiles.WriteFile(partial.Name, partial);
        }

        return context;
    }
}

public static class EmailRendererUtils
{
    public static async Task CompletedMailRunAsync(this IDbConnection db, MailRun mailRun, MailRunResponse ret)
    {
        ret.Id = mailRun.Id;
        ret.TimeTaken = DateTime.UtcNow - ret.StartedAt;
        await db.UpdateMailRunGeneratedEmailsAsync(mailRun.Id, ret.CreatedIds.Count);
    }

    public static async Task UpdateMailRunGeneratedEmailsAsync(this IDbConnection db, int mailRunId, int generatedEmails)
    {
        await db.UpdateOnlyAsync(() => new MailRun { GeneratedDate = DateTime.UtcNow, EmailsCount = generatedEmails },
            where: x => x.Id == mailRunId);
    }
    
    public static async Task<List<Contact>> GetActiveSubscribersAsync(this IDbConnection db, MailingList mailingList)
    {
        if (mailingList == MailingList.None)
            throw new ArgumentNullException(nameof(mailingList));
            
        return await db.SelectAsync(db.From<Contact>()
            .Where(x => x.DeletedDate == null && x.UnsubscribedDate == null && x.VerifiedDate != null
                        && (mailingList & x.MailingLists) == mailingList));
    }

    public static void Set(this Dictionary<string, object> map, string name, object? value)
    {
        if (value == null)
            map.Remove(name);
        else
            map[name] = value;
    }
}