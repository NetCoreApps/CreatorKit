using ServiceStack;
using ServiceStack.DataAnnotations;
using System;
using System.Collections.Generic;
using SsgServices.ServiceModel.Types;

namespace SsgServices.ServiceModel;

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
public class CommentVote
{
    [AutoIncrement]
    public long Id { get; set; }

    [References(typeof(Comment))]
    public int CommentId { get; set; }
    [References(typeof(AppUser))]
    public int AppUserId { get; set; }
    public int Vote { get; set; } // -1 / 1
    public DateTime CreatedDate { get; set; }
}

public class CommentReport
{
    [AutoIncrement]
    public long Id { get; set; }

    [References(typeof(Comment))]
    public int CommentId { get; set; }
    [References(typeof(AppUser))]
    public int AppUserId { get; set; }
    public PostReport PostReport { get; set; }
    public string Description { get; set; }
    public DateTime CreatedDate { get; set; }
}

public enum PostReport
{
    Offensive,
    Spam,
    Nudity,
    Illegal,
    Other,
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

[Tag(Tag.Posts)]
[ValidateIsAuthenticated]
[AutoApply(Behavior.AuditQuery)]
public class GetThreadUserData : IGet, IReturn<GetThreadUserDataResponse>
{
    public int ThreadId { get; set; }
}
public class GetThreadUserDataResponse
{
    public int ThreadId { get; set; }
    public bool Liked { get; set; }
    public List<int> UpVoted { get; set; }
    public List<int> DownVoted { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

[Tag(Tag.Posts)]
[AutoApply(Behavior.AuditQuery)]
[AutoFilter(QueryTerm.Ensure, nameof(Comment.FlagReason), Template = SqlTemplate.IsNull)]
public class QueryComments : QueryDb<Comment, CommentResult>,
    IJoin<Comment,AppUser>
{
    public int ThreadId { get; set; }
}

[Tag(Tag.Posts)]
public class GetThread : IGet, IReturn<GetThreadResponse>
{
    public int? Id { get; set; }
    public string? Url { get; set; }
}
public class GetThreadResponse
{
    public Thread Result { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

[Tag(Tag.Posts)]
[ValidateIsAuthenticated]
[AutoApply(Behavior.AuditCreate)]
[AutoPopulate(nameof(Comment.AppUserId), Eval = "userAuthIntId()")]
[AutoPopulate(nameof(Comment.Votes), Value = 1)]
public class CreateComment : ICreateDb<Comment>, IReturn<Comment>
{
    public int ThreadId { get; set; }
    public int? ReplyId { get; set; }
    [ValidateLength(1,280)]
    public string Content { get; set; }
}

[Tag(Tag.Posts)]
[ValidateIsAuthenticated]
[AutoApply(Behavior.AuditModify)]
[AutoFilter(QueryTerm.Ensure, nameof(Comment.AppUserId), Eval = "userAuthIntId()")]
public class UpdateComment : IPatchDb<Comment>, IReturn<Comment>
{
    public int Id { get; set; }
    public string? Content { get; set; }
}

[Tag(Tag.Posts)]
[ValidateIsAuthenticated]
[AutoApply(Behavior.AuditSoftDelete)]
[AutoFilter(QueryTerm.Ensure, nameof(Comment.AppUserId), Eval = "userAuthIntId()")]
public class DeleteComment : IDeleteDb<Comment>, IReturnVoid
{
    public int Id { get; set; }
}

[Tag(Tag.Posts)]
[ValidateIsAuthenticated]
[AutoApply(Behavior.AuditCreate)]
[AutoPopulate(nameof(Comment.AppUserId), Eval = "userAuthIntId()")]
public class CreateThreadLike : ICreateDb<ThreadLike>, IReturnVoid
{
    public int ThreadId { get; set; }
    [ValidateInclusiveBetween(-1, 1)]
    public int Vote { get; set; }
}

[Tag(Tag.Posts)]
[ValidateIsAuthenticated]
[AutoFilter(QueryTerm.Ensure, nameof(Comment.AppUserId), Eval = "userAuthIntId()")]
public class DeleteThreadLike : IDeleteDb<ThreadLike>, IReturnVoid
{
    public int ThreadId { get; set; }
}

[Tag(Tag.Posts)]
[ValidateIsAuthenticated]
[AutoFilter(QueryTerm.Ensure, nameof(Comment.AppUserId), Eval = "userAuthIntId()")]
public class QueryCommentVotes : QueryDb<CommentVote>
{
    public int ThreadId { get; set; }
}

[Tag(Tag.Posts)]
[ValidateIsAuthenticated]
[AutoApply(Behavior.AuditCreate)]
[AutoPopulate(nameof(Comment.AppUserId), Eval = "userAuthIntId()")]
public class CreateCommentVote : ICreateDb<CommentVote>, IReturnVoid
{
    public int CommentId { get; set; }
    [ValidateInclusiveBetween(-1, 1)]
    public int Vote { get; set; }
}

[Tag(Tag.Posts)]
[ValidateIsAuthenticated]
[AutoFilter(QueryTerm.Ensure, nameof(Comment.AppUserId), Eval = "userAuthIntId()")]
public class DeleteCommentVote : IDeleteDb<CommentVote>, IReturnVoid
{
    public int CommentId { get; set; }
}

[Tag(Tag.Posts)]
[ValidateIsAuthenticated]
[AutoApply(Behavior.AuditCreate)]
[AutoPopulate(nameof(Comment.AppUserId), Eval = "userAuthIntId()")]
public class CreateCommentReport : ICreateDb<CommentReport>, IReturnVoid
{
    public int CommentId { get; set; }
    public PostReport PostReport { get; set; }
    public string? Description { get; set; }
}

[Tag(Tag.Posts)]
[ValidateIsAuthenticated]
[AutoFilter(QueryTerm.Ensure, nameof(Comment.AppUserId), Eval = "userAuthIntId()")]
public class DeleteCommentReport : IDeleteDb<CommentReport>, IReturnVoid
{
    public int Id { get; set; }
}


[Tag(Tag.Posts)]
[ValidateIsAdmin]
[AutoApply(Behavior.AuditQuery)]
public class QueryThreads : QueryDb<Thread>
{
    public int? Id { get; set; }
}
[Tag(Tag.Posts)]
[ValidateIsAdmin]
[AutoApply(Behavior.AuditModify)]
public class UpdateThread : IPatchDb<Thread>, IReturn<Thread>
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
[Tag(Tag.Posts)]
[ValidateIsAdmin]
public class DeleteThread : IDeleteDb<Thread>, IReturnVoid
{
    public int Id { get; set; }
}
