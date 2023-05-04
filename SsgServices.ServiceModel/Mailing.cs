using System;
using System.Collections.Generic;
using ServiceStack;
using ServiceStack.DataAnnotations;

namespace SsgServices.ServiceModel;

/** Models **/

[Icon(Svg = Icons.Contact)]
public class Contact
{
    [AutoIncrement]
    public int Id { get; set; }
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Source Source { get; set; }
    [FormatEnumFlags(nameof(MailingList))]
    public MailingList MailingLists { get; set; }
    public string Token { get; set; }
    [Index(Unique = true)]
    public string EmailLower { get; set; }
    [Index]
    public string NameLower { get; set; }
    [Index(Unique = true)]
    public string ExternalRef { get; set; }
    public int? AppUserId { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? VerifiedDate { get; set; }
    public DateTime? DeletedDate { get; set; }
    public DateTime? UnsubscribedDate { get; set; }
}

[Icon(Svg = Icons.Mail)]
public class MailMessage
{
    [AutoIncrement]
    public int Id { get; set; }
    public string ExternalRef { get; set; }
    public string Email { get; set; }
    public string Layout { get; set; }
    public string Page { get; set; }
    public string Renderer { get; set; }
    public Dictionary<string,object> RendererArgs { get; set; }
    public EmailMessage Message { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? StartedDate { get; set; }
    public DateTime? CompletedDate { get; set; }
    public string? ErrorCode { get; set; }
    public string? ErrorMessage { get; set; }
}

[Icon(Svg = Icons.MailRun)]
public class MailRun
{
    [AutoIncrement]
    public int Id { get; set; }
    [FormatEnumFlags(nameof(MailingList))]
    public MailingList MailingList { get; set; }
    public string Generator { get; set; }
    public Dictionary<string,object> GeneratorArgs { get; set; }
    public string Layout { get; set; }
    public string Page { get; set; }
    public string ExternalRef { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? GeneratedDate { get; set; }
    public DateTime? SentDate { get; set; }
    public DateTime? CompletedDate { get; set; }
    public int EmailsCount { get; set; }
}

[Icon(Svg = Icons.Mail)]
[UniqueConstraint(nameof(MailRunId), nameof(ContactId))]
public class MailMessageRun
{
    [AutoIncrement]
    public int Id { get; set; }
    [ForeignKey(typeof(MailRun), OnDelete = "CASCADE")]
    public int MailRunId { get; set; }
    [Ref(Model = nameof(ServiceModel.Contact), RefId = nameof(ServiceModel.Contact.Id), RefLabel = nameof(ServiceModel.Contact.Email))]
    public int ContactId { get; set; }
    [Reference]
    [Format(FormatMethods.Hidden)]
    public Contact Contact { get; set; }
    public string Renderer { get; set; }
    public Dictionary<string,object> RendererArgs { get; set; }
    public string ExternalRef { get; set; }
    public EmailMessage Message { get; set; }
    public DateTime? StartedDate { get; set; }
    public DateTime? CompletedDate { get; set; }
    public string? ErrorCode { get; set; }
    public string? ErrorMessage { get; set; }
}

public enum Source
{
    Unknown,
    UI,
    Website,
}

[Flags]
public enum MailingList
{
    None = 0,
    [Description("Test Group")]
    TestGroup = 1 << 0,
    [Description("Monthly Newsletter")]
    MonthlyNewsletter = 1 << 1,
    [Description("New Blog Posts")]
    BlogPostReleases = 1 << 2,
    [Description("New Videos")]
    VideoReleases = 1 << 3,
    [Description("New Product Releases")]
    ProductReleases = 1 << 4,
    [Description("Yearly Updates")]
    YearlyUpdates = 1 << 5,
}


public class MailTo
{
    public string Email { get; set; }
    public string Name { get; set; }
}
public class EmailMessage
{
    public List<MailTo> To { get; set; }
    public List<MailTo> Cc { get; set; }
    public List<MailTo> Bcc { get; set; }
    public MailTo? From { get; set; }
    public string Subject { get; set; }
    public string? BodyHtml { get; set; }
    public string? BodyText { get; set; }
}

public class Archive
{
    public string Name { get; set; }
    public int ContactCount { get; set; }
    public int MailMessageCount { get; set; }
    public int MailRunCount { get; set; }
    public int MailMessageRun { get; set; }
    public DateTime LastUpdated { get; set; }
}


/** APIS **/

[Tag(Tag.Mail)]
[ValidateIsAdmin]
public class MailTestGroup : IPost, IReturn<EmptyResponse>
{
    public string? Subject { get; set; }
    public string? LayoutTemplate { get; set; }
    public string? HtmlTemplate { get; set; }
    public string? TextTemplate { get; set; }
}

public class MailResponse
{
    public MailTo To { get; set; }
    public string Subject { get; set; }
    public string SendUrl { get; set; }
    public string ViewUrl { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

public abstract class CreateEmailBase
{
    [ValidateNotEmpty]
    [Input(Type="EmailInput")]
    public string Email { get; set; }
    [ValidateNotEmpty]
    [FieldCss(Field = "col-span-3")]
    public string FirstName { get; set; }
    [ValidateNotEmpty]
    [FieldCss(Field = "col-span-3")]
    public string LastName { get; set; }
}

public abstract class RenderEmailBase
{
    public string? Email { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? ExternalRef { get; set; }
}

public abstract class MailRunBase
{
    [ValidateNotEmpty]
    public MailingList MailingList { get; set; }
}

public class MailRunResponse
{
    public int Id { get; set; }
    public DateTime StartedAt { get; set; }
    public TimeSpan TimeTaken { get; set; }
    public List<int> CreatedIds { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}


[Tag(Tag.Mail), ValidateIsAdmin, ExcludeMetadata]
[Route("/message/view/{id}")]
public class ViewMailMessage : IGet, IReturn<string>
{
    [ValidateGreaterThan(0)]
    public long Id { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin, ExcludeMetadata]
[Route("/messagerun/view/{id}")]
public class ViewMailRunMessage : IGet, IReturn<string>
{
    [ValidateGreaterThan(0)]
    public long Id { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
[Route("/message/send/{id}")]
public class SendMailMessage : IGet, IReturn<MailMessage>
{
    [ValidateGreaterThan(0)]
    public long Id { get; set; }
    public bool? Force { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
[Route("/messagerun/send/{id}")]
public class SendMailMessageRun : IGet, IReturn<MailMessage>
{
    [ValidateGreaterThan(0)]
    public long Id { get; set; }
    public bool? Force { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
public class ViewMailData
{
    public bool? Load { get; set; }
}

public class ViewMailDataResponse
{
    public DateTime LastUpdated { get; set; }
    public List<MarkdownFile> LatestPosts { get; set; }
}

public class MarkdownFile
{
    public string Slug { get; set; }
    public string? Layout { get; set; }
    public bool Draft { get; set; }
    public string Title { get; set; }
    public string Summary { get; set; }
    public string? Image { get; set; }
    public string? Author { get; set; }
    public List<string>? Tags { get; set; } = new();
    public DateTime Date { get; set; }
    public string Url { get; set; }
    public int? WordCount { get; set; }
    public int? LineCount { get; set; }
    public int MinutesToRead => (int)Math.Ceiling((WordCount ?? 1) / (double)225);
}

[Route("/verify/email/{ExternalRef}")]
public class VerifyEmailAddress : IReturnVoid
{
    public string ExternalRef { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
public class QueryMailMessages : QueryDb<MailMessage> {}

[Tag(Tag.Mail), ValidateIsAdmin]
public class UpdateMailMessage : IPatchDb<MailMessage>, IReturn<MailMessage>
{
    public int Id { get; set; }
    public string? Email { get; set; }
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailLayoutOptions")]
    public string? Layout { get; set; }
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailPageOptions")]
    public string? Page { get; set; }
    public string? Renderer { get; set; }
    public Dictionary<string,object>? RendererArgs { get; set; }
    public EmailMessage? Message { get; set; }
    public DateTime? CompletedDate { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
public class DeleteMailMessages : IDeleteDb<MailMessage>, IReturnVoid
{
    public int Id { get; set; }
}


[Tag(Tag.Mail), ValidateIsAdmin]
public class QueryMailRuns : QueryDb<MailRun>
{
    public int? Id { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
public class CreateMailRun : ICreateDb<MailRun>, IReturn<MailRun>
{
    [Input(Type = "tag", EvalAllowableValues = "AppData.MailingListValues"), FieldCss(Field = "col-span-12")]
    public MailingList MailingList { get; set; }
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailLayoutOptions")]
    public string Layout { get; set; }
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailPageOptions")]
    public string Page { get; set; }
    [Input(Type = "combobox", EvalAllowableValues = "AppData.MailRunGeneratorApis")]
    public string Generator { get; set; }
    public Dictionary<string,object> GeneratorArgs { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
public class UpdateMailRun : IUpdateDb<MailRun>, IReturn<MailRun>
{
    public int Id { get; set; }
    public MailingList? MailingList { get; set; }
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailLayoutOptions")]
    public string? Layout { get; set; }
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailPageOptions")]
    public string? Page { get; set; }
    [Input(Type = "combobox", EvalAllowableValues = "AppData.MailRunGeneratorApis")]
    public string? Generator { get; set; }
    public Dictionary<string,object>? GeneratorArgs { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? GeneratedDate { get; set; }
    public DateTime? SentDate { get; set; }
    public DateTime? CompletedDate { get; set; }
    public int? EmailsCount { get; set; }
}
[Tag(Tag.Mail), ValidateIsAdmin]
public class DeleteMailRun : IDeleteDb<MailRun>, IReturnVoid
{
    public int Id { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
public class SendMailRun : IPost, IReturnVoid
{
    public int Id { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
public class ViewMailRunInfo : IGet, IReturn<ViewMailRunInfoResponse>
{
    public int Id { get; set; }
}
public class ViewMailRunInfoResponse
{
    public int MessagesSent { get; set; }
    public int TotalMessages { get; set; }
    public TimeSpan TimeTaken { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}


[Tag(Tag.Mail), ValidateIsAdmin]
public class QueryMailRunMessages : QueryDb<MailMessageRun> {}

[Tag(Tag.Mail), ValidateIsAdmin]
public class UpdateMailRunMessage : IPatchDb<MailMessageRun>, IReturn<MailMessageRun>
{
    public int Id { get; set; }
    public int MailRunId { get; set; }
    public int ContactId { get; set; }
    public string Renderer { get; set; }
    public Dictionary<string,object> RendererArgs { get; set; }
    public EmailMessage? Message { get; set; }
    public DateTime? StartedDate { get; set; }
    public DateTime? CompletedDate { get; set; }
}
[Tag(Tag.Mail), ValidateIsAdmin]
public class DeleteMailRunMessage : IDeleteDb<MailMessageRun>, IReturnVoid
{
    public int Id { get; set; }
}

public static class MailingExtensions
{
    public static MailTo ToMailTo(this Contact sub) => new()
    {
        Email = sub.Email,
        Name = $"{sub.FirstName} {sub.LastName}",
    };
    public static List<MailTo> ToMailTos(this Contact sub) => new() { sub.ToMailTo() };
}
