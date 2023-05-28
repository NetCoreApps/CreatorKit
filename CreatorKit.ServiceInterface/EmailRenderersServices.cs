using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Script;
using CreatorKit.ServiceModel;
using Markdig;
using Markdig.Syntax;

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


    private static char[] InvalidFileNameChars = { '\"', '<', '>', '|', '\0', ':', '*', '?', '\\', '/' };
    public object Any(RenderDoc request)
    {
        var isValid = request.Page.IndexOf("..", StringComparison.Ordinal) == -1
            && request.Page.IndexOfAny(InvalidFileNameChars) == -1; 
        var file = isValid
            ? VirtualFiles.GetFile($"/docs/{request.Page}")
            : null;
        if (file == null)
            throw HttpError.NotFound("File not found");
        
        var pipeline = new MarkdownPipelineBuilder()
            .UseYamlFrontMatter()
            .UseAdvancedExtensions()
            .Build();
        
        var writer = new StringWriter();
        var renderer = new Markdig.Renderers.HtmlRenderer(writer);
        pipeline.Setup(renderer);

        var content = file.ReadAllText();
        var document = Markdown.Parse(content, pipeline);
        renderer.Render(document);

        var block = document
            .Descendants<Markdig.Extensions.Yaml.YamlFrontMatterBlock>()
            .FirstOrDefault();

        var doc = block?
            .Lines // StringLineGroup[]
            .Lines // StringLine[]
            .Select(x => $"{x}\n")
            .ToList()
            .Select(x => x.Replace("---", string.Empty))
            .Where(x => !string.IsNullOrWhiteSpace(x))
            .Select(x => KeyValuePairs.Create(x.LeftPart(':').Trim(), x.RightPart(':').Trim()))
            .ToObjectDictionary()
            .ConvertTo<MarkdownFile>();

        var html = writer.ToString();
        return html;
    }

}