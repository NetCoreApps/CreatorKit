using ServiceStack.Data;
using ServiceStack.OrmLite;
using ServiceStack.OrmLite.Converters;
using ServiceStack.Text;

[assembly: HostingStartup(typeof(SsgServices.ConfigureDb))]

namespace SsgServices;

public class ConfigureDb : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) => {
            services.AddSingleton<IDbConnectionFactory>(new OrmLiteConnectionFactory(
                "App_Data/db.sqlite",
                SqliteDialect.Provider));

            SqliteDialect.Provider.StringSerializer = new JsonStringSerializer();       
            ((DateTimeConverter)SqliteDialect.Provider.GetConverter<DateTime>()).DateStyle = DateTimeKind.Utc;
        })
        .ConfigureAppHost(appHost => {
            // Enable built-in Database Admin UI at /admin-ui/database
            // appHost.Plugins.Add(new AdminDatabaseFeature());
        });
}
