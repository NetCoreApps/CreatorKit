using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using ServiceStack;
using ServiceStack.OrmLite;

namespace CreatorKit.ServiceInterface;

public class MailCrudServices(IMailProvider mail, IAutoQueryDb autoQuery) : Service
{
    public object Any(QueryMailMessages request)
    {
        using var db = mail.OpenMonthDb(request.Month);
        var q = autoQuery.CreateQuery(request, base.Request, db);
        return autoQuery.Execute(request, q, base.Request, db);
    }

    public object Any(UpdateMailMessage request)
    {
        using var db = mail.OpenMonthDb();
        return autoQuery.PartialUpdate<MailMessage>(request, base.Request, db);
    }

    public object Any(DeleteMailMessages request)
    {
        using var db = mail.OpenMonthDb(request.Month);
        return autoQuery.Delete(request, base.Request, db);
    }

    public object Any(QueryMailRuns request)
    {
        using var db = mail.OpenMonthDb(request.Month);
        var q = autoQuery.CreateQuery(request, base.Request, db);
        return autoQuery.Execute(request, q, base.Request, db);
    }

    public object Any(CreateMailRun request)
    {
        using var db = mail.OpenMonthDb();
        return autoQuery.Create(request, base.Request, db);
    }

    public object Any(UpdateMailRun request)
    {
        using var db = mail.OpenMonthDb();
        return autoQuery.Update(request, base.Request, db);
    }

    public object Any(DeleteMailRun request)
    {
        using var db = mail.OpenMonthDb(request.Month);
        return autoQuery.Delete(request, base.Request, db);
    }

    public object Any(QueryMailRunMessages request)
    {
        using var db = mail.OpenMonthDb(request.Month);
        var q = autoQuery.CreateQuery(request, base.Request, db);
        return autoQuery.Execute(request, q, base.Request, db);
    }

    public object Any(UpdateMailRunMessage request)
    {
        using var db = mail.OpenMonthDb();
        return autoQuery.PartialUpdate<MailMessageRun>(request, base.Request, db);
    }

    public object Any(DeleteMailRunMessage request)
    {
        using var db = mail.OpenMonthDb(request.Month);
        return autoQuery.Delete(request, base.Request, db);
    }
}
