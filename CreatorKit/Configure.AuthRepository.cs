using CreatorKit.ServiceInterface;
using ServiceStack;
using ServiceStack.Web;
using ServiceStack.Data;
using ServiceStack.Auth;
using ServiceStack.Configuration;
using CreatorKit.ServiceModel.Types;
using ServiceStack.Admin;
using ServiceStack.Html;
using ServiceStack.OrmLite;

[assembly: HostingStartup(typeof(CreatorKit.ConfigureAuthRepository))]

namespace CreatorKit;

// Custom User Table with extended Metadata properties

public class AppUserAuthEvents : AuthEvents
{
    public override void OnAuthenticated(IRequest req, IAuthSession session, IServiceBase authService, 
        IAuthTokens tokens, Dictionary<string, string> authInfo)
    {
        var authRepo = HostContext.AppHost.GetAuthRepository(req);
        using (authRepo as IDisposable)
        {
            var userAuth = (AppUser)authRepo.GetUserAuth(session.UserAuthId);
            userAuth.ProfileUrl = session.GetProfileUrl();
            userAuth.LastLoginIp = req.UserHostAddress;
            userAuth.LastLoginDate = DateTime.UtcNow;
            authRepo.SaveUserAuth(userAuth);
        }
    }
}

public class ConfigureAuthRepository : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => services.AddSingleton<IAuthRepository>(c =>
            new OrmLiteAuthRepository<AppUser, UserAuthDetails>(c.Resolve<IDbConnectionFactory>()) {
                UseDistinctRoleTables = true
            }))
        .ConfigureAppHost(appHost => {
            var authRepo = appHost.Resolve<IAuthRepository>();
            authRepo.InitSchema();
            // CreateUser(authRepo, "admin@email.com", "Admin User", "p@55wOrd", roles:new[]{ RoleNames.Admin });
            appHost.Plugins.Add(new AdminUsersFeature
            {
                // Add Custom Fields to Create/Edit User Forms
                FormLayout = new() {
                    Input.For<AppUser>(x => x.Email, x => x.Type = Input.Types.Email),
                    Input.For<AppUser>(x => x.DisplayName,  c => c.FieldsPerRow(2)),
                    Input.For<AppUser>(x => x.UserName,     c => c.FieldsPerRow(2)),
                    Input.For<AppUser>(x => x.FirstName,    c => c.FieldsPerRow(2)),
                    Input.For<AppUser>(x => x.LastName,     c => c.FieldsPerRow(2)),
                    Input.For<AppUser>(x => x.Company),
                    Input.For<AppUser>(x => x.Nickname,     c => {
                        c.FieldsPerRow(2);
                        c.Help = "Public alias (3-12 lower alpha numeric chars)";
                        c.Pattern = "^[a-z][a-z0-9_.-]{3,12}$";
                    }),
                    Input.For<AppUser>(x => x.BanUntilDate, c => c.FieldsPerRow(2)),
                    Input.For<AppUser>(x => x.ProfileUrl,   c => c.Type = Input.Types.Url),
                },
                OnAfterUpdateUser = (user, oldUser, service) =>
                {
                    var dbUser = (AppUser)user;
                    var date = dbUser.LockedDate ?? (dbUser.BanUntilDate != null && dbUser.BanUntilDate > DateTime.UtcNow
                       ? dbUser.BanUntilDate
                       : null);
                    if (date != null)
                        AppData.Instance.BannedUsersMap[dbUser.Id] = date.Value;
                    else
                        AppData.Instance.BannedUsersMap.TryRemove(dbUser.Id, out _);
                    return Task.CompletedTask;
                }
            });
        }, 
        afterConfigure: appHost => {
            appHost.AssertPlugin<AuthFeature>().AuthEvents.Add(new AppUserAuthEvents());
            using var db = appHost.Resolve<IDbConnectionFactory>().Open();
            var bannedUsers = db.Select<AppUser>(x => x.LockedDate != null || x.BanUntilDate > DateTime.UtcNow);
            foreach (var user in bannedUsers)
            {
                AppData.Instance.BannedUsersMap[user.Id] = user.LockedDate ?? user.BanUntilDate.GetValueOrDefault();
            }
        });

    // Add initial Users to the configured Auth Repository
    public void CreateUser(IAuthRepository authRepo, string email, string name, string password, string[] roles)
    {
        if (authRepo.GetUserAuthByUserName(email) == null)
        {
            var newAdmin = new AppUser { Email = email, DisplayName = name };
            var user = authRepo.CreateUserAuth(newAdmin, password);
            authRepo.AssignRoles(user, roles);
        }
    }
}