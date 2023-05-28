using ServiceStack;
using ServiceStack.DataAnnotations;

namespace CreatorKit.ServiceModel;

[Renderer(typeof(RenderNewsletter))]
[Tag(Tag.Emails)]
[ValidateIsAdmin]
[Description("Generate Newsletter")]
[Icon(Svg = Icons.Newsletter)]
public class NewsletterMailRun : MailRunBase, IPost, IReturn<MailRunResponse>
{
    public int? Month { get; set; }
    public int? Year { get; set; }
}