using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Html;
using ServiceStack.Text;
using CreatorKit.Data;
using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel;

[assembly: HostingStartup(typeof(CreatorKit.ConfigureAuth))]

namespace CreatorKit;

public class ConfigureAuth : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            services.AddSingleton<IAuthHttpGateway, AuthHttpGateway>();
            services.AddTransient<IExternalLoginAuthInfoProvider, ExternalLoginAuthInfoProvider>();
            
            AutoMapping.RegisterPopulator((AppUser source, Register target) =>
            {
                source.ProfileUrl = ImageCreator.Instance.CreateSvgDataUri(char.ToUpper((target.FirstName ?? target.Email)[0]));
            });
            
            services.AddPlugin(new AuthFeature(IdentityAuth.For<AppUser,int>(options => {
                options.SessionFactory = () => new CustomUserSession();
                options.LoginPath = "/login";
                options.CredentialsAuth();
                options.IncludeRegisterService = true;
                options.AdminUsersFeature(f =>
                {
                    f.FormLayout =
                    [
                        Input.For<AppUser>(x => x.Email, x => x.Type = Input.Types.Email),
                        Input.For<AppUser>(x => x.DisplayName, c => c.FieldsPerRow(2)),
                        Input.For<AppUser>(x => x.UserName, c => c.FieldsPerRow(2)),
                        Input.For<AppUser>(x => x.FirstName, c => c.FieldsPerRow(2)),
                        Input.For<AppUser>(x => x.LastName, c => c.FieldsPerRow(2)),
                        Input.For<AppUser>(x => x.Handle, c =>
                        {
                            c.FieldsPerRow(2);
                            c.Help = "Public alias (3-12 lower alpha numeric chars)";
                            c.Pattern = "^[a-z][a-z0-9_.-]{3,12}$";
                        }),
                        Input.For<AppUser>(x => x.BanUntilDate, c => c.FieldsPerRow(2)),
                        Input.For<AppUser>(x => x.ProfileUrl, c => c.Type = Input.Types.Url)
                    ];
                });
            }))
            {
                ValidateRedirectLinks = (req, redirect) => {
                    var allowedRedirects = new[]{ AppData.Instance.WebsiteBaseUrl };
                    if (!allowedRedirects.Any(redirect.StartsWith))
                        AuthFeature.NoExternalRedirects(req, redirect);
                }                
            });
        });
}

public interface IExternalLoginAuthInfoProvider
{
    void PopulateUser(ExternalLoginInfo info, AppUser user);
}

// Populate ApplicationUser with Auth Info
public class ExternalLoginAuthInfoProvider(IConfiguration configuration, IAuthHttpGateway authGateway)
    : IExternalLoginAuthInfoProvider
{
    public void PopulateUser(ExternalLoginInfo info, AppUser user)
    {
        var accessToken = info.AuthenticationTokens?.FirstOrDefault(x => x.Name == "access_token");
        //var accessTokenSecret = info.AuthenticationTokens?.FirstOrDefault(x => x.Name == "access_token_secret");

        if (info.LoginProvider == "Facebook")
        {
            user.FacebookUserId = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
            user.DisplayName = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Name)?.Value;
            user.FirstName = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.GivenName)?.Value;
            user.LastName = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Surname)?.Value;

            if (accessToken != null)
            {
                var facebookInfo = JsonObject.Parse(authGateway.DownloadFacebookUserInfo(accessToken.Value, "picture"));
                var picture = facebookInfo.Object("picture");
                var data = picture?.Object("data");
                if (data != null)
                {
                    if (data.TryGetValue("url", out var profileUrl))
                    {
                        user.ProfileUrl = profileUrl.SanitizeOAuthUrl();
                    }
                }                
            }
        }
        else if (info.LoginProvider == "Google")
        {
            user.GoogleUserId = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
            user.DisplayName = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Name)?.Value;
            user.FirstName = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.GivenName)?.Value;
            user.LastName = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Surname)?.Value;
            user.GoogleProfilePageUrl = info.Principal?.Claims.FirstOrDefault(x => x.Type == "urn:google:profile")?.Value;

            if (accessToken != null)
            {
                var googleInfo = JsonObject.Parse(authGateway.DownloadGoogleUserInfo(accessToken.Value));
                user.ProfileUrl = googleInfo.Get("picture").SanitizeOAuthUrl();
            }
        }
        else if (info.LoginProvider == "Microsoft")
        {
            user.MicrosoftUserId = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
            user.DisplayName = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Name)?.Value;
            user.FirstName = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.GivenName)?.Value;
            user.LastName = info.Principal?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Surname)?.Value;
            if (accessToken != null)
            {
                user.ProfileUrl = authGateway.CreateMicrosoftPhotoUrl(accessToken.Value, "96x96");
            }
        }
    }
}
