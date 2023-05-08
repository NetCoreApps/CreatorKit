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
[AutoApply(Behavior.AuditDelete)]
public class AdminDeleteThread : IDeleteDb<Thread>, IReturnVoid
{
    public int Id { get; set; }
}


[Tag(Tag.Admin)]
[ValidateIsAdmin]
public class AdminQueryComments : QueryDb<Comment> {}
[Tag(Tag.Admin)]
[ValidateIsAdmin]
[AutoApply(Behavior.AuditModify)]
public class AdminUpdateComment : IPatchDb<Comment>, IReturn<Comment>
{
    public int Id { get; set; }
    public int? ThreadId { get; set; }
    public int? ReplyId { get; set; }
    public int? UpVotes { get; set; }
    public int? DownVotes { get; set; }
    public int? Votes { get; set; }
    public string? FlagReason { get; set; }
    public string? Notes { get; set; }
    public int? AppUserId { get; set; }
    [Input(Type = "textarea"), FieldCss(Field = "col-span-12", Input = "h-36")]
    public string Content { get; set; }
}
[Tag(Tag.Admin)]
[ValidateIsAdmin]
[AutoApply(Behavior.AuditSoftDelete)]
public class AdminDeleteComment : IDeleteDb<Comment>, IReturnVoid
{
    public int Id { get; set; }
}


[Tag(Tag.Admin)]
[ValidateIsAdmin]
public class AdminQueryCommentVotes : QueryDb<CommentVote> {}

[Tag(Tag.Admin)]
[ValidateIsAdmin]
[AutoApply(Behavior.AuditModify)]
public class AdminUpdateCommentVote : IPatchDb<CommentVote>, IReturn<CommentVote>
{
    public long Id { get; set; }
    public int CommentId { get; set; }
    public int AppUserId { get; set; }
    public int Vote { get; set; } // -1 / 1
}
[Tag(Tag.Admin)]
[ValidateIsAdmin]
[AutoApply(Behavior.AuditDelete)]
public class AdminDeleteCommentVote : IDeleteDb<CommentVote>, IReturnVoid
{
    public int Id { get; set; }
}


[Tag(Tag.Admin)]
[ValidateIsAdmin]
public class AdminQueryCommentReports : QueryDb<CommentReport> {}

[Tag(Tag.Admin)]
[ValidateIsAdmin]
[AutoApply(Behavior.AuditModify)]
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
[AutoApply(Behavior.AuditDelete)]
public class AdminDeleteCommentReport : IDeleteDb<CommentReport>, IReturnVoid
{
    public int Id { get; set; }
}

