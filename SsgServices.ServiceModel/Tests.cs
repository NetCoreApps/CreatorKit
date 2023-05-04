using ServiceStack;
using ServiceStack.DataAnnotations;

namespace SsgServices.ServiceModel;

[Tag(Tag.Mail), ValidateIsAdmin, ExcludeMetadata]
[Route("/mail/test")]
[Route("/mail/test/{Layout}")]
[Route("/mail/test/{Layout}/{Template}")]
public class ViewTestMail : RenderEmailBase, IGet, IReturn<string>
{
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailPageOptions")]
    public string? Layout { get; set; }
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailLayoutOptions")]
    public string? Page { get; set; }
    public string? Body { get; set; }
}

[Tag(Tag.Emails)]
[ValidateIsAdmin]
public class MailTestMail : IPost, IReturn<MailResponse>
{
    [ValidateNotEmpty]
    public string Email { get; set; }
    [ValidateNotEmpty]
    public string FirstName { get; set; }
    [ValidateNotEmpty]
    public string LastName { get; set; }
    public string? Subject { get; set; }
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailLayoutOptions")]
    public string? Layout { get; set; }
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailPageOptions")]
    public string? Page { get; set; }
    
    [Input(Type = "textarea", Label = "Body (markdown)"), FieldCss(Field = "col-span-12")]
    public string? Body { get; set; }
}

[Tag(Tag.Emails)]
[ValidateIsAdmin]
public class MailNewsletter : IGet, IReturn<MailResponse>
{
    [ValidateNotEmpty]
    public string Email { get; set; }
    public string? Subject { get; set; }
    public int? Month { get; set; }
    public int? Year { get; set; }
    public bool? Send { get; set; }
}
