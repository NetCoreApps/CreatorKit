using ServiceStack;
using ServiceStack.DataAnnotations;

namespace CreatorKit.ServiceModel;

[Tag(Tag.Mail), ValidateIsAdmin, ExcludeMetadata]
public class RenderNewsletter : RenderEmailBase, IGet, IReturn<string>
{
    public int? Month { get; set; }
    public int? Year { get; set; }
}