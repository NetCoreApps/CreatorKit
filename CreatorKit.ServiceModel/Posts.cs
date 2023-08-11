using ServiceStack;
using System;
using System.Collections.Generic;
using CreatorKit.ServiceModel.Types;

namespace CreatorKit.ServiceModel;

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
public class QueryComments : QueryDb<Comment, CommentResult>,
    IJoin<Comment,AppUser>
{
    public int? ThreadId { get; set; }
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
[ValidateIsAuthenticated, ValidateActiveUser]
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
[ValidateIsAuthenticated, ValidateActiveUser]
[AutoApply(Behavior.AuditModify)]
[AutoFilter(QueryTerm.Ensure, nameof(Comment.AppUserId), Eval = "userAuthIntId()")]
public class UpdateComment : IPatchDb<Comment>, IReturn<Comment>
{
    public int Id { get; set; }
    public string? Content { get; set; }
}

[Tag(Tag.Posts)]
[ValidateIsAuthenticated, ValidateActiveUser]
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
public class DeleteThreadLike : IDeleteDb<ThreadLike>, IReturn<EmptyResponse>
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
[ValidateIsAuthenticated, ValidateActiveUser]
[AutoApply(Behavior.AuditCreate)]
[AutoPopulate(nameof(CommentReport.AppUserId), Eval = "userAuthIntId()")]
[AutoPopulate(nameof(CommentReport.Moderation), Value = ModerationDecision.None)]
public class CreateCommentReport : ICreateDb<CommentReport>, IReturnVoid
{
    public int CommentId { get; set; }
    public PostReport PostReport { get; set; }
    public string? Description { get; set; }
}


public class ValidateActiveUserAttribute : ValidateRequestAttribute
{
    public ValidateActiveUserAttribute() : base("ActiveUser()") { }
}
