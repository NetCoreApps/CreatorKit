using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Script;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using Markdig;
using Markdig.Syntax;
using ServiceStack.OrmLite;
using ServiceStack.Web;

namespace CreatorKit.ServiceInterface;

public class EmailRenderersServices(EmailRenderer renderer, IMailProvider mail) : Service
{
    public async Task<object> Any(PreviewEmail request)
    {
        var args = new Dictionary<string,object>(request.RequestArgs ?? new(), StringComparer.OrdinalIgnoreCase);
        
        var defaultValues = new Dictionary<string, object>
        {
            [nameof(RenderEmailBase.Email)] = "email@example.org",
            [nameof(RenderEmailBase.FirstName)] = "First",
            [nameof(RenderEmailBase.LastName)] = "Last",
            [nameof(RenderEmailBase.ExternalRef)] = "0123456789"
        };
        foreach (var entry in defaultValues)
        {
            args.TryAdd(entry.Key, entry.Value);
        }

        var renderRequestType = request.Renderer != null
            ? HostContext.Metadata.GetRequestType(request.Renderer)
            : null;

        if (renderRequestType == null && request.Request != null)
        {
            var requestType = HostContext.Metadata.GetRequestType(request.Request);
            var rendererAttr = requestType.FirstAttribute<RendererAttribute>();
            renderRequestType = rendererAttr?.Type;
            if (rendererAttr?.Layout != null)
                args.TryAdd(nameof(RenderCustomHtml.Layout), rendererAttr.Layout);
            if (rendererAttr?.Template != null)
                args.TryAdd(nameof(RenderCustomHtml.Template), rendererAttr.Template);
        }
        renderRequestType ??= typeof(RenderSimpleText);

        var renderRequest = args.FromObjectDictionary(renderRequestType);
        var response = await HostContext.ServiceController.ExecuteAsync(renderRequest, Request);
        return response;
    }

    public async Task<object> Any(RenderSimpleText request)
    {
        var context = renderer.CreateScriptContext();
        var evalBody = !string.IsNullOrEmpty(request.Body) 
            ? await context.RenderScriptAsync(request.Body, request.ToObjectDictionary())
            : string.Empty;
        return evalBody;
    }

    public object Any(RenderCustomHtml request)
    {
        var context = renderer.CreateMailContext(layout:request.Layout, page:request.Template);
        var evalBody = !string.IsNullOrEmpty(request.Body) 
            ? context.RenderScript(request.Body, request.ToObjectDictionary())
            : string.Empty;

        return renderer.RenderToHtmlResult(Db, context, request, 
            args:new() {
                ["body"] = evalBody,
            });
    }
    
    public async Task<object> Any(UpdateMailMessageDraft request)
    {
        using var mailDb = mail.OpenMonthDb();
        var message = mailDb.SingleById<MailMessage>(request.Id);
        var renderRequestType = HostContext.Metadata.GetRequestType(message.Renderer);
        message.Layout = request.Layout;
        message.Template = request.Template;
        message.Message.Subject = request.Subject;
        message.Message.Body = request.Body;
        message.Draft = request.Send != true;

        message.RendererArgs.Set(nameof(message.Layout), message.Layout);
        message.RendererArgs.Set(nameof(message.Template), message.Template);
        message.RendererArgs.Set(nameof(message.Message.Body), message.Message.Body);

        var renderRequest = message.RendererArgs.FromObjectDictionary(renderRequestType);
        var response = await HostContext.ServiceController.ExecuteAsync(renderRequest, Request);
        if (response is IHttpError httpError)
            return httpError;
        var responseBody = response is IHttpResult httpResult ? httpResult.Response.ToString() : response.ToString();
        
        if (message.Renderer == nameof(RenderSimpleText))
            message.Message.BodyText = responseBody;
        else
            message.Message.BodyHtml = responseBody;

        mailDb.Update(message);
        
        if (request.Send == true)
        {
            renderer.SendMailMessage(message.Id);
        }

        return message;
    }

    public object Any(SimpleTextEmail request)
    {
        var contact = Db.GetOrCreateContact(request);
        var viewRequest = request.ConvertTo<RenderSimpleText>().FromContact(contact);
        var bodyText = (string) Gateway.Send(typeof(string), viewRequest);

        using var mailDb = mail.OpenMonthDb();
        var email = renderer.CreateMessage(mailDb, new MailMessage
        {
            Draft = request.Draft ?? false,
            Message = new EmailMessage
            {
                To = contact.ToMailTos(),
                Subject = request.Subject,
                Body = request.Body,
                BodyText = bodyText,
            },
        }.FromRequest(request));
        return email;
    }

    public object Any(CustomHtmlEmail request)
    {
        var contact = Db.GetOrCreateContact(request);
        var viewRequest = request.ConvertTo<RenderCustomHtml>().FromContact(contact);
        var bodyHtml = (string) Gateway.Send(typeof(string), viewRequest);

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
