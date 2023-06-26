using System;
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
    [ValidateNotEmpty]
    public DateTime? FromDate { get; set; }
    public DateTime? ToDate { get; set; }
    [Input(Type = "MarkdownEmailInput"), FieldCss(Field = "col-span-12", Input = "h-56")]
    public string? Header { get; set; }
    [Input(Type = "MarkdownEmailInput"), FieldCss(Field = "col-span-12", Input = "h-56")]
    public string? Footer { get; set; }
}