using System;
using ServiceStack;
using ServiceStack.DataAnnotations;

namespace CreatorKit.ServiceModel;

[Tag(Tag.Mail), ValidateIsAdmin, ExcludeMetadata]
public class RenderNewsletter : RenderEmailBase, IGet, IReturn<string>
{
    [ValidateNotEmpty]
    public DateTime? FromDate { get; set; }
    public DateTime? ToDate { get; set; }
    public string? Header { get; set; }
    public string? Footer { get; set; }
}
