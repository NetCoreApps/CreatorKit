using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.OrmLite;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using ServiceStack.Data;
using ServiceStack.Jobs;

namespace CreatorKit.ServiceInterface;

public class MailingServices(IBackgroundJobs jobs, EmailRenderer renderer, IMailProvider mail) 
    : Service
{
    public void Any(SubscribeToMailingList request)
    {
        Any(request.ConvertTo<CreateContact>());
    }
    
    public object Any(CreateContact request)
    {
        var mailingList = EnumUtils.FromEnumFlagsList<MailingList>(request.MailingLists);
        var contact = Db.Single<Contact>(x => x.EmailLower == request.Email.ToLower());
        if (contact != null)
        {
            contact.FirstName = request.FirstName;
            contact.LastName = request.LastName;
            contact.MailingLists |= mailingList;
            contact.UnsubscribedDate = null;
            contact.DeletedDate = null;
            Db.Update(contact);
        }
        else
        {
            var emailLower = request.Email.ToLower();
            var invalidEmail = Db.Single<InvalidEmail>(x => x.EmailLower == emailLower);
            if (invalidEmail != null)
                throw new Exception($"Email is blacklisted as {invalidEmail.Status}");
            
            contact = new Contact
            {
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName,
                MailingLists = mailingList,
                Source = request.Source,
                EmailLower = emailLower,
                NameLower = $"{request.FirstName} {request.LastName}".ToLower(),
                ExternalRef = renderer.CreateRef(),
                CreatedDate = DateTime.UtcNow,
            };
            contact.Id = (int)Db.Insert(contact, selectIdentity: true);
            
            var viewRequest = new RenderCustomHtml { Layout = "marketing", Template = "verify-email" }.FromContact(contact);
            var context = renderer.CreateMailContext(layout:viewRequest.Layout, page:viewRequest.Template);
            var bodyHtml = renderer.RenderToHtml(Db, context, contact);
            using var mailDb = mail.OpenMonthDb();
            renderer.CreateMessage(mailDb, new MailMessage {
                Message = new EmailMessage
                {
                    To = contact.ToMailTos(),
                    Subject = $"Verify Email Address for {AppData.Info.Company}",
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest));
        }
        return contact;
    }

    public object? Any(AdminCreateContact request)
    {
        var mailingList = EnumUtils.FromEnumFlagsList<MailingList>(request.MailingLists);
        var contact = Db.Single<Contact>(x => x.EmailLower == request.Email.ToLower());
        if (contact == null)
        {
            var emailLower = request.Email.ToLower();
            var invalidEmail = Db.Single<InvalidEmail>(x => x.EmailLower == emailLower);
            if (invalidEmail != null)
                throw new Exception($"Email is blacklisted as {invalidEmail.Status}");
            
            contact = new Contact
            {
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName,
                MailingLists = mailingList,
                Source = request.Source,
                EmailLower = request.Email.ToLower(),
                NameLower = $"{request.FirstName} {request.LastName}".ToLower(),
                ExternalRef = renderer.CreateRef(),
                CreatedDate = DateTime.UtcNow,
                VerifiedDate = request.VerifiedDate,
            };
            contact.Id = (int) Db.Insert(contact, selectIdentity: true);
        }
        return contact;
    }

    public void Any(UpdateContactMailingLists request)
    {
        var mailingLists = EnumUtils.FromEnumFlagsList<MailingList>(request.MailingLists);
        var existing = Db.Single<Contact>(x => x.ExternalRef == request.Ref);
        if (existing == null)
            throw HttpError.NotFound("Mail subscription not found");

        if (request.UnsubscribeAll == true)
        {
            Db.UpdateOnly(() => new Contact { MailingLists = MailingList.None, UnsubscribedDate = DateTime.UtcNow },
                where: x => x.Id == existing.Id);
        }
        else
        {
            Db.UpdateOnly(() => new Contact { MailingLists = mailingLists, UnsubscribedDate = null, DeletedDate = null },
                where: x => x.Id == existing.Id);
        }
    }

    public object Any(FindContact request)
    {
        var contact = request.Ref != null
            ? Db.Single<Contact>(x => x.ExternalRef == request.Ref)
            : request.Email != null
                ? Db.Single<Contact>(x => x.Email == request.Email)
                : throw HttpError.NotFound("Contact does not exist");

        return new FindContactResponse {
            Result = contact
        };
    }

    public object Any(ViewMailMessage request)
    {
        using var mailDb = mail.OpenMonthDb();
        var msg = mailDb.SingleById<MailMessage>(request.Id);
        return new HttpResult(msg.Message.BodyHtml) {
            ContentType = MimeTypes.Html
        };
    }

    public async Task<object?> Any(SendMailMessage request)
    {
        var msg = await jobs.RunCommandAsync<SendMailMessageCommand>(request);
        return msg;
    }

    public async Task<object?> Any(SendMailMessageRun request)
    {
        var msg = await jobs.RunCommandAsync<SendMailMessageRunCommand>(request);
        return msg;
    }

    public object Any(ViewMailRunMessage request)
    {
        using var mailDb = mail.OpenMonthDb();
        var msg = mailDb.SingleById<MailMessageRun>(request.Id);
        return new HttpResult(msg.Message.BodyHtml) {
            ContentType = MimeTypes.Html
        };
    }

    public object Any(VerifyEmailAddress request)
    {
        var rowsAffected = Db.UpdateOnly(() => new Contact { VerifiedDate = DateTime.UtcNow },
            where: x => x.ExternalRef == request.ExternalRef);

        var sub = Db.Single<Contact>(x => x.ExternalRef == request.ExternalRef);
        if (sub != null)
        {
            var viewRequest = new RenderCustomHtml { Layout = "marketing", Template = "newsletter-welcome" }.FromContact(sub);
            var context = renderer.CreateMailContext(layout:viewRequest.Layout, page:viewRequest.Template);
            var bodyHtml = renderer.RenderToHtml(Db, context, sub);

            using var mailDb = mail.OpenMonthDb();
            renderer.CreateMessage(mailDb, new MailMessage {
                Message = new EmailMessage {
                    To = sub.ToMailTos(),
                    Subject = $"{sub.FirstName}, welcome to {AppData.Info.Company}!",
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest));
        }

        return HttpResult.Redirect(AppData.Urls.SignupConfirmed);
    }

    public async Task Any(SendMailRun request)
    {
        using var mailDb = mail.OpenMonthDb();
        var msgIdsToSend = await mailDb.ColumnAsync<int>(mailDb.From<MailMessageRun>()
            .Where(x => x.MailRunId == request.Id && (x.CompletedDate == null && x.StartedDate == null))
            .Select(x => x.Id));

        if (msgIdsToSend.Count > 0)
        {
            await mailDb.UpdateOnlyAsync(() => new MailRun { SentDate = DateTime.UtcNow }, 
                where:x => x.Id == request.Id && x.SentDate == null);
        }

        var jobRef = jobs.RunCommand<SendMessagesCommand>(new SendMessages {
            MailRunMessageIds = msgIdsToSend
        });
    }

    public async Task<object> Any(ViewMailRunInfo request)
    {
        using var mailDb = mail.OpenMonthDb();
        var results = await mailDb.SingleAsync<(int, int)>(mailDb.From<MailMessageRun>()
            .Where(x => x.MailRunId == request.Id)
            .Select(x => new {
                Completed = Sql.Count(nameof(MailMessageRun.CompletedDate)),
                Total = Sql.Count("*"),
            }));
        
        return new ViewMailRunInfoResponse
        {
            MessagesSent = results.Item1,
            TotalMessages = results.Item2,
        };
    }

    public object Any(ViewAppData request)
    {
        var appData = AppData.Instance;
        return new ViewAppDataResponse
        {
            WebsiteBaseUrl = appData.WebsiteBaseUrl,
            BaseUrl = appData.BaseUrl,
            Vars = appData.Vars,
            BannedUserIds = appData.BannedUsersMap.Keys.ToList(),
        };
    }

    public async Task<object> Any(ViewAppStats request)
    {
        var tables = new[] {
            ("Users",           "AspNetUsers"),
            ("Contacts",        nameof(Contact)),
            ("Threads",         nameof(Thread)),
            ("Comments",        nameof(Comment)),
            ("CommentReports",  nameof(CommentReport)),
            ("CommentVotes",    nameof(CommentVote)),
        };

        var totalSql = tables
            .Map(x => $"SELECT '{x.Item1}' AS Name, (SELECT COUNT(*) FROM {x.Item2}) AS Total")
            .Join(" UNION ");
        var totals = await Db.DictionaryAsync<string, int>(totalSql);
        
        var last30DayTotalSql = tables
            .Map(x => $"SELECT '{x.Item1}' AS Name, (SELECT COUNT(*) FROM {x.Item2} WHERE CreatedDate < @period) AS Total")
            .Join(" UNION ");
        var before30DayTotals = await Db.DictionaryAsync<string, int>(last30DayTotalSql, 
            new { period = DateTime.UtcNow.AddDays(-30) });

        var last30DayTotals = new Dictionary<string, int>();
        foreach (var entry in tables)
        {
            var key = entry.Item1;
            last30DayTotals[key] = totals[key] - before30DayTotals[key];
        }

        var mailTables = new[] {
            ("Messages",        nameof(MailMessage)),
            ("MailRuns",        nameof(MailRun)),
            ("MailRunMessages", nameof(MailMessageRun)),
        };
        using var mailDb = mail.OpenMonthDb();
        var mailTotalSql = mailTables
            .Map(x => $"SELECT '{x.Item1}' AS Name, (SELECT COUNT(*) FROM {x.Item2}) AS Total")
            .Join(" UNION ");
        var archivedTotals = await mailDb.DictionaryAsync<string, int>(mailTotalSql);

        return new ViewAppStatsResponse
        {
            Totals = totals,
            Before30DayTotals = before30DayTotals,
            Last30DayTotals = last30DayTotals,
            ArchivedTotals = archivedTotals,
        };
    }
}

public static class MailMessageExtensions
{
    public static async Task<Contact> GetContactByEmail(this IDbConnection db, string email)
    {
        var contact = await db.SingleAsync<Contact>(x => x.EmailLower == email.ToLower());
        if (contact == null)
            throw HttpError.NotFound("Contact not found");
        return contact;
    }
    
    public static Contact GetOrCreateContact(this IDbConnection db, CreateEmailBase request)
    {
        var sub = db.Single<Contact>(x => x.EmailLower == request.Email.ToLower());
        if (sub == null)
        {
            sub = new Contact
            {
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName,
                EmailLower = request.Email.ToLower(),
                NameLower = $"{request.FirstName} {request.LastName}".ToLower(),
                MailingLists = MailingList.None,
                ExternalRef = Guid.NewGuid().ToString("N"),
                CreatedDate = DateTime.UtcNow,
            };
            sub.Id = (int) db.Insert(sub, selectIdentity: true);
        }
        return sub;
    }

    public static T FromContact<T>(this T request, Contact sub) where T : RenderEmailBase
    {
        request.Email = sub.Email;
        request.FirstName = sub.FirstName;
        request.LastName = sub.LastName;
        request.ExternalRef = sub.ExternalRef;
        return request;
    }

    public static MailMessage FromRequest(this MailMessage msg, object request)
    {
        msg.Renderer = request.GetType().Name;
        msg.RendererArgs = request.ToObjectDictionary();

        if (msg.RendererArgs.TryGetValue(nameof(msg.Email), out var oEmail) && oEmail is string email)
            msg.Email = email;
        if (msg.RendererArgs.TryGetValue(nameof(msg.Layout), out var oLayout) && oLayout is string layout)
            msg.Layout = layout;
        if (msg.RendererArgs.TryGetValue(nameof(msg.Template), out var oPage) && oPage is string page)
            msg.Template = page;
        
        return msg;
    }

    public static MailRun FromRequest(this MailRun mailRun, object request)
    {
        mailRun.Generator = request.GetType().Name;
        mailRun.GeneratorArgs = request.ToObjectDictionary();

        if (mailRun.GeneratorArgs.TryGetValue(nameof(mailRun.MailingList), out var oMailingList) 
            && oMailingList is MailingList mailingList)
            mailRun.MailingList = mailingList;
        if (mailRun.GeneratorArgs.TryGetValue(nameof(mailRun.Layout), out var oLayout) && oLayout is string layout)
            mailRun.Layout = layout;
        if (mailRun.GeneratorArgs.TryGetValue(nameof(mailRun.Template), out var oPage) && oPage is string page)
            mailRun.Template = page;
        
        return mailRun;
    }

    public static MailMessageRun FromRequest(this MailMessageRun msg, object request)
    {
        msg.Renderer = request.GetType().Name;
        msg.RendererArgs = request.ToObjectDictionary();

        // if (msg.RequestArgs.TryGetValue(nameof(msg.Email), out var oEmail) && oEmail is string email)
        //     msg.Email = email;
        // if (msg.RequestArgs.TryGetValue(nameof(msg.Layout), out var oLayout) && oLayout is string layout)
        //     msg.Layout = layout;
        // if (msg.RequestArgs.TryGetValue(nameof(msg.Page), out var oPage) && oPage is string page)
        //     msg.Page = page;
        
        return msg;
    }
}