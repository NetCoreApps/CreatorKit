using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.IO;
using ServiceStack.OrmLite;
using ServiceStack.Script;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class EmailServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public MailData MailData { get; set; }

    public async Task<object> Any(MailNewsletter request)
    {
        var viewRequest = request.ConvertTo<ViewNewsletter>();
        var year = request.Year ?? DateTime.UtcNow.Year;
        var fromDate = new DateTime(year, request.Month ?? 1, 1);
        var bodyHtml = (string) await Gateway.SendAsync(typeof(string), viewRequest);
        var msg = new MailMessage {
            Request = nameof(ViewNewsletter),
            RequestArgs = viewRequest.ToObjectDictionary(),
            Message = new EmailMessage
            {
                To = new() { new MailTo { Email = request.Email } },
                Subject = request.Subject ?? string.Format(MailInfo.Instance.NewsletterFmt, $"{fromDate:MMMM} {fromDate:yyyy}"),
                BodyHtml = bodyHtml,
            } 
        }.PopulateWith(request);

        var id = await Db.InsertAsync(msg, selectIdentity:true);

        if (request.Send == true)
        {
            PublishMessage(new SendMessages { MailMessageIds = new() { id }});
        }
        
        return new MailResponse
        {
            To = msg.Message.To.First(),
            Subject = msg.Message.Subject,
            SendUrl = base.Request.ResolveAbsoluteUrl(new SendMailMessage { Id = id }.ToUrl()),
            ViewUrl = base.Request.ResolveAbsoluteUrl(new ViewMailMessage { Id = id }.ToUrl()),
        };
    }

    public async Task<object> Any(ViewNewsletter request)
    {
        var year = request.Year ?? DateTime.UtcNow.Year;
        var fromDate = new DateTime(year, request.Month ?? 1, 1);
        var context = CreateMailContext(layout:"layout-marketing", page:"newsletter",
            meta: MailData.Search(fromDate: fromDate,
                toDate: request.Month != null ? new DateTime(year, request.Month.Value, 1).AddMonths(1) : null), 
            args: new() {
                ["title"] = $"{fromDate:MMMM} {fromDate:yyyy}"
            });

        var htmlEmail = await new PageResult(context.GetPage("content")) {
            Layout = "layout",
        }.RenderToStringAsync();

        return new HttpResult(htmlEmail)
        {
            ContentType = MimeTypes.Html
        };
    }
    
    public async Task<object> Any(MailTestMail request)
    {
        var viewRequest = request.ConvertTo<ViewTestMail>();
        var result = (HttpResult)await Any(viewRequest);
        var email = new EmailMessage
        {
            To = new() { new MailTo { Email = request.Email } },
            Subject = request.Subject ?? request.Title ?? "Test Subject",
            BodyHtml = (string)result.Response,
        };
        EmailProvider.Send(email);
        
        return new MailResponse
        {
            To = email.To.First(),
            Subject = email.Subject,
            ViewUrl = base.Request.ResolveAbsoluteUrl(viewRequest.ToUrl())
        };
    }

    public async Task<object> Any(ViewTestMail request)
    {
        var context = CreateMailContext(layout:request.Layout ?? "layout", page:request.Page ?? "test",
            args: new() {
                ["title"] = request.Title ?? "Test Title",
                ["body"] = request.Body ?? "Test Body",
            });
        
        var htmlEmail = await new PageResult(context.GetPage("content")) {
            Layout = "layout",
        }.RenderToStringAsync();

        return new HttpResult(htmlEmail)
        {
            ContentType = MimeTypes.Html
        };
    }

    private ScriptContext CreateMailContext(string page, string? layout=null,
        Dictionary<string,object>? args = null, MailData? meta=null)
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