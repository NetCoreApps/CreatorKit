using System;
using System.Data;
using CreatorKit.ServiceModel.Types;
using Microsoft.AspNetCore.Hosting;
using ServiceStack;
using ServiceStack.Data;
using ServiceStack.OrmLite;

namespace CreatorKit.ServiceInterface;

public interface IMailProvider
{
    IDbConnection OpenMonthDb(DateTime? createdDate=null);
}

public class MailProvider(IWebHostEnvironment env, IDbConnectionFactory dbFactory) 
    : IMailProvider, IRequiresSchema
{
    public string DbDir { get; set; } = "App_Data/mail";
    public static string DbMonthFile(DateTime createdDate) => $"mail_{createdDate.Year}-{createdDate.Month:00}.db";

    public IDbConnection ResolveMonthDb(DateTime createdDate)
    {
        var monthDb = DbMonthFile(createdDate);
        if (!OrmLiteConnectionFactory.NamedConnections.ContainsKey(monthDb))
        {
            var absoluteDbDir = env.ContentRootPath.CombineWith(DbDir).AssertDir();
            var dataSource = absoluteDbDir.CombineWith(monthDb);
            dbFactory.RegisterConnection(monthDb, $"DataSource={dataSource};Cache=Shared", SqliteDialect.Provider);
            var db = dbFactory.OpenDbConnection(monthDb);
            InitMonthDbSchema(db);
            return db;
        }
        return dbFactory.OpenDbConnection(monthDb);
    }

    public void InitMonthDbSchema(IDbConnection db)
    {
        db.CreateTableIfNotExists<MailMessage>();
        db.CreateTableIfNotExists<MailRun>();
        db.CreateTableIfNotExists<MailMessageRun>();
    }

    public IDbConnection OpenMonthDb(DateTime? createdDate=null) => ResolveMonthDb(createdDate ?? DateTime.UtcNow);

    public void InitSchema()
    {
        using var db = OpenMonthDb(DateTime.UtcNow);
        InitMonthDbSchema(db);
    }
}
