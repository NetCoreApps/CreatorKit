using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using CreatorKit.ServiceModel.Types;
using ServiceStack;
using ServiceStack.OrmLite;
using ServiceStack.Script;
using ServiceStack.Text;
using ServiceStack.Web;

namespace CreatorKit.ServiceInterface;

public class ValidationScripts : ScriptMethods
{
    public ITypeValidator ActiveUser() => new ActiveUserValidator();
}

public class ActiveUserValidator : TypeValidator, IAuthTypeValidator
{
    public static string DefaultErrorMessage { get; set; } = "Your account is locked";
    public ActiveUserValidator()
        : base(nameof(HttpStatusCode.Forbidden), DefaultErrorMessage, 403)
    {
        this.ContextArgs = new Dictionary<string, object>();
    }

    public override async Task ThrowIfNotValidAsync(object dto, IRequest request)
    {
        await IsAuthenticatedValidator.Instance.ThrowIfNotValidAsync(dto, request).ConfigAwait();
        
        var session = await request.SessionAsAsync<CustomUserSession>();
        var userId = session.UserAuthId.ToInt();
        var checkDb = AppData.Instance.BannedUsersMap.ContainsKey(userId) || session.LockedDate != null ||
                      (session.BanUntilDate != null && session.BanUntilDate > DateTime.UtcNow);
        if (checkDb)
        {
            using var db = HostContext.AppHost.GetDbConnection(request);
            var user = await db.SingleByIdAsync<AppUser>(userId);
            if (user == null)
                throw new HttpError(ResolveStatusCode(), ResolveErrorCode(), "Your account no longer exists");
            
            if (user.BanUntilDate != null && user.BanUntilDate > DateTime.UtcNow)
                throw new HttpError(ResolveStatusCode(), ResolveErrorCode(), $"Your account will be unbanned in {(user.BanUntilDate.Value - DateTime.UtcNow).Humanize()}");

            if (user.LockedDate != null)
                throw new HttpError(ResolveStatusCode(), ResolveErrorCode(), ResolveErrorMessage(request, dto));

            AppData.Instance.BannedUsersMap.TryRemove(userId, out _);
        }
    }
}

public static class TimeSpanExtensions
{
    // TODO remove in v6.8.1+
    public static string Humanize(this TimeSpan span)
    {
        var duration = span.Duration();
        var secs = duration.Seconds > 0
            ? $"{span.Seconds:0} second{(span.Seconds == 1 ? string.Empty : "s")}"
            : string.Empty;
        
        var formatted = string.Format("{0}{1}{2}{3}",
            duration.Days > 0 ? $"{span.Days:0} day{(span.Days == 1 ? string.Empty : "s")}, " : string.Empty,
            duration.Hours > 0 ? $"{span.Hours:0} hour{(span.Hours == 1 ? string.Empty : "s")}, " : string.Empty,
            duration.Minutes > 0 ? $"{span.Minutes:0} minute{(span.Minutes == 1 ? string.Empty : "s")}" : string.Empty,
            secs != string.Empty ? ", " + secs : string.Empty);

        return formatted;
    }    
}
