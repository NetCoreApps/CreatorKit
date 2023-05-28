using System.Collections.Concurrent;
using ServiceStack;
using CreatorKit.ServiceModel;
using Markdig;
using Markdig.Syntax;
using ServiceStack.IO;

namespace CreatorKit.ServiceInterface;

public class WebsiteData
{
    public DateTime LastUpdated { get; set; }
    public AppData AppData { get; }

    public WebsiteData(AppData appData)
    {
        AppData = appData;
    }

    public TimeSpan CacheDuration { get; set; } = TimeSpan.FromMinutes(10);
    public ConcurrentDictionary<int, SiteMeta> MetaCache { get; } = new();

    public async Task<SiteMeta> SearchAsync(DateTime? fromDate = null, DateTime? toDate = null)
    {
        var year = fromDate?.Year ?? DateTime.UtcNow.Year;
        var metaCache = MetaCache.TryGetValue(year, out var siteMeta) && siteMeta.CreatedDate < DateTime.UtcNow.Add(CacheDuration)
            ? siteMeta
            : null;

        if (metaCache == null)
        {
            var metaJson = await AppData.WebsiteBaseUrl.CombineWith($"/meta/{year}/all.json").GetJsonFromUrlAsync();
            metaCache = metaJson.FromJson<SiteMeta>();
            metaCache.CreatedDate = DateTime.UtcNow;
            MetaCache[year] = metaCache;
        }

        var results = new SiteMeta
        {
            CreatedDate = metaCache.CreatedDate,
            Pages = WithinRange(metaCache.Pages, fromDate, toDate).ToList(),
            Posts = WithinRange(metaCache.Posts, fromDate, toDate).ToList(),
            WhatsNew = WithinRange(metaCache.WhatsNew, fromDate, toDate).ToList(),
            Videos = WithinRange(metaCache.Videos, fromDate, toDate).ToList(),
        };
        return results;
    }

    private static IEnumerable<MarkdownFile> WithinRange(IEnumerable<MarkdownFile> docs, DateTime? fromDate, DateTime? toDate)
    {
        if (fromDate != null)
            docs = docs.Where(x => x.Date >= fromDate);
        if (toDate != null)
            docs = docs.Where(x => x.Date < toDate);
        return docs;
    }

    private static readonly char[] InvalidFileNameChars = { '\"', '<', '>', '|', '\0', ':', '*', '?', '\\', '/' };
    public static string RenderDoc(IVirtualFiles vfs, string page)
    {
        var isValid = !page.Contains("..")
                      && page.IndexOfAny(InvalidFileNameChars) == -1; 
        var file = isValid
            ? vfs.GetFile($"/docs/{page}")
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
