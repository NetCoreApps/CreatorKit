using System;
using ServiceStack;
using ServiceStack.DataAnnotations;

namespace CreatorKit.ServiceModel.Types;

[Icon(Svg = Icons.Thread)]
[AutoPopulate(nameof(ExternalRef), Eval = "nguid")]
public class Thread
{
    [AutoIncrement]
    public int Id { get; set; }
    [Index(Unique = true)]
    public string Url { get; set; }
    public string Description { get; set; }
    public string ExternalRef { get; set; }
    public int ViewCount { get; set; }
    [Default(1)]
    public long LikesCount { get; set; }
    public long CommentsCount { get; set; }
    public long? RefId { get; set; }
    public string RefIdStr { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? ClosedDate { get; set; }
    public DateTime? DeletedDate { get; set; }
}

[Icon(Svg = Icons.Comment)]
public class Comment : AuditBase
{
    [AutoIncrement]
    public int Id { get; set; }
    public int ThreadId { get; set; }
    public int? ReplyId { get; set; }
    public string Content { get; set; }
    [Default(0)]
    public int UpVotes { get; set; }
    [Default(0)]
    public int DownVotes { get; set; }
    public int Votes { get; set; }
    public string? FlagReason { get; set; }
    public string? Notes { get; set; }
    public int AppUserId { get; set; }
}

[UniqueConstraint(nameof(ThreadId), nameof(AppUserId))]
public class ThreadLike
{
    [AutoIncrement]
    public long Id { get; set; }

    [References(typeof(Thread))]
    public int ThreadId { get; set; }
    [References(typeof(AppUser))]
    public int AppUserId { get; set; }
    public DateTime CreatedDate { get; set; }
}

[Icon(Svg = Icons.Vote)]
[UniqueConstraint(nameof(CommentId), nameof(AppUserId))]
public class CommentVote : AuditBase
{
    [AutoIncrement]
    public long Id { get; set; }

    [Ref(None = true)]
    [References(typeof(Comment))]
    public int CommentId { get; set; }
    [References(typeof(AppUser))]
    public int AppUserId { get; set; }
    public int Vote { get; set; } // -1 / 1
}

[Icon(Svg = Icons.Report)]
public class CommentReport : AuditBase
{
    [AutoIncrement]
    public long Id { get; set; }

    [References(typeof(Comment))]
    public int CommentId { get; set; }
    
    [Reference]
    public Comment Comment { get; set; }
    
    [References(typeof(AppUser))]
    public int AppUserId { get; set; }
    
    public PostReport PostReport { get; set; }
    public string Description { get; set; }

    public ModerationDecision Moderation { get; set; }
    public string? Notes { get; set; }
}

public enum PostReport
{
    Offensive,
    Spam,
    Nudity,
    Illegal,
    Other,
}

public enum ModerationDecision
{
    None,
    [Description("Allow Comment")]
    Allow,
    [Description("Flag Comment")]
    Flag,
    [Description("Delete Comment")]
    Delete,
    [Description("Ban User for a day")]
    Ban1Day,
    [Description("Ban User for a week")]
    Ban1Week,
    [Description("Ban User for a month")]
    Ban1Month,
    [Description("Permanently Ban User")]
    PermanentBan,
}

public class CommentResult
{
    public int Id { get; set; }
    public int ThreadId { get; set; }
    public int? ReplyId { get; set; }
    public string Content { get; set; }
    public int UpVotes { get; set; }
    public int DownVotes { get; set; }
    public int Votes { get; set; }
    public string? FlagReason { get; set; }
    public string? Notes { get; set; }
    public int AppUserId { get; set; }
    public string DisplayName { get; set; }
    public string? Handle { get; set; }
    public string? ProfileUrl { get; set; }
    public string? Avatar { get; set; } //overrides ProfileUrl
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
}
