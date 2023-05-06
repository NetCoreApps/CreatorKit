using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Script;
using CreatorKit.ServiceModel;

namespace CreatorKit.ServiceInterface;

public class EmailRenderersServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }

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
        var context = Renderer.CreateScriptContext();
        var evalBody = await context.RenderScriptAsync(request.Body, request.ToObjectDictionary());
        return evalBody;
    }

    public async Task<object> Any(RenderCustomHtml request)
    {
        var context = Renderer.CreateMailContext(layout:request.Layout, page:request.Template);
        var evalBody = !string.IsNullOrEmpty(request.Body) 
            ? await context.RenderScriptAsync(request.Body, request.ToObjectDictionary())
            : string.Empty;

        return await Renderer.RenderToHtmlResultAsync(Db, context, request, 
            args:new() {
                ["body"] = evalBody,
            });
    }

    public async Task<object> Any(RenderNewsletter request)
    {
        var year = request.Year ?? DateTime.UtcNow.Year;
        var fromDate = new DateTime(year, request.Month ?? 1, 1);
        var context = Renderer.CreateMailContext(layout:"marketing", page:"newsletter",
            meta: MailData.Search(fromDate: fromDate,
                toDate: request.Month != null ? new DateTime(year, request.Month.Value, 1).AddMonths(1) : null));

        return await Renderer.RenderToHtmlResultAsync(Db, context, request, args: new() {
            ["title"] = $"{fromDate:MMMM} {fromDate:yyyy}"
        });
    }
}