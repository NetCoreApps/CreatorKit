using System;
using System.Threading.Tasks;
using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel.Types;
using NUnit.Framework;
using ServiceStack;
using ServiceStack.Data;
using ServiceStack.OrmLite;

namespace CreatorKit.Tests;

[TestFixture, Explicit]
public class DbTests
{
    IDbConnectionFactory ResolveDbFactory() => new ConfigureDb().ConfigureAndResolve<IDbConnectionFactory>();

    [Test]
    public async Task Does_not_return_invalid_emails_in_ActiveSubscribers()
    {
        using var db = ResolveDbFactory().OpenDbConnection();
        
        OrmLiteUtils.PrintSql();
        var subs = await db.GetActiveSubscribersAsync(MailingList.MonthlyNewsletter);
        Console.WriteLine($"Subscribers: {subs.Count}");
    }    
}
