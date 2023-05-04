using System;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.OrmLite;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class TestServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }

    public async Task<object> Any(MailNewsletter request)
    {
        var viewRequest = request.ConvertTo<RenderNewsletter>();
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
    
    public async Task<object> Any(MailTestMail request)
    {
        var viewRequest = request.ConvertTo<ViewTestMail>();
        var result = (HttpResult)await Any(viewRequest);
        var email = new EmailMessage
        {
            To = new() { new MailTo { Email = request.Email } },
            Subject = request.Subject ?? "Test Subject",
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
        var context = Renderer.CreateMailContext(layout:request.Layout ?? "layout", page:request.Page ?? "test");
        return await Renderer.RenderToHtmlResultAsync(Db, context, request, args: new() {
            ["body"] = request.Body ?? "Test Body",
        });
    }

}