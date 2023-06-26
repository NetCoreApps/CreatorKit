using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel;
using ServiceStack;
using ServiceStack.Script;

namespace CreatorKit.Extensions;

public class CustomRendererServices : Service
{
    public EmailRenderer Renderer { get; set; }
    public WebsiteData WebsiteData { get; set; }
        
    public object Any(RenderDoc request) => WebsiteData.RenderDoc(VirtualFiles, request.Page);

    public async Task<object> Any(ViewMailData request)
    {
        if (request.Force == true)
            WebsiteData.MetaCache.Clear();
        
        var year = request.Year ?? DateTime.UtcNow.Year;
        var fromDate = new DateTime(year, request.Month ?? 1, 1);
        var meta = await WebsiteData.SearchAsync(fromDate: fromDate,
            toDate: request.Month != null ? new DateTime(year, request.Month.Value, 1).AddMonths(1) : null);
        
        return new ViewMailDataResponse
        {
            LastUpdated = WebsiteData.LastUpdated,
            SiteMeta = meta,
        };
    }

    public async Task<object> Any(RenderNewsletter request)
    {
        var fromDate = request.FromDate!;
        var toDate = request.ToDate ?? DateTime.UtcNow;
        var meta = await WebsiteData.SearchAsync(fromDate: fromDate, toDate: toDate);
        
        var context = Renderer.CreateMailContext(layout:"marketing", page:"newsletter", 
            args:new() {
                ["meta"] = meta
            });

        return await Renderer.RenderToHtmlResultAsync(Db, context, request, args: new() {
            ["title"] = $"{toDate:MMMM} {toDate:yyyy}",
            ["header"] = request.Header != null ? await context.RenderScriptAsync(request.Header, Renderer.PassContactArgs) : null,
            ["footer"] = request.Footer != null ? await context.RenderScriptAsync(request.Footer, Renderer.PassContactArgs) : null,
        });
    }
}
