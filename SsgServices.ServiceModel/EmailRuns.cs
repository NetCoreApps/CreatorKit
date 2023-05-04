using ServiceStack;
using ServiceStack.DataAnnotations;

namespace SsgServices.ServiceModel;

[Tag(Tag.Mail), ValidateIsAdmin]
[Description("Simple Text Email")]
public class SimpleTextMailRun : MailRunBase, IPost, IReturn<MailRunResponse>
{
    [ValidateNotEmpty]
    [FieldCss(Field = "col-span-12")]
    public string Subject { get; set; }
    [ValidateNotEmpty]
    [Input(Type = "textarea"), FieldCss(Field = "col-span-12", Input = "h-36")]
    public string Body { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
[Icon(Svg = Icons.TextMarkup)]
[Description("Markdown Email")]
public class MarkdownMailRun : MailRunBase, IPost, IReturn<MailRunResponse>
{
    [ValidateNotEmpty]
    [FieldCss(Field = "col-span-12")]
    public string Subject { get; set; }

    [Input(Type = "textarea", Label = "Body (markdown)"), FieldCss(Field = "col-span-12", Input = "h-36")]
    public string? Body { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
[Icon(Svg = Icons.RichHtml)]
[Description("Custom HTML Email")]
public class CustomHtmlMailRun : MailRunBase, IPost, IReturn<MailRunResponse>
{
    [ValidateNotEmpty]
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailLayoutOptions")]
    public string Layout { get; set; }
    [ValidateNotEmpty]
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailPageOptions")]
    public string Page { get; set; }
    [ValidateNotEmpty]
    public string Subject { get; set; }
    [Input(Type = "textarea", Label = "Body (markdown)"), FieldCss(Field = "col-span-12", Input = "h-36")]
    public string? Body { get; set; }
}

[Tag(Tag.Emails)]
[ValidateIsAdmin]
[Description("Generate Newsletter")]
[Icon(Svg = Icons.Newsletter)]
public class NewsletterMailRun : MailRunBase, IPost, IReturn<MailRunResponse>
{
    public int? Month { get; set; }
    public int? Year { get; set; }
}
