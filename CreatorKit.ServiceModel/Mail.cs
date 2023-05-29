using System;
using System.Collections.Generic;
using ServiceStack;
using ServiceStack.DataAnnotations;
using CreatorKit.ServiceModel.Types;

namespace CreatorKit.ServiceModel;

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
    [FieldCss(Field = "col-span-6 lg:col-span-3")]
    public string FirstName { get; set; }
    [ValidateNotEmpty]
    [FieldCss(Field = "col-span-6 lg:col-span-3")]
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
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailTemplateOptions")]
    public string? Template { get; set; }
    public string? Renderer { get; set; }
    public Dictionary<string,object>? RendererArgs { get; set; }
    public EmailMessage? Message { get; set; }
    public DateTime? CompletedDate { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
public class UpdateMailMessageDraft : IReturn<MailMessage>
{
    [Input(Type = "hidden")]
    public int Id { get; set; }
    
    [Input(Type = "text", ReadOnly = true)]
    public string Email { get; set; }

    [Input(Type = "text", ReadOnly = true)]
    public string Renderer { get; set; }

    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailLayoutOptions")]
    public string? Layout { get; set; }
    
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailTemplateOptions")]
    public string? Template { get; set; }
    
    [ValidateNotEmpty]
    [FieldCss(Field = "col-span-12")]
    public string Subject { get; set; }
    [Input(Type = "MarkdownEmailInput", Label = ""), FieldCss(Field = "col-span-12", Input = "h-56")]
    public string? Body { get; set; }
    [Input(Type = "hidden")]
    public bool? Send { get; set; }
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
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailTemplateOptions")]
    public string Template { get; set; }
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
    [Input(Type = "combobox", EvalAllowableValues = "AppData.EmailTemplateOptions")]
    public string? Template { get; set; }
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

[Tag(Tag.Mail), ValidateIsAdmin]
[Route("/mail/vars")]
public class ViewAppData : IGet, IReturn<ViewAppDataResponse> {}
public class ViewAppDataResponse
{
    public string WebsiteBaseUrl { get; set; }
    public string BaseUrl { get; set; }
    public Dictionary<string, Dictionary<string, string>> Vars { get; set; }
    public List<int> BannedUserIds { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

[Tag(Tag.Mail), ValidateIsAdmin]
public class ViewAppStats : IGet, IReturn<ViewAppStatsResponse> {}
public class ViewAppStatsResponse
{
    public Dictionary<string, int> Totals { get; set; }
    public Dictionary<string, int> Before30DayTotals { get; set; }
    public Dictionary<string, int> Last30DayTotals { get; set; }
    public Dictionary<string, int> ArchivedTotals { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}


public class ArchiveMail : IPost, IReturn<ArchiveMailResponse>
{
    public bool? Messages { get; set; }
    public bool? MailRuns { get; set; }
    [ValidateNotNull]
    public int? OlderThanDays { get; set; }
}
public class ArchiveMailResponse
{
    public List<int> ArchivedMessageIds { get; set; }
    public List<int> ArchivedMailRunIds { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

[Tag(Tag.Archive)]
public class QueryArchiveMessages : QueryDb<ArchiveMessage> {}
[Tag(Tag.Archive)]
public class QueryArchiveRuns : QueryDb<ArchiveRun> {}
[Tag(Tag.Archive)]
public class QueryArchiveMessageRuns : QueryDb<ArchiveMessageRun> {}

public static class MailingExtensions
{
    public static MailTo ToMailTo(this Contact sub) => new()
    {
        Email = sub.Email,
        Name = $"{sub.FirstName} {sub.LastName}",
    };
    public static List<MailTo> ToMailTos(this Contact sub) => new() { sub.ToMailTo() };
}
