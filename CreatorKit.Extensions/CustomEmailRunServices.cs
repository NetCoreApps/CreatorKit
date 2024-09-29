using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using ServiceStack;

namespace CreatorKit.Extensions;

public class CustomEmailRunServices(EmailRenderer renderer, IMailProvider mail)
    : Service
{
    public object Any(NewsletterMailRun request)
    {
        var newsletterDate = request.ToDate ?? DateTime.UtcNow;
        var response = renderer.CreateMailRunResponse();

        using var mailDb = mail.OpenMonthDb();
        var mailRun = renderer.CreateMailRun(mailDb, new MailRun {
            Layout = "marketing",
            Template = "newsletter",
        }, request);
        
        foreach (var sub in Db.GetActiveSubscribers(request.MailingList))
        {
            var viewRequest = request.ConvertTo<RenderNewsletter>().FromContact(sub);
            var bodyHtml = (string) Gateway.Send(typeof(string), viewRequest);
            response.AddMessage(renderer.CreateMessageRun(mailDb, new MailMessageRun
            {
                Message = new EmailMessage
                {
                    To = sub.ToMailTos(),
                    Subject = string.Format(AppData.Info.NewsletterFmt, $"{newsletterDate:MMMM} {newsletterDate:yyyy}"),
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest), mailRun, sub));
        }

        mailDb.CompletedMailRun(mailRun, response);
        return response;
    }
}
