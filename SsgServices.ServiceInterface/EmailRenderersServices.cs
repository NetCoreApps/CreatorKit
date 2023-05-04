using System;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Script;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class EmailRenderersServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }

    public async Task<object> Any(RenderCustomHtml request)
    {
        var context = Renderer.CreateMailContext(layout:request.Layout, page:request.Page);
        var evalBody = await context.RenderScriptAsync(request.Body, request.ToObjectDictionary());

        return await Renderer.RenderToHtmlResultAsync(Db, context, request, 
            args:new() {
                ["body"] = evalBody,
            });
    }

    public async Task<object> Any(RenderNewsletter request)
    {
        var year = request.Year ?? DateTime.UtcNow.Year;
        var fromDate = new DateTime(year, request.Month ?? 1, 1);
        var context = Renderer.CreateMailContext(layout:"layout-marketing", page:"newsletter",
            meta: MailData.Search(fromDate: fromDate,
                toDate: request.Month != null ? new DateTime(year, request.Month.Value, 1).AddMonths(1) : null));

        return await Renderer.RenderToHtmlResultAsync(Db, context, request, args: new() {
            ["title"] = $"{fromDate:MMMM} {fromDate:yyyy}"
        });
    }
}