using CreatorKit.ServiceModel.Types;
using ServiceStack.Data;
using ServiceStack.OrmLite;
using ServiceStack.OrmLite.Converters;
using ServiceStack.Text;

[assembly: HostingStartup(typeof(CreatorKit.ConfigureDb))]

namespace CreatorKit;

public class SeedUser
{
    public int Id { get; set; }
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public List<string>? Roles { get; set; }
}
public class SeedContact
{
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public MailingList MailingLists { get; set; }
}

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
