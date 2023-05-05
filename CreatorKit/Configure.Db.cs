using ServiceStack.Data;
using ServiceStack.OrmLite;
using ServiceStack.OrmLite.Converters;
using ServiceStack.OrmLite.Sqlite;
using ServiceStack.Text;

[assembly: HostingStartup(typeof(CreatorKit.ConfigureDb))]

namespace CreatorKit;

public class ConfigureDb : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) => {
            services.AddSingleton<IDbConnectionFactory>(new OrmLiteConnectionFactory(
                "App_Data/db.sqlite",
                SqliteDialect.Provider));

            var sqliteDialect = SqliteDialect.Instance;
            sqliteDialect.StringSerializer = new JsonStringSerializer();
            sqliteDialect.EnableForeignKeys = true;
            ((DateTimeConverter)sqliteDialect.GetConverter<DateTime>()).DateStyle = DateTimeKind.Utc;
        })
        .ConfigureAppHost(appHost => {
            // Enable built-in Database Admin UI at /admin-ui/database
            // appHost.Plugins.Add(new AdminDatabaseFeature());
        });
}
