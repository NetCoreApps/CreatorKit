using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.IO;
using ServiceStack.Messaging;
using ServiceStack.OrmLite;
using ServiceStack.Script;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

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

    public Task<MailMessage> SendMessageAsync(IDbConnection db, MailMessage msg) =>
        CreateMessageAsync(db, msg, send: true);
    public async Task<MailMessage> CreateMessageAsync(IDbConnection db, MailMessage msg, bool send = false)
    {
        msg.Id = (int) await db.InsertAsync(msg, selectIdentity:true);
        if (send)
            SendMailMessage(msg.Id);
        return msg;
    }

    public async Task<MailMessageRun> CreateMessageRunAsync(IDbConnection db, MailMessageRun msg,
        MailRun mailRun, Subscription sub)
    {
        msg.MailRunId = mailRun.Id;
        msg.SubscriptionId = sub.Id;
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

    public async Task<HttpResult> RenderToHtmlResultAsync(IDbConnection db, ScriptContext context, object request)
    {
        var htmlEmail = await RenderToHtmlAsync(db, context, request);
        return new HttpResult(htmlEmail) {
            ContentType = MimeTypes.Html
        };
    }

    public async Task<string> RenderToHtmlAsync(IDbConnection db, ScriptContext context, object request)
    {
        // If only partially populated with Email/ExternalRef, load subscription and populate remaining fields
        if (request is RenderEmailBase email && (email.Email != null || email.ExternalRef != null))
        {
            var requiresPopulating = email.FirstName == null || email.LastName == null || email.Email == null || email.ExternalRef == null;
            if (requiresPopulating)
            {
                var sub = email.Email != null 
                    ? await db.SingleAsync<Subscription>(x => x.EmailLower == email.Email.ToLower())
                    : await db.SingleAsync<Subscription>(x => x.ExternalRef == email.ExternalRef);
                if (sub == null)
                    throw HttpError.NotFound("Subscription was not found");
                request.PopulateWith(sub);
            }
        }
        
        var html = await new PageResult(context.GetPage("content")) {
            Model = request,
            Layout = "layout",
        }.RenderToStringAsync();
        return html;
    }

    public ScriptContext CreateMailContext(string page, string? layout=null, 
        Dictionary<string,object?>? args = null, MailData? meta=null)
    {
        if (string.IsNullOrEmpty(page))
            throw new ArgumentNullException(nameof(page));
        
        layout ??= "_layout.html";
        if (!layout.EndsWith(".html"))
            layout += ".html";
        if (!page.EndsWith(".html"))
            page += ".html";
        
        var context = new ScriptContext
        {
            PageFormats = { new MarkdownPageFormat() },
            ScriptBlocks = { new EmailMarkdownScriptBlock() },
            ScriptMethods = { new EmailMarkdownScriptMethods() },
            Args =
            {
                [nameof(AppData)] = AppData.Instance,
                ["meta"] = meta ?? MailData,
                ["info"] = MailInfo.Instance,
                ["links"] = MailLinks.Instance,
                ["images"] = MailImages.Instance,
            }
        };
        if (args != null)
        {
            foreach (var entry in args)
            {
                context.Args[entry.Key] = entry.Value;
            }
        }
        context.Init();

        var emailsDir = VirtualFiles.GetDirectory("emails");
        var sharedDir = VirtualFiles.GetDirectory("emails/shared");
        context.VirtualFiles.WriteFile("layout.html", sharedDir.GetFile(layout));
        context.VirtualFiles.WriteFile("content.html", emailsDir.GetFile(page));
        var partials = sharedDir.GetAllMatchingFiles("partial*.html");
        foreach (var partial in partials)
        {
            context.VirtualFiles.WriteFile(partial.Name, partial);
        }

        return context;
    }    
}

public static class EmailRendererUtils
{
    public static async Task UpdateMailRunGeneratedEmailsAsync(this IDbConnection db, MailRun mailRun, int generatedEmails)
    {
        await db.UpdateOnlyAsync(() => new MailRun { GeneratedDate = DateTime.UtcNow, EmailsCount = generatedEmails },
            where: x => x.Id == mailRun.Id);
    }
    
    public static async Task<MailRun> CreateMailRunAsync(this IDbConnection db, MailRun mailRun, object request)
    {
        if (request is MailRunBase { MailingList: MailingList.None })
            throw new ArgumentNullException(nameof(MailRunBase.MailingList));
            
        mailRun.Id = (int) await db.InsertAsync(mailRun.FromRequest(request), selectIdentity:true);
        return mailRun;
    }
    
    public static async Task<List<Subscription>> GetActiveSubscriptionsAsync(this IDbConnection db, MailingList mailingList)
    {
        if (mailingList == MailingList.None)
            throw new ArgumentNullException(nameof(mailingList));
            
        return await db.SelectAsync(db.From<Subscription>()
            .Where(x => x.DeletedDate == null && x.UnsubscribedDate == null && x.VerifiedDate != null
                        && (mailingList & x.MailingLists) == mailingList));
    }
}