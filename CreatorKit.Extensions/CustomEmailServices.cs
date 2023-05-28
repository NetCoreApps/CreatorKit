using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using ServiceStack;

namespace CreatorKit.Extensions;

public class CustomEmailServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }

    public async Task<object> Any(MarkdownEmail request)
    {
        var contact = await Db.GetOrCreateContact(request);
        var viewRequest = request.ConvertTo<RenderCustomHtml>().FromContact(contact);
        viewRequest.Layout = "basic";
        viewRequest.Template = "empty";
        var bodyHtml = (string) await Gateway.SendAsync(typeof(string), viewRequest);

        var email = await Renderer.CreateMessageAsync(Db, new MailMessage
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
