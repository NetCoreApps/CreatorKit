using System.Threading.Tasks;
using ServiceStack;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;

namespace CreatorKit.ServiceInterface;

public class EmailServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }

    public async Task<object> Any(SimpleTextEmail request)
    {
        var contact = await Db.GetOrCreateContact(request);
        var viewRequest = request.ConvertTo<RenderSimpleText>().FromContact(contact);
        var bodyText = (string) await Gateway.SendAsync(typeof(string), viewRequest);
        
        var email = await Renderer.CreateMessageAsync(Db, new MailMessage
        {
            Draft = request.Draft ?? false,
            Message = new EmailMessage
            {
                To = contact.ToMailTos(),
                Subject = request.Subject,
                BodyText = bodyText,
            },
        }.FromRequest(request));
        return email;
    }

    public async Task<object> Any(MarkdownEmail request)
    {
        var contact = await Db.GetOrCreateContact(request);
        var viewRequest = request.ConvertTo<RenderCustomHtml>().FromContact(contact);
        viewRequest.Layout = "layout";
        viewRequest.Page = "markdown";
        var bodyHtml = (string) await Gateway.SendAsync(typeof(string), viewRequest);

        var email = await Renderer.CreateMessageAsync(Db, new MailMessage
        {
            Draft = request.Draft ?? false,
            Message = new EmailMessage
            {
                To = contact.ToMailTos(),
                Subject = request.Subject,
                BodyHtml = bodyHtml,
            },
        }.FromRequest(viewRequest));
        return email;
    }

    public async Task<object> Any(CustomHtmlEmail request)
    {
        var contact = await Db.GetOrCreateContact(request);
        var viewRequest = request.ConvertTo<RenderCustomHtml>().FromContact(contact);
        var bodyHtml = (string) await Gateway.SendAsync(typeof(string), viewRequest);

        var email = await Renderer.CreateMessageAsync(Db, new MailMessage
        {
            Draft = request.Draft ?? false,
            Message = new EmailMessage
            {
                To = contact.ToMailTos(),
                Subject = request.Subject,
                BodyHtml = bodyHtml,
            },
        }.FromRequest(viewRequest));
        return email;
    }    
}
