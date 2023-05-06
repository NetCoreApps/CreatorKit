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
        .ConfigureServices((context, services) =>
        {
            var dialect = SqliteDialect.Instance;
            var dbFactory = new OrmLiteConnectionFactory("App_Data/db.sqlite", dialect);
            dbFactory.RegisterConnection("archive", "App_Data/archive.sqlite", dialect);
            services.AddSingleton<IDbConnectionFactory>(dbFactory);

            dialect.StringSerializer = new JsonStringSerializer();
            dialect.EnableForeignKeys = true;
            ((DateTimeConverter)dialect.GetConverter<DateTime>()).DateStyle = DateTimeKind.Utc;
        })
        .ConfigureAppHost(appHost => {
            // Enable built-in Database Admin UI at /admin-ui/database
            // appHost.Plugins.Add(new AdminDatabaseFeature());
        });
}
