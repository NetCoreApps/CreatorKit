using ServiceStack.Data;
using ServiceStack.OrmLite;
using ServiceStack.OrmLite.Converters;

[assembly: HostingStartup(typeof(SsgServices.ConfigureDb))]

namespace SsgServices;

public class ConfigureDb : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) => {
            services.AddSingleton<IDbConnectionFactory>(new OrmLiteConnectionFactory(
                context.Configuration.GetConnectionString("DefaultConnection")
                ?? ":memory:",
                SqliteDialect.Provider));

            ((DateTimeConverter)SqliteDialect.Provider.GetConverter<DateTime>()).DateStyle = DateTimeKind.Utc;
        })
        .ConfigureAppHost(appHost => {
            // Enable built-in Database Admin UI at /admin-ui/database
            // appHost.Plugins.Add(new AdminDatabaseFeature());
        });
}
