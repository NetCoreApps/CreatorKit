using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.RenderTree;
using ServiceStack;
using ServiceStack.Script;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class EmailServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }

    public async Task<object> Any(SimpleTextEmail request)
    {
        var contact = await Db.GetOrCreateContact(request);
        var email = await Renderer.CreateMessageAsync(Db, new MailMessage
        {
            Message = new EmailMessage
            {
                To = contact.ToMailTos(),
                Subject = request.Subject,
                BodyText = request.Body,
            },
        }.FromRequest(request), send:request.Send == true);
        return email;
    }

    public async Task<object> Any(MarkdownEmail request)
    {
        var layout = "layout";
        var page = "markdown";
        var context = Renderer.CreateMailContext(layout, page);
        
        var evalBody = await context.RenderScriptAsync(request.Body, request.ToObjectDictionary());
        var bodyHtml = await Renderer.RenderToHtmlAsync(Db, context, request, args: new() {
            ["body"] = evalBody,
        });
        var sub = await Db.GetOrCreateContact(request);
        var email = await Renderer.CreateMessageAsync(Db, new MailMessage
        {
            Layout = layout,
            Page = page,
            Message = new EmailMessage
            {
                To = sub.ToMailTos(),
                Subject = request.Subject,
                BodyHtml = bodyHtml,
            },
        }.FromRequest(request), send:request.Send == true);
        return email;
    }

    public async Task<object> Any(CustomHtmlEmail request)
    {
        var context = Renderer.CreateMailContext(layout:request.Layout, page:request.Page);
        var evalBody = await context.RenderScriptAsync(request.Body, request.ToObjectDictionary());
        
        var bodyHtml = await Renderer.RenderToHtmlAsync(Db, context, request,
            args: new() {
                ["body"] = evalBody,
            });
        var sub = await Db.GetOrCreateContact(request);
        var email = await Renderer.CreateMessageAsync(Db, new MailMessage
        {
            Message = new EmailMessage
            {
                To = sub.ToMailTos(),
                Subject = request.Subject,
                BodyHtml = bodyHtml,
            },
        }.FromRequest(request), send:request.Send == true);
        return email;
    }    
}