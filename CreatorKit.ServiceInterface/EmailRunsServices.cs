using System.Threading.Tasks;
using ServiceStack;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;

namespace CreatorKit.ServiceInterface;

public class EmailRunsServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }

    public async Task<object> Any(SimpleTextMailRun request)
    {
        var response = Renderer.CreateMailRunResponse();

        var mailRun = await Renderer.CreateMailRunAsync(Db, new MailRun(), request);
        foreach (var sub in await Db.GetActiveSubscribersAsync(request.MailingList))
        {
            var viewRequest = request.ConvertTo<RenderSimpleText>().FromContact(sub);
            var bodyHtml = (string) await Gateway.SendAsync(typeof(string), viewRequest);

            response.AddMessage(await Renderer.CreateMessageRunAsync(Db, new MailMessageRun
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
        
        await Db.CompletedMailRunAsync(mailRun, response);
        return response;
    }
        
    public async Task<object> Any(MarkdownMailRun request)
    {
        var to = request.ConvertTo<CustomHtmlMailRun>();
        to.Layout = "basic";
        to.Template = "empty";
        return await Any(to);
    }

    public async Task<object> Any(CustomHtmlMailRun request)
    {
        var response = Renderer.CreateMailRunResponse();
        
        var mailRun = await Renderer.CreateMailRunAsync(Db, new MailRun {
            Layout = request.Layout,
            Template = request.Template,
        }, request);
        
        foreach (var sub in await Db.GetActiveSubscribersAsync(request.MailingList))
        {
            var viewRequest = request.ConvertTo<RenderCustomHtml>().FromContact(sub);
            var bodyHtml = (string) await Gateway.SendAsync(typeof(string), viewRequest);

            response.AddMessage(await Renderer.CreateMessageRunAsync(Db, new MailMessageRun
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
        
        await Db.CompletedMailRunAsync(mailRun, response);
        return response;
    }
}