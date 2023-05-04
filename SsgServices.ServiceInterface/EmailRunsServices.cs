using System;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Script;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class EmailRunsServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }
    private static MailRunResponse CreateMailRunResponse() => new()
    {
        StartedAt = DateTime.UtcNow, 
        CreatedIds = new()
    };

    public async Task<object> Any(SimpleTextMailRun request)
    {
        var response = CreateMailRunResponse();

        var context = Renderer.CreateScriptContext();

        var mailRun = await Renderer.CreateMailRunAsync(Db, new MailRun(), request);
        foreach (var sub in await Db.GetActiveSubscribersAsync(request.MailingList))
        {
            var evalBody = await context.RenderScriptAsync(request.Body, sub.ToObjectDictionary());
            response.AddMessage(await Renderer.CreateMessageRunAsync(Db, new MailMessageRun
            {
                Message = new EmailMessage
                {
                    To = sub.ToMailTos(),
                    Subject = request.Subject,
                    BodyText = evalBody,
                }
            }, mailRun, sub));
        }
        
        await Db.CompletedMailRunAsync(mailRun, response);
        return response;
    }
        
    public async Task<object> Any(MarkdownMailRun request)
    {
        var to = request.ConvertTo<CustomHtmlMailRun>();
        to.Layout = "layout";
        to.Page = "markdown";
        return await Any(to);
    }

    public async Task<object> Any(CustomHtmlMailRun request)
    {
        var response = CreateMailRunResponse();
        
        var mailRun = await Renderer.CreateMailRunAsync(Db, new MailRun {
            Layout = request.Layout,
            Page = request.Page,
        }, request);
        
        foreach (var sub in await Db.GetActiveSubscribersAsync(request.MailingList))
        {
            var viewRequest = request.ConvertTo<RenderCustomHtml>().FromSub(sub);
            var bodyHtml = (string) await Gateway.SendAsync(typeof(string), viewRequest);

            response.AddMessage(await Renderer.CreateMessageRunAsync(Db, new MailMessageRun
            {
                Message = new EmailMessage
                {
                    To = sub.ToMailTos(),
                    Subject = request.Subject,
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest), mailRun, sub));
        }
        
        await Db.CompletedMailRunAsync(mailRun, response);
        return response;
    }
    
    public async Task<object> Any(NewsletterMailRun request)
    {
        var response = CreateMailRunResponse();
        request.Year ??= DateTime.UtcNow.Year;
        request.Month ??= DateTime.UtcNow.Month;

        var viewRequest = request.ConvertTo<RenderNewsletter>();
        var fromDate = new DateTime(request.Year.Value, request.Month.Value, 1);
        var bodyHtml = (string) await Gateway.SendAsync(typeof(string), viewRequest);

        var mailRun = await Renderer.CreateMailRunAsync(Db, new MailRun {
            Layout = "layout-marketing",
            Page = "newsletter",
        }, request);
        
        foreach (var sub in await Db.GetActiveSubscribersAsync(request.MailingList))
        {
            response.AddMessage(await Renderer.CreateMessageRunAsync(Db, new MailMessageRun
            {
                Message = new EmailMessage
                {
                    To = sub.ToMailTos(),
                    Subject = string.Format(MailInfo.Instance.NewsletterFmt, $"{fromDate:MMMM} {fromDate:yyyy}"),
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest), mailRun, sub));
        }

        await Db.CompletedMailRunAsync(mailRun, response);
        return response;
    }
}

public static class EmailRunsExtensions
{
    public static void AddMessage(this MailRunResponse ret, MailMessageRun msg) => ret.CreatedIds.Add(msg.Id);
}