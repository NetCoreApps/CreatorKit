using CreatorKit.Data;
using CreatorKit.ServiceModel.Types;
using Microsoft.EntityFrameworkCore;
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
    public string[]? Roles { get; set; }
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
            var dbPath = "App_Data/app.db";
            var connectionString = context.Configuration.GetConnectionString("DefaultConnection")
                ?? $"DataSource={dbPath};Cache=Shared";
            
            var dialect = SqliteDialect.Instance;
            dialect.StringSerializer = new JsonStringSerializer();
            dialect.EnableForeignKeys = true;
            ((DateTimeConverter)dialect.GetConverter<DateTime>()).DateStyle = DateTimeKind.Utc;

            var dbFactory = new OrmLiteConnectionFactory(dbPath, dialect);
            services.AddSingleton<IDbConnectionFactory>(dbFactory);

            // $ dotnet ef migrations add CreateIdentitySchema
            // $ dotnet ef database update
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlite(connectionString, b => b.MigrationsAssembly(nameof(CreatorKit))));
            
            // Enable built-in Database Admin UI at /admin-ui/database
            services.AddPlugin(new AdminDatabaseFeature());
        })
        .ConfigureAppHost(appHost => {
            // Enable built-in Database Admin UI at /admin-ui/database
            // appHost.Plugins.Add(new AdminDatabaseFeature());
        });
}
