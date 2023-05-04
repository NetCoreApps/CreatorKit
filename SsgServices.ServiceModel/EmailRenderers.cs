using ServiceStack;
using ServiceStack.DataAnnotations;

namespace SsgServices.ServiceModel;

[Tag(Tag.Mail), ValidateIsAdmin, ExcludeMetadata]
[Route("/mail/view")]
public class RenderCustomHtml : RenderEmailBase, IGet, IReturn<string>
{
    [ValidateNotEmpty]
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailPageOptions")]
    public string Layout { get; set; }

    [ValidateNotEmpty]
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailLayoutOptions")]
    public string Page { get; set; }
    
    public string Body { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin, ExcludeMetadata]
[Route("/mail/newsletter")]
[Route("/mail/newsletter/{Month}")]
public class RenderNewsletter : RenderEmailBase, IGet, IReturn<string>
{
    public int? Month { get; set; }
    public int? Year { get; set; }
}
