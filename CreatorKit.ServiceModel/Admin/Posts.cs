using System;
using CreatorKit.ServiceModel.Types;
using ServiceStack;
using ServiceStack.DataAnnotations;

namespace CreatorKit.ServiceModel.Admin;

[Tag(Tag.Admin)]
[ValidateIsAdmin]
public class AdminQueryAppUsers : QueryDb<AppUser> {}

[Tag(Tag.Admin)]
[ValidateIsAdmin]
public class AdminQueryCommentReports : QueryDb<CommentReport> {}

[Tag(Tag.Admin)]
[ValidateIsAdmin]
public class AdminUpdateCommentReport : IPatchDb<CommentReport>, IReturn<CommentReport>
{
    [Input(Type = "hidden")]
    public long Id { get; set; }

    [References(typeof(AppUser))]
    public int? AppUserId { get; set; }
    
    public PostReport? PostReport { get; set; }
    
    [Input(Type = "textarea"), FieldCss(Field = "col-span-12", Input = "h-20")]
    public string? Description { get; set; }

    public ModerationDecision? Moderation { get; set; }
    
    public string? Notes { get; set; }
}

[Tag(Tag.Admin)]
[ValidateIsAdmin]
public class AdminDeleteCommentReport : IDeleteDb<CommentReport>, IReturnVoid
{
    public int Id { get; set; }
}


[Tag(Tag.Admin)]
[ValidateIsAdmin]
[AutoApply(Behavior.AuditQuery)]
public class AdminQueryThreads : QueryDb<Thread>
{
    public int? Id { get; set; }
}
[Tag(Tag.Admin)]
[ValidateIsAdmin]
[AutoApply(Behavior.AuditModify)]
public class AdminUpdateThread : IPatchDb<Thread>, IReturn<Thread>
{
    public int Id { get; set; }
    public string Url { get; set; }
    public string Description { get; set; }
    public string ExternalRef { get; set; }
    public long? RefId { get; set; }
    public string RefIdStr { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? ClosedDate { get; set; }
    public DateTime? DeletedDate { get; set; }
}
[Tag(Tag.Admin)]
[ValidateIsAdmin]
public class AdminDeleteThread : IDeleteDb<Thread>, IReturnVoid
{
    public int Id { get; set; }
}

