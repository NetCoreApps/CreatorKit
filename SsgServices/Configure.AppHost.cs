using Funq;
using ServiceStack;
using SsgServices.ServiceInterface;

[assembly: HostingStartup(typeof(SsgServices.AppHost))]

namespace SsgServices;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            // Configure ASP.NET Core IOC Dependencies
        });

    public AppHost() : base("SsgServices", typeof(MyServices).Assembly) {}

    public override void Configure(Container container)
    {
        SetConfig(new HostConfig {
            AddRedirectParamsToQueryString = true,
            UseSameSiteCookies = false,
            AllowFileExtensions = { "json" }
        });
        
        Plugins.Add(new CorsFeature(allowedHeaders: "Content-Type,Authorization",
            allowOriginWhitelist: new[]{
                "https://localhost:5002",
                "http://localhost:5000",
                "http://localhost:8080",
                "https://servicestack.net",
                "https://diffusion.works",
            }, allowCredentials: true));
    }
}
