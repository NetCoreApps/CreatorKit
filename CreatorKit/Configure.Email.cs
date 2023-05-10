using CreatorKit.ServiceInterface;

[assembly: HostingStartup(typeof(CreatorKit.ConfigureEmail))]

namespace CreatorKit;

public class ConfigureEmail : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) =>
        {
            var smtp = context.Configuration.GetSection("smtp");
            if (smtp.Exists())
            {
                var provider = new EmailProvider {
                    EnableSsl = true,
                };
                smtp.Bind(provider);
                services.AddSingleton(provider);
            }
        });
}
