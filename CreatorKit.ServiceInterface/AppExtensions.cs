using System.Security.Claims;
using ServiceStack;
using ServiceStack.Web;

namespace CreatorKit.ServiceInterface;

public static class AppExtensions
{
    public static int? GetUserId(this IRequest? req)
    {
        var user = req.GetClaimsPrincipal();
        return user.IsAuthenticated()
            ? user.GetUserId().ToInt()
            : null;
    }

    public static int GetRequiredUserId(this IRequest? req) => 
        req.GetClaimsPrincipal().GetUserId().ToInt();

    public static string? GetNickName(this ClaimsPrincipal? principal) =>
        principal?.FindFirst(JwtClaimTypes.NickName)?.Value ?? principal.GetDisplayName();
}
