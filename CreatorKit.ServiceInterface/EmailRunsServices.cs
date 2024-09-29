using System.Threading.Tasks;
using ServiceStack;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;

namespace CreatorKit.ServiceInterface;

public class EmailRunsServices(EmailRenderer renderer, IMailProvider mail) : Service
{
    public object Any(SimpleTextMailRun request)
    {
        var response = renderer.CreateMailRunResponse();

        using var mailDb = mail.OpenMonthDb();
        var mailRun = renderer.CreateMailRun(mailDb, new MailRun(), request);
        foreach (var sub in Db.GetActiveSubscribers(request.MailingList))
        {
            var viewRequest = request.ConvertTo<RenderSimpleText>().FromContact(sub);
            var bodyHtml = (string) Gateway.Send(typeof(string), viewRequest);

            response.AddMessage(renderer.CreateMessageRun(mailDb, new MailMessageRun
            {
                Message = new EmailMessage
                {
                    To = sub.ToMailTos(),
                    Subject = request.Subject,
                    Body = request.Body,
                    BodyText = bodyHtml,
                }
            }, mailRun, sub));
        }
        
        mailDb.CompletedMailRun(mailRun, response);
        return response;
    }
        
    public object Any(MarkdownMailRun request)
    {
        var to = request.ConvertTo<CustomHtmlMailRun>();
        to.Layout = "basic";
        to.Template = "empty";
        return Any(to);
    }

    public object Any(CustomHtmlMailRun request)
    {
        var response = renderer.CreateMailRunResponse();
        
        using var mailDb = mail.OpenMonthDb();
        var mailRun = renderer.CreateMailRun(mailDb, new MailRun {
            Layout = request.Layout,
            Template = request.Template,
        }, request);
        
        foreach (var sub in Db.GetActiveSubscribers(request.MailingList))
        {
            var viewRequest = request.ConvertTo<RenderCustomHtml>().FromContact(sub);
            var bodyHtml = (string) Gateway.Send(typeof(string), viewRequest);

            response.AddMessage(renderer.CreateMessageRun(mailDb, new MailMessageRun
            {
                Message = new EmailMessage
                {
                    To = sub.ToMailTos(),
                    Subject = request.Subject,
                    Body = request.Body,
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest), mailRun, sub));
        }
        
        mailDb.CompletedMailRun(mailRun, response);
        return response;
    }
}