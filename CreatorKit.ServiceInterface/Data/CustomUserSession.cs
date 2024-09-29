using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Options;
using ServiceStack;
using ServiceStack.Web;

namespace CreatorKit.Data;

// Add any additional metadata properties you want to store in the Users Typed Session
public class CustomUserSession : AuthUserSession
{
    public string Handle { get; set; }
    public string Avatar { get; set; }
    public DateTime? LockedDate { get; set; }
    public DateTime? BanUntilDate { get; set; }

    public int GetUserId() => UserAuthId.ToInt();
    public override void PopulateFromClaims(IRequest httpReq, ClaimsPrincipal principal)
    {
        // Populate Session with data from Identity Auth Claims
        ProfileUrl = principal.FindFirstValue(JwtClaimTypes.Picture);
    }
}

public static class UsersExtensions
{
    public static CustomUserSession ToUserSession(this AppUser appUser)
    {
        var session = appUser.ConvertTo<CustomUserSession>();
        session.Id = SessionExtensions.CreateRandomSessionId();
        session.IsAuthenticated = true;
        session.FromToken = true; // use embedded roles
        return session;
    }
}


/// <summary>
/// Add additional claims to the Identity Auth Cookie
/// </summary>
public class AdditionalUserClaimsPrincipalFactory(
    UserManager<AppUser> userManager,
    RoleManager<AppRole> roleManager,
    IOptions<IdentityOptions> optionsAccessor)
    : UserClaimsPrincipalFactory<AppUser,AppRole>(userManager, roleManager, optionsAccessor)
{
    public override async Task<ClaimsPrincipal> CreateAsync(AppUser user)
    {
        var principal = await base.CreateAsync(user);
        var identity = (ClaimsIdentity)principal.Identity!;

        var claims = new List<Claim>();
        // Add additional claims here
        if (user.DisplayName != null)
        {
            claims.Add(new Claim(JwtClaimTypes.NickName, user.DisplayName));
        }
        if (user.ProfileUrl != null)
        {
            claims.Add(new Claim(JwtClaimTypes.Picture, user.ProfileUrl));
        }
        if (user.BanUntilDate != null)
        {
            claims.Add(new Claim(nameof(AppUser.BanUntilDate), user.BanUntilDate.Value.ToString("u")));
        }

        identity.AddClaims(claims);
        return principal;
    }
}
