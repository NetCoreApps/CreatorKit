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
        var appData = request.TryResolve<AppData>();
        var checkDb = appData.BannedUsersMap.ContainsKey(userId) || session.LockedDate != null ||
                      (session.BanUntilDate != null && session.BanUntilDate > DateTime.UtcNow);
        if (checkDb)
        {
            using var db = HostContext.AppHost.GetDbConnection(request);
            var user = await db.SingleByIdAsync<AppUser>(userId);
            if (user == null)
                throw new HttpError(ResolveStatusCode(), ResolveErrorCode(), "Your account no longer exists");
            
            if (user.BanUntilDate != null && user.BanUntilDate > DateTime.UtcNow)
                throw new HttpError(ResolveStatusCode(), ResolveErrorCode(), 
                    $"Your account will be unbanned in {(user.BanUntilDate.Value - DateTime.UtcNow).Humanize()}");

            if (user.LockedDate != null)
                throw new HttpError(ResolveStatusCode(), ResolveErrorCode(), ResolveErrorMessage(request, dto));

            appData.BannedUsersMap.TryRemove(userId, out _);
        }
    }
}
