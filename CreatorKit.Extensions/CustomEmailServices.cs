using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using ServiceStack;

namespace CreatorKit.Extensions;

public class CustomEmailServices(EmailRenderer renderer, IMailProvider mail) : Service
{
    public object Any(MarkdownEmail request)
    {
        var contact = Db.GetOrCreateContact(request);
        var viewRequest = request.ConvertTo<RenderCustomHtml>().FromContact(contact);
        viewRequest.Layout = "basic";
        viewRequest.Template = "empty";
        var bodyHtml = (string)Gateway.Send(typeof(string), viewRequest);

        using var mailDb = mail.OpenMonthDb();
        var email = renderer.CreateMessage(mailDb, new MailMessage
        {
            Draft = request.Draft ?? false,
            Message = new EmailMessage
            {
                To = contact.ToMailTos(),
                Subject = request.Subject,
                Body = request.Body,
                BodyHtml = bodyHtml,
            },
        }.FromRequest(viewRequest));
        return email;
    }
}
