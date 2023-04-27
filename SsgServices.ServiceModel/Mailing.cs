using System;
using System.Collections.Generic;
using ServiceStack;
using ServiceStack.DataAnnotations;

namespace SsgServices.ServiceModel;

/** Models **/

[Icon(Svg = Icons.Contact)]
public class Subscription
{
    [AutoIncrement]
    public int Id { get; set; }
    public string Email { get; set; }
    [Index(Unique = true)]
    public string EmailLower { get; set; }

    public string FirstName { get; set; }
    public string LastName { get; set; }
    [FormatEnumFlags(nameof(MailingList))]
    public MailingList MailingLists { get; set; }

    public MailSource Source { get; set; }
    public string Token { get; set; }
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
    public string To { get; set; }
    public string Page { get; set; }
    public string Request { get; set; }
    public Dictionary<string,object> RequestArgs { get; set; }
    public EmailTemplate Template { get; set; }
    public EmailMessage Message { get; set; }
    public DateTime? CompletedDate { get; set; }
    public string? ErrorCode { get; set; }
    public string? ErrorMessage { get; set; }
}

[Icon(Svg = Icons.MailRun)]
public class MailRun
{
    [AutoIncrement]
    public int Id { get; set; }
    public MailingList MailingList { get; set; }
    public string Subject { get; set; }
    public string Request { get; set; }
    public Dictionary<string,object> RequestArgs { get; set; }
    public EmailTemplate Template { get; set; }
    public DateTime StartedAt { get; set; }
    public DateTime? CompletedAt { get; set; }
    public int EmailsSent { get; set; }
}

[Icon(Svg = Icons.Mail)]
[UniqueConstraint(nameof(MailRunId), nameof(SubscriptionId))]
public class MailRunMessage
{
    [AutoIncrement]
    public int Id { get; set; }
    public int MailRunId { get; set; }
    public int SubscriptionId { get; set; }
    public EmailMessage Message { get; set; }
    public DateTime? CompletedDate { get; set; }
    public string? ErrorCode { get; set; }
    public string? ErrorMessage { get; set; }
}

public enum MailSource
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
public class EmailTemplate
{
    public string Layout { get; set; }
    public string Page { get; set; }
    public string LayoutText { get; set; }
    public string PageText { get; set; }
    public Dictionary<string,object> Args { get; set; }
}

/** APIS **/

[Tag(Tag.Mail)]
public class SubscribeToMailingList : IPost, IReturn<SubscribeToMailingListResponse>
{
    [ValidateNotEmpty]
    public string Email { get; set; }
    [ValidateNotEmpty]
    public string FirstName { get; set; }
    [ValidateNotEmpty]
    public string LastName { get; set; }

    [Input(Type = "tag", EvalAllowableValues = "AppData.MailingListValues"), FieldCss(Field = "col-span-12")]
    public List<string>? MailingLists { get; set; }
    
    public MailSource Source { get; set; }
}
public class SubscribeToMailingListResponse
{
    public ResponseStatus ResponseStatus { get; set; }
}


[Tag(Tag.Mail)]
public class UnsubscribeToMailingList : IPost, IReturn<UnsubscribeToMailingListResponse>
{
    public string? ExternalRef { get; set; }
    public string? Email { get; set; }
    [Input(Type = "tag", EvalAllowableValues = "AppData.MailingListValues"), FieldCss(Field = "col-span-12")]
    public List<string> MailingLists { get; set; }
}
public class UnsubscribeToMailingListResponse
{
    public ResponseStatus ResponseStatus { get; set; }
}


[Tag(Tag.Mail)]
public class UnsubscribeFromMailingList : IPost, IReturnVoid
{
    public string? Email { get; set; }
    public string? ExternalRef { get; set; }
    [Input(Type = "tag", EvalAllowableValues = "AppData.MailingListValues"), FieldCss(Field = "col-span-12")]
    public List<string> MailingLists { get; set; }
}


[Tag(Tag.Mail)]
[ValidateIsAdmin]
public class QueryMail : QueryDb<Subscription> {}

[Tag(Tag.Mail)]
[ValidateIsAdmin]
[AutoPopulate(nameof(Subscription.ExternalRef), Eval = "nguid")]
[AutoPopulate(nameof(Subscription.CreatedDate), Eval = "utcNow")]
public class CreateMail : ICreateDb<Subscription>, IReturn<Subscription>
{
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public MailSource Source { get; set; }
    public int? AppUserId { get; set; }
}

[Tag(Tag.Mail)]
[ValidateIsAdmin]
[AutoPopulate(nameof(Subscription.MailingLists), Eval = "dto.MailingLists.fromEnumFlagsList(typeof('MailingList'))")]
public class UpdateMail : IPatchDb<Subscription>, IReturn<Subscription>
{
    public int Id { get; set; }
    public string? Email { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public MailSource? Source { get; set; }
    
    [Input(Type = "tag", EvalAllowableValues = "AppData.MailingListValues", Options = "{ converter:enumFlagsConverter('MailingList') }"), FieldCss(Field = "col-span-12")]
    public List<string>? MailingLists { get; set; }
    
    public string? ExternalRef { get; set; }
    public int? AppUserId { get; set; }
    public DateTime? CreatedDate { get; set; }
    public DateTime? VerifiedDate { get; set; }
    public DateTime? DeletedDate { get; set; }
    public DateTime? UnsubscribedDate { get; set; }
}

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

public abstract class RenderEmail
{
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
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

[Tag(Tag.Mail), ValidateIsAdmin, ExcludeMetadata]
[Route("/message/send/{id}")]
public class SendMailMessage : IGet, IReturn<MailMessage>
{
    [ValidateGreaterThan(0)]
    public long Id { get; set; }
    public bool? Force { get; set; }
}


[Tag(Tag.Mail), ValidateIsAdmin, ExcludeMetadata]
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
