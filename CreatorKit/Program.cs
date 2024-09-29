using CreatorKit.Data;
using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Server.IISIntegration;

AppHost.RegisterLicense();

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
var config = builder.Configuration;

services.Configure<CookiePolicyOptions>(options =>
{
    // This lambda determines whether user consent for non-essential cookies is needed for a given request.
    options.CheckConsentNeeded = context => true;
    options.MinimumSameSitePolicy = SameSiteMode.Strict;
});

services.AddIdentity<AppUser, AppRole>(options => {
        //options.User.AllowedUserNameCharacters = null;
        //options.SignIn.RequireConfirmedAccount = true;
    })
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();
    
services.AddAuthentication(IISDefaults.AuthenticationScheme)
    .AddFacebook(options => { /* Create App https://developers.facebook.com/apps */
        options.AppId = config["oauth.facebook.AppId"]!;
        options.AppSecret = config["oauth.facebook.AppSecret"]!;
        options.SaveTokens = true;
        options.Scope.Clear();
        config.GetSection("oauth.facebook.Permissions").GetChildren()
            .Each(x => options.Scope.Add(x.Value!));
    })
    .AddGoogle(options => { /* Create App https://console.developers.google.com/apis/credentials */
        options.ClientId = config["oauth.google.ConsumerKey"]!;
        options.ClientSecret = config["oauth.google.ConsumerSecret"]!;
        options.SaveTokens = true;
    })
    .AddMicrosoftAccount(options => { /* Create App https://apps.dev.microsoft.com */
        options.ClientId = config["oauth.microsoft.AppId"]!;
        options.ClientSecret = config["oauth.microsoft.AppSecret"]!;
        options.SaveTokens = true;
    });
    
services.Configure<ForwardedHeadersOptions>(options => {
    //https://github.com/aspnet/IISIntegration/issues/140#issuecomment-215135928
    options.ForwardedHeaders = ForwardedHeaders.XForwardedProto;
});
    
services.Configure<IdentityOptions>(options =>
{
    options.Password.RequireDigit = true;
    options.Password.RequiredLength = 8;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = true;
    options.Password.RequireLowercase = false;
    options.Password.RequiredUniqueChars = 6;

    // Lockout settings
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
    options.Lockout.MaxFailedAccessAttempts = 10;
    options.Lockout.AllowedForNewUsers = true;

    // User settings
    options.User.RequireUniqueEmail = true;
});

services.ConfigureApplicationCookie(options =>
{
    // Cookie settings
    options.Cookie.HttpOnly = true;
    options.ExpireTimeSpan = TimeSpan.FromDays(150);
    // If the LoginPath isn't set, ASP.NET Core defaults 
    // the path to /Account/Login.
    options.LoginPath = "/Account/Login";
    // If the AccessDeniedPath isn't set, ASP.NET Core defaults 
    // the path to /Account/AccessDenied.
    options.AccessDeniedPath = "/Account/AccessDenied";
    options.SlidingExpiration = true;
});

// services.AddSingleton<IEmailSender<ApplicationUser>, IdentityNoOpEmailSender>();
// Uncomment to send emails with SMTP, configure SMTP with "SmtpConfig" in appsettings.json
services.AddSingleton<IEmailSender<AppUser>, EmailSender>();
services.AddScoped<IUserClaimsPrincipalFactory<AppUser>, AdditionalUserClaimsPrincipalFactory>();

// Register all services
services.AddServiceStack(typeof(MyServices).Assembly);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseHttpsRedirection();
}
app.UseStaticFiles();
app.UseServiceStack(new AppHost());

app.Run();