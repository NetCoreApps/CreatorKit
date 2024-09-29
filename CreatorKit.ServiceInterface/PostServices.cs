using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ServiceStack;
using ServiceStack.OrmLite;
using ServiceStack.Jobs;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;

namespace CreatorKit.ServiceInterface;

public class PostServices(IAutoQueryDb autoQuery, IBackgroundJobs jobs) : Service
{
    [FromServices]
    public SmtpConfig? SmtpConfig { get; set; }
    
    public object Get(GetThreadUserData request)
    {
        var userId = Request.GetRequiredUserId();
        var votes = Db.Select(Db.From<CommentVote>().Join<Comment>()
            .Where(x => x.AppUserId == userId)
            .And<Comment>(x => x.ThreadId == request.ThreadId));
        var liked = Db.Exists<ThreadLike>(x => x.ThreadId == request.ThreadId && x.AppUserId == userId);

        var ret = new GetThreadUserDataResponse
        {
            ThreadId = request.ThreadId,
            Liked = liked,
            UpVoted = votes.Where(x => x.Vote > 0).Map(x => x.CommentId),
            DownVoted = votes.Where(x => x.Vote < 0).Map(x => x.CommentId),
        };
        return ret;
    }

    public object Get(GetThread request)
    {
        var result = request.Id != null
            ? Db.SingleById<Thread>(request.Id)
            : null;

        if (request.Url != null)
        {
            var normalizedUrl = request.Url = request.Url.ToLower();
            normalizedUrl = normalizedUrl.LeftPart('?');
            if (normalizedUrl.EndsWith(".html"))
                normalizedUrl.Substring(0, normalizedUrl.Length - 5);
            result = Db.Single(Db.From<Thread>().Where(x => x.Url == normalizedUrl));
            if (result == null)
            {
                result = new Thread {
                    Url = normalizedUrl,
                    LikesCount = 1,
                    CreatedDate = DateTime.UtcNow,
                    ExternalRef = Guid.NewGuid().ToString("N"),
                };
                result.Id = (int)Db.Insert(result, selectIdentity: true);
            }
        }
        
        if (result == null)
            throw HttpError.NotFound("Thread does not exist");

        Db.UpdateAdd(() => new Thread { ViewCount = 1 }, where:x => x.Id == result.Id);
        
        return new GetThreadResponse {
            Result = result
        };
    }
    
    public void RefreshLikes(int threadId)
    {
        var threadLikes = Db.Count<ThreadLike>(x => x.ThreadId == threadId);
        Db.UpdateOnly(() => new Thread { LikesCount = threadLikes + 1 }, where: x => x.Id == threadId);
    }

    public void Post(CreateThreadLike request)
    {
        autoQuery.Create(request, base.Request);
        RefreshLikes(request.ThreadId);
    }

    public void Delete(DeleteThreadLike request)
    {
        autoQuery.Delete(request, base.Request);
        RefreshLikes(request.ThreadId);
    }
    
    void RefreshVotes(int commentId)
    {
        var commentVotes = Db.Select<CommentVote>(x => x.CommentId == commentId);
        var upVotes = commentVotes.Count(x => x.Vote > 0);
        var downVotes = commentVotes.Count(x => x.Vote < 0);
        var votes = upVotes - downVotes;
        Db.UpdateOnly(() => new Comment
        {
            UpVotes = upVotes,
            DownVotes = downVotes,
            Votes = votes + 1,
        }, where: x => x.Id == commentId);
    }

    public void Post(CreateCommentVote request)
    {
        autoQuery.Create(request, base.Request);
        RefreshVotes(request.CommentId);
    }

    public void Delete(DeleteCommentVote request)
    {
        autoQuery.Delete(request, base.Request);
        RefreshVotes(request.CommentId);
    }

    public object Any(CreateComment request)
    {
        var ret = autoQuery.Create(request, base.Request);
        if (SmtpConfig?.NotificationsEmail == null && request.ReplyId == null)
            return ret;

        var thread = Db.SingleById<Thread>(request.ThreadId);
        if (thread != null)
        {
            var replyUserId = request.ReplyId != null
                ? Db.SingleById<Comment>(request.ReplyId.Value)?.AppUserId
                : null;
            var replyUser = replyUserId != null 
                ? Db.Single<(string Email, string Name)>(Db.From<AppUser>()
                    .Where(x => x.Id == replyUserId)
                    .Select(x => new { x.Email, x.DisplayName }))
                : new();

            var toEmail = replyUser.Email ?? SmtpConfig?.NotificationsEmail;
            if (toEmail != null)
            {
                var authorName = Request.GetClaimsPrincipal().GetNickName();
                var domain = new Uri(thread.Url).Host;
                var email = new SendEmail {
                    To = toEmail,
                    ToName = replyUser.Name ?? "Notification",
                    Subject = replyUser.Name != null 
                        ? $"New reply from {authorName} on {domain}"
                        : $"New comment on {domain}",
                    BodyText = $"""
                                Comment by {authorName} on {thread.Url}:

                                > {request.Content}
                                """,
                };
                jobs.EnqueueCommand<SendEmailCommand>(email);
            }
        }
        return ret;
    }

    public object Any(CreateCommentReport request)
    {
        var ret = autoQuery.Create(request, base.Request);
        if (SmtpConfig?.NotificationsEmail == null)
            return ret;
        
        var comment = Db.SingleById<Comment>(request.CommentId);
        if (comment != null)
        {
            var thread = Db.SingleById<Thread>(comment.ThreadId);
            if (thread != null)
            {
                var authorName = Request.GetClaimsPrincipal().GetNickName();
                var domain = new Uri(thread.Url).Host;
                var reason = request.Description != null ? "Reason:\n" + request.Description : "";
                var email = new SendEmail {
                    To = SmtpConfig.NotificationsEmail,
                    ToName = "Notification",
                    Subject = $"New report comment on {domain}",
                    BodyText = $"""
                                Comment Reported as {request.PostReport} by {authorName} on {thread.Url}:

                                > {comment.Content}
                                
                                {reason}
                                """,
                };
                jobs.EnqueueCommand<SendEmailCommand>(email);
            }
        }
        return ret;
    }
}
