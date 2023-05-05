using System;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.OrmLite;
using SsgServices.ServiceModel;
using SsgServices.ServiceModel.Types;

namespace SsgServices.ServiceInterface;

public class PostServices : Service
{
    public IAutoQueryDb AutoQuery { get; set; } = default!;
    
    public async Task<object> Get(GetThreadUserData request)
    {
        var session = await SessionAsAsync<CustomUserSession>();
        var userId = session.GetUserId();
        var votes = await Db.SelectAsync(Db.From<CommentVote>().Join<Comment>()
            .Where(x => x.AppUserId == userId)
            .And<Comment>(x => x.ThreadId == request.ThreadId));
        var liked = await Db.ExistsAsync<ThreadLike>(x => x.ThreadId == request.ThreadId && x.AppUserId == userId);

        var ret = new GetThreadUserDataResponse
        {
            ThreadId = request.ThreadId,
            Liked = liked,
            UpVoted = votes.Where(x => x.Vote > 0).Map(x => x.CommentId),
            DownVoted = votes.Where(x => x.Vote < 0).Map(x => x.CommentId),
        };
        return ret;
    }

    public async Task<object> Get(GetThread request)
    {
        var result = request.Id != null
            ? await Db.SingleByIdAsync<Thread>(request.Id)
            : null;

        if (request.Url != null)
        {
            var normalizedUrl = request.Url = request.Url.ToLower();
            normalizedUrl = normalizedUrl.LeftPart('?');
            if (normalizedUrl.EndsWith(".html"))
                normalizedUrl.Substring(0, normalizedUrl.Length - 5);
            result = await Db.SingleAsync(Db.From<Thread>().Where(x => x.Url == normalizedUrl));
            if (result == null)
            {
                result = new Thread {
                    Url = normalizedUrl,
                    LikesCount = 1,
                    CreatedDate = DateTime.UtcNow,
                    ExternalRef = Guid.NewGuid().ToString("N"),
                };
                result.Id = (int)await Db.InsertAsync(result, selectIdentity: true);
            }
        }
        
        if (result == null)
            throw HttpError.NotFound("Thread does not exist");

        await Db.UpdateAddAsync(() => new Thread { ViewCount = 1 }, where:x => x.Id == result.Id);
        
        return new GetThreadResponse {
            Result = result
        };
    }
    
    async Task RefreshLikes(int threadId)
    {
        var threadLikes = await Db.CountAsync<ThreadLike>(x => x.ThreadId == threadId);
        await Db.UpdateOnlyAsync(() => new Thread { LikesCount = threadLikes + 1 }, where: x => x.Id == threadId);
    }

    public async Task Post(CreateThreadLike request)
    {
        await AutoQuery.CreateAsync(request, base.Request);
        await RefreshLikes(request.ThreadId);
    }

    public async Task Delete(DeleteThreadLike request)
    {
        await AutoQuery.DeleteAsync(request, base.Request);
        await RefreshLikes(request.ThreadId);
    }

    //public async Task<object> Any(QueryComments query)
    //{
    //    using var db = AutoQuery.GetDb(query, base.Request);
    //    var q = AutoQuery.CreateQuery(query, base.Request, db);
    //    var response = await AutoQuery.ExecuteAsync(query, q, base.Request, db);
    //    return response;
    //}
    
    async Task RefreshVotes(int commentId)
    {
        var commentVotes = await Db.SelectAsync<CommentVote>(x => x.CommentId == commentId);
        var upVotes = commentVotes.Count(x => x.Vote > 0);
        var downVotes = commentVotes.Count(x => x.Vote < 0);
        var votes = upVotes - downVotes;
        await Db.UpdateOnlyAsync(() => new Comment
        {
            UpVotes = upVotes,
            DownVotes = downVotes,
            Votes = votes + 1,
        }, where: x => x.Id == commentId);
    }

    public async Task Post(CreateCommentVote request)
    {
        await AutoQuery.CreateAsync(request, base.Request);
        await RefreshVotes(request.CommentId);
    }

    public async Task Delete(DeleteCommentVote request)
    {
        await AutoQuery.DeleteAsync(request, base.Request);
        await RefreshVotes(request.CommentId);
    }
}