using CreatorKit.ServiceInterface;

[assembly: HostingStartup(typeof(CreatorKit.ConfigureExtensions))]

namespace CreatorKit;

public class ConfigureExtensions : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) =>
        {
            services.AddSingleton<WebsiteData>();
        })
        .ConfigureAppHost(appHost => {
            // Configure ServiceStack AppHost
        });
}
