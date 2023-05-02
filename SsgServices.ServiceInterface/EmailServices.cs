using System;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.OrmLite;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class EmailServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }

    public async Task<object> Any(MailNewsletter request)
    {
        var viewRequest = request.ConvertTo<ViewNewsletter>();
        var year = request.Year ?? DateTime.UtcNow.Year;
        var fromDate = new DateTime(year, request.Month ?? 1, 1);

        var bodyHtml = (string) await Gateway.SendAsync(typeof(string), viewRequest);
        var msg = await Renderer.CreateMessageAsync(Db, new MailMessage
        {
            Message = new EmailMessage
            {
                To = new() { new MailTo { Email = request.Email } },
                Subject = request.Subject ??
                          string.Format(MailInfo.Instance.NewsletterFmt, $"{fromDate:MMMM} {fromDate:yyyy}"),
                BodyHtml = bodyHtml,
            }
        }.FromRequest(request), send:request.Send == true);
        
        return new MailResponse
        {
            To = msg.Message.To.First(),
            Subject = msg.Message.Subject,
            SendUrl = base.Request.ResolveAbsoluteUrl(new SendMailMessage { Id = msg.Id }.ToUrl()),
            ViewUrl = base.Request.ResolveAbsoluteUrl(new ViewMailMessage { Id = msg.Id }.ToUrl()),
        };
    }

    public async Task<object> Any(ViewNewsletter request)
    {
        var year = request.Year ?? DateTime.UtcNow.Year;
        var fromDate = new DateTime(year, request.Month ?? 1, 1);
        var context = Renderer.CreateMailContext(layout:"layout-marketing", page:"newsletter",
            meta: MailData.Search(fromDate: fromDate,
                toDate: request.Month != null ? new DateTime(year, request.Month.Value, 1).AddMonths(1) : null),
            args: new() {
                ["title"] = $"{fromDate:MMMM} {fromDate:yyyy}"
            });

        return await Renderer.RenderToHtmlResultAsync(Db, context, request);
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
        var context = Renderer.CreateMailContext(layout:request.Layout ?? "layout", page:request.Page ?? "test",
            args: new() {
                ["title"] = request.Title ?? "Test Title",
                ["body"] = request.Body ?? "Test Body",
            });
        
        return await Renderer.RenderToHtmlResultAsync(Db, context, request);
    }

    public async Task<object> Any(CreateNewsletterMailRun request)
    {
        var ret = new CreateNewsletterMailRunResponse { StartedAt = DateTime.UtcNow, CreatedIds = new() };
        request.Year ??= DateTime.UtcNow.Year;
        request.Month ??= DateTime.UtcNow.Month;

        var viewRequest = request.ConvertTo<ViewNewsletter>();
        var fromDate = new DateTime(request.Year.Value, request.Month.Value, 1);
        var bodyHtml = (string) await Gateway.SendAsync(typeof(string), viewRequest);

        var mailRun = await Db.CreateMailRunAsync(new MailRun {
            Layout = "layout-marketing",
            Page = "newsletter",
            CreatedDate = ret.StartedAt,
        }, request);
        
        var mailingListSubs = await Db.GetActiveSubscriptionsAsync(request.MailingList);
        foreach (var sub in mailingListSubs)
        {
            var msg = await Renderer.CreateMessageRunAsync(Db, new MailMessageRun
            {
                Message = new EmailMessage
                {
                    To = sub.ToMailTos(),
                    Subject = string.Format(MailInfo.Instance.NewsletterFmt, $"{fromDate:MMMM} {fromDate:yyyy}"),
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest), mailRun, sub);
            ret.CreatedIds.Add(msg.Id);
        }

        await Db.UpdateMailRunGeneratedEmailsAsync(mailRun, ret.CreatedIds.Count);

        ret.TimeTaken = DateTime.UtcNow - ret.StartedAt;
        return ret;
    }

}