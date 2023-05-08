using System;
using System.Threading.Tasks;
using CreatorKit.ServiceModel.Admin;
using CreatorKit.ServiceModel.Types;
using ServiceStack;
using ServiceStack.OrmLite;

namespace CreatorKit.ServiceInterface;

public class AdminServices : Service
{
    public IAutoQueryDb AutoQuery { get; set; }

    public async Task<object> Any(AdminUpdateCommentReport request)
    {
        var session = await base.GetSessionAsync();
        var report = await Db.SingleByIdAsync<CommentReport>(request.Id);
        if (request.Moderation == ModerationDecision.Delete)
        {
            await Db.UpdateOnlyAsync(() => new Comment {
                    DeletedDate = DateTime.UtcNow, DeletedBy = session.UserAuthId, Notes = request.Notes
                }, where: x => x.Id == report.CommentId);
        }
        else if (request.Moderation == ModerationDecision.Flag)
        {
            await Db.UpdateOnlyAsync(() => new Comment {
                    FlagReason = request.Moderation.ToString(),
                    Notes = request.Notes,
                },
                where: x => x.Id == report.CommentId);
        }
        else if (request.Moderation is ModerationDecision.Ban1Day or ModerationDecision.Ban1Month or ModerationDecision.Ban1Week)
        {
            var banUntil = request.Moderation switch {
                ModerationDecision.Ban1Day => DateTime.UtcNow.AddDays(1),
                ModerationDecision.Ban1Week => DateTime.UtcNow.AddDays(7),
                ModerationDecision.Ban1Month => DateTime.UtcNow.AddDays(30),
                _ => throw new NotSupportedException()
            };
            var comment = await Db.SingleByIdAsync<Comment>(report.CommentId);
            await Db.UpdateOnlyAsync(() => new AppUser { BanUntilDate = banUntil },
                where: x => x.Id == comment.AppUserId);
            AppData.Instance.BannedUsersMap[comment.AppUserId] = banUntil;
        }
        else if (request.Moderation == ModerationDecision.PermanentBan)
        {
            var comment = await Db.SingleByIdAsync<Comment>(report.CommentId);
            await Db.UpdateOnlyAsync(() => new AppUser { LockedDate = DateTime.UtcNow },
                where: x => x.Id == comment.AppUserId);
            AppData.Instance.BannedUsersMap[comment.AppUserId] = DateTime.UtcNow;
        }
        return await AutoQuery.PatchAsync(request, base.Request);
    }
}