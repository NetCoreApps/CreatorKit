using System;
using System.Collections.Generic;
using ServiceStack;
using ServiceStack.DataAnnotations;

namespace CreatorKit.ServiceModel.Types;

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

public enum InvalidEmailStatus
{
    Invalid,
    /// <summary>
    /// Email servers for these domains do not provide a definitive verification response
    /// </summary>
    AcceptAll,
    Unknown,
    Disposable,
}

public class InvalidEmail
{
    [AutoIncrement]
    public int Id { get; set; }
    public string Email { get; set; }
    public string EmailLower { get; set; }
    public InvalidEmailStatus Status { get; set; }
}

[Icon(Svg = Icons.Mail)]
public class MailMessage
{
    [AutoIncrement]
    public int Id { get; set; }
    public string Email { get; set; }
    public string? Layout { get; set; }
    public string? Template { get; set; }
    public string Renderer { get; set; }
    public Dictionary<string,object> RendererArgs { get; set; }
    public EmailMessage Message { get; set; }
    public bool Draft { get; set; }
    public string ExternalRef { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? StartedDate { get; set; }
    public DateTime? CompletedDate { get; set; }
    public ResponseStatus? Error { get; set; }
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
    public string Template { get; set; }
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
    [Ref(Model = nameof(Contact), RefId = "Id", RefLabel = "Email")]
    public int ContactId { get; set; }
    [Reference]
    [Format(FormatMethods.Hidden)]
    public Contact Contact { get; set; }
    public string Renderer { get; set; }
    public Dictionary<string,object> RendererArgs { get; set; }
    public string ExternalRef { get; set; }
    public EmailMessage Message { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? StartedDate { get; set; }
    public DateTime? CompletedDate { get; set; }
    public ResponseStatus? Error { get; set; }
}

[Icon(Svg = Icons.Mail)]
[NamedConnection("archive")]
public class ArchiveMessage : MailMessage {}

[Icon(Svg = Icons.MailRun)]
[NamedConnection("archive")]
public class ArchiveRun : MailRun {}

[Icon(Svg = Icons.Mail)]
[NamedConnection("archive")]
public class ArchiveMessageRun
{
    [AutoIncrement]
    public int Id { get; set; }
    public int MailRunId { get; set; }
    public int ContactId { get; set; }
    public string Renderer { get; set; }
    public Dictionary<string,object> RendererArgs { get; set; }
    public string ExternalRef { get; set; }
    public EmailMessage Message { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? StartedDate { get; set; }
    public DateTime? CompletedDate { get; set; }
    public ResponseStatus? Error { get; set; }
}

public enum Source
{
    Unknown,
    UI,
    Website,
    System,
    Migration,
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
    public string? Body { get; set; }
    public string? BodyHtml { get; set; }
    public string? BodyText { get; set; }
}
