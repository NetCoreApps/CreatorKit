using CreatorKit.ServiceModel.Types;
using ServiceStack;
using ServiceStack.DataAnnotations;

namespace CreatorKit.ServiceModel;

[Renderer(typeof(RenderCustomHtml), Layout = "basic", Template="empty")]
[Tag(Tag.Mail), ValidateIsAdmin]
[Icon(Svg = Icons.TextMarkup)]
[Description("Markdown Email")]
public class MarkdownEmail : CreateEmailBase, IPost, IReturn<MailMessage>
{
    [ValidateNotEmpty]
    [FieldCss(Field = "col-span-12")]
    public string Subject { get; set; }

    [ValidateNotEmpty]
    [Input(Type = "MarkdownEmailInput", Label = ""), FieldCss(Field = "col-span-12", Input = "h-56")]
    public string? Body { get; set; }
    public bool? Draft { get; set; }
}