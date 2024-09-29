using System;
using System.Threading.Tasks;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Admin;
using CreatorKit.ServiceModel.Types;
using ServiceStack;
using ServiceStack.OrmLite;

namespace CreatorKit.ServiceInterface;

public class AdminServices(IAutoQueryDb autoQuery) : Service
{
    public object Any(AdminUpdateCommentReport request)
    {
        var userId = Request.GetRequiredUserId();
        var report = Db.SingleById<CommentReport>(request.Id);
        if (request.Moderation == ModerationDecision.Delete)
        {
            Db.UpdateOnly(() => new Comment {
                    DeletedDate = DateTime.UtcNow, DeletedBy = $"{userId}", Notes = request.Notes
                }, where: x => x.Id == report.CommentId);
        }
        else if (request.Moderation == ModerationDecision.Flag)
        {
            Db.UpdateOnly(() => new Comment {
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
            var comment = Db.SingleById<Comment>(report.CommentId);
            Db.UpdateOnly(() => new AppUser { BanUntilDate = banUntil },
                where: x => x.Id == comment.AppUserId);
            AppData.Instance.BannedUsersMap[comment.AppUserId] = banUntil;
        }
        else if (request.Moderation == ModerationDecision.PermanentBan)
        {
            var comment = Db.SingleById<Comment>(report.CommentId);
            Db.UpdateOnly(() => new AppUser { LockedDate = DateTime.UtcNow },
                where: x => x.Id == comment.AppUserId);
            AppData.Instance.BannedUsersMap[comment.AppUserId] = DateTime.UtcNow;
        }
        return autoQuery.Patch(request, base.Request);
    }
}