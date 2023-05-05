using ServiceStack;
using ServiceStack.Web;
using ServiceStack.Data;
using ServiceStack.Auth;
using ServiceStack.Configuration;
using CreatorKit.ServiceModel.Types;

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
        }, afterConfigure: appHost => 
            appHost.AssertPlugin<AuthFeature>().AuthEvents.Add(new AppUserAuthEvents()));

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