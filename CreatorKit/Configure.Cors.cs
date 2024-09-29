using CreatorKit.ServiceInterface;

[assembly: HostingStartup(typeof(CreatorKit.ConfigureCors))]

namespace CreatorKit;

public class ConfigureCors : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services =>
        {
            var allowOrigins = AppData.Instance.AllowOrigins ?? [];
            allowOrigins.AddIfNotExists(AppData.Instance.WebsiteBaseUrl);
            
            services.AddCors(options => {
                options.AddDefaultPolicy(policy => {
                    policy.WithOrigins(allowOrigins.ToArray())
                    .AllowAnyMethod()
                    .AllowCredentials()
                    .WithHeaders(["Content-Type", "Allow", "Authorization"])
                    .SetPreflightMaxAge(TimeSpan.FromHours(1));
                });
            });
            services.AddTransient<IStartupFilter, StartupFilter>();
        });

    public class StartupFilter : IStartupFilter
    {
        public Action<IApplicationBuilder> Configure(Action<IApplicationBuilder> next) => app =>
        {
            app.UseCors();
            next(app);
        };
    }        
}
