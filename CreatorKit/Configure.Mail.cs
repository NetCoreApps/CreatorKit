using CreatorKit.ServiceInterface;

[assembly: HostingStartup(typeof(CreatorKit.ConfigureMail))]

namespace CreatorKit;

public class ConfigureMail : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) => {
            services.AddSingleton<IMailProvider, MailProvider>();
        })
        .ConfigureAppHost(appHost =>
        {
            var services = appHost.GetApplicationServices();
            var mail = (MailProvider)services.GetRequiredService<IMailProvider>();
            mail.InitSchema();
        });
}
