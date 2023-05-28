using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel;
using ServiceStack;

namespace CreatorKit.Extensions;

public class CustomRendererServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }
    
    public async Task<object> Any(RenderNewsletter request)
    {
        var year = request.Year ?? DateTime.UtcNow.Year;
        var fromDate = new DateTime(year, request.Month ?? 1, 1);
        var meta = await MailData.SearchAsync(fromDate: fromDate,
            toDate: request.Month != null ? new DateTime(year, request.Month.Value, 1).AddMonths(1) : null);
        
        var context = Renderer.CreateMailContext(layout:"marketing", page:"newsletter", 
            args:new() {
                ["meta"] = meta
            });

        return await Renderer.RenderToHtmlResultAsync(Db, context, request, args: new() {
            ["title"] = $"{fromDate:MMMM} {fromDate:yyyy}"
        });
    }
}
