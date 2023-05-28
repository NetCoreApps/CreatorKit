using System;
using System.Collections.Generic;
using System.IO;
using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel.Types;
using NUnit.Framework;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Data;
using ServiceStack.OrmLite;

namespace CreatorKit.Tests;

[TestFixture, Explicit, Category(nameof(MigrationTasks))]
public class SeedDataTasks
{
    IDbConnectionFactory ResolveDbFactory() => new ConfigureDb().ConfigureAndResolve<IDbConnectionFactory>();

    public string GetHostDir()
    {
        var appSettings = (Dictionary<string,object>) JSON.parse(Path.GetFullPath("appsettings.json").ReadAllText());
        return Path.GetFullPath((string) appSettings["HostDir"]);
    }

    [Test]
    public void Serialize_Users()
    {
        var hostDir = GetHostDir();
        
        using var db = ResolveDbFactory().Open();
        var users = db.Select<SeedUser>(db.From<AppUser>());
        var roleLookup = db.Lookup<int, string>(db.From<UserAuthRole>()
            .Select(x => new { x.Id, x.Role }));
            
        foreach (var user in users)
        {
            user.Roles = roleLookup.TryGetValue(user.Id, out var roles)
                ? roles
                : null;
        }
        File.WriteAllText(Path.Combine(hostDir, "Migrations/seed/users.csv"), users.ToCsv());
    }
    
    [Test]
    public void Serialize_Contacts()
    {
        var hostDir = GetHostDir();
        
        using var db = ResolveDbFactory().Open();
        var contacts = db.Select<SeedContact>(db.From<Contact>());
        File.WriteAllText(Path.Combine(hostDir, "Migrations/seed/subscribers.csv"), contacts.ToCsv());
    }

    [Test]
    public void Save_MailingLists_Enum()
    {
        var hostDir = GetHostDir();

        EmailRenderer.SaveMailingListEnum(seedPath:Path.Combine(hostDir, "Migrations/seed/mailinglists.csv"),
            savePath:Path.Combine(hostDir, "../CreatorKit.ServiceModel/Types/MailingList.cs"));
    }
}
