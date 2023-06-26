﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.OrmLite;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using ServiceStack.Data;

namespace CreatorKit.ServiceInterface;

public class MailingServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }

    public async Task Any(SubscribeToMailingList request)
    {
        await Any(request.ConvertTo<CreateContact>());
    }
    
    public async Task<object> Any(CreateContact request)
    {
        var mailingList = EnumUtils.FromEnumFlagsList<MailingList>(request.MailingLists);
        var contact = await Db.SingleAsync<Contact>(x => x.EmailLower == request.Email.ToLower());
        if (contact != null)
        {
            contact.FirstName = request.FirstName;
            contact.LastName = request.LastName;
            contact.MailingLists |= mailingList;
            contact.UnsubscribedDate = null;
            contact.DeletedDate = null;
            await Db.UpdateAsync(contact);
        }
        else
        {
            contact = new Contact
            {
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName,
                MailingLists = mailingList,
                Source = request.Source,
                EmailLower = request.Email.ToLower(),
                NameLower = $"{request.FirstName} {request.LastName}".ToLower(),
                ExternalRef = Renderer.CreateRef(),
                CreatedDate = DateTime.UtcNow,
            };
            contact.Id = (int) await Db.InsertAsync(contact, selectIdentity: true);
            
            var viewRequest = new RenderCustomHtml { Layout = "marketing", Template = "verify-email" }.FromContact(contact);
            var context = Renderer.CreateMailContext(layout:viewRequest.Layout, page:viewRequest.Template);
            var bodyHtml = await Renderer.RenderToHtmlAsync(Db, context, contact);
            await Renderer.CreateMessageAsync(Db, new MailMessage {
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

    public async Task<object?> Any(AdminCreateContact request)
    {
        var mailingList = EnumUtils.FromEnumFlagsList<MailingList>(request.MailingLists);
        var contact = await Db.SingleAsync<Contact>(x => x.EmailLower == request.Email.ToLower());
        if (contact == null)
        {
            contact = new Contact
            {
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName,
                MailingLists = mailingList,
                Source = request.Source,
                EmailLower = request.Email.ToLower(),
                NameLower = $"{request.FirstName} {request.LastName}".ToLower(),
                ExternalRef = Renderer.CreateRef(),
                CreatedDate = DateTime.UtcNow,
                VerifiedDate = request.VerifiedDate,
            };
            contact.Id = (int) await Db.InsertAsync(contact, selectIdentity: true);
        }
        return contact;
    }

    public async Task Any(UpdateContactMailingLists request)
    {
        var mailingLists = EnumUtils.FromEnumFlagsList<MailingList>(request.MailingLists);
        var existing = await Db.SingleAsync<Contact>(x => x.ExternalRef == request.Ref);
        if (existing == null)
            throw HttpError.NotFound("Mail subscription not found");

        if (request.UnsubscribeAll == true)
        {
            await Db.UpdateOnlyAsync(() => new Contact { MailingLists = MailingList.None, UnsubscribedDate = DateTime.UtcNow },
                where: x => x.Id == existing.Id);
        }
        else
        {
            await Db.UpdateOnlyAsync(() => new Contact { MailingLists = mailingLists, UnsubscribedDate = null, DeletedDate = null },
                where: x => x.Id == existing.Id);
        }
    }

    public async Task<object> Any(FindContact request)
    {
        var contact = request.Ref != null
            ? await Db.SingleAsync<Contact>(x => x.ExternalRef == request.Ref)
            : request.Email != null
                ? await Db.SingleAsync<Contact>(x => x.Email == request.Email)
                : throw HttpError.NotFound("Contact does not exist");

        return new FindContactResponse
        {
            Result = contact
        };
    }

    public async Task<object> Any(ViewMailMessage request)
    {
        var msg = await Db.SingleByIdAsync<MailMessage>(request.Id);
        return new HttpResult(msg.Message.BodyHtml) {
            ContentType = MimeTypes.Html
        };
    }

    public async Task<object> Any(SendMailMessage request)
    {
        var msg = await Db.SingleByIdAsync<MailMessage>(request.Id);
        if (msg.CompletedDate != null && request.Force != true)
            throw new Exception($"Message {request.Id} has already been sent");

        // ensure message is only sent once
        if (await Db.UpdateOnlyAsync(() => new MailMessage { StartedDate = DateTime.UtcNow, Draft = false },
                where: x => x.Id == request.Id && (x.StartedDate == null || request.Force == true)) == 1)
        {
            try
            {
                EmailProvider.Send(msg.Message);
            }
            catch (Exception e)
            {
                var error = e.ToResponseStatus();
                await Db.UpdateOnlyAsync(() => new MailMessage { Error = error },
                    where: x => x.Id == request.Id);
                throw;
            }

            await Db.UpdateOnlyAsync(() => new MailMessage { CompletedDate = DateTime.UtcNow },
                where: x => x.Id == request.Id);
        }
        
        return msg;
    }

    public async Task<object> Any(SendMailMessageRun request)
    {
        var msg = await Db.SingleByIdAsync<MailMessageRun>(request.Id);
        if (msg.CompletedDate != null && request.Force != true)
            throw new Exception($"Message {request.Id} has already been sent");

        // ensure message is only sent once
        if (await Db.UpdateOnlyAsync(() => new MailMessageRun { StartedDate = DateTime.UtcNow },
                where: x => x.Id == request.Id && x.StartedDate == null) == 1)
        {
            try
            {
                EmailProvider.Send(msg.Message);
            }
            catch (Exception e)
            {
                var error = e.ToResponseStatus();
                await Db.UpdateOnlyAsync(() => new MailMessageRun { Error = error },
                    where: x => x.Id == request.Id);
                throw;
            }

            await Db.UpdateOnlyAsync(() => new MailMessageRun { CompletedDate = DateTime.UtcNow },
                where: x => x.Id == request.Id);
        }
        
        return msg;
    }

    public async Task<object> Any(ViewMailRunMessage request)
    {
        var msg = await Db.SingleByIdAsync<MailMessageRun>(request.Id);
        return new HttpResult(msg.Message.BodyHtml) {
            ContentType = MimeTypes.Html
        };
    }

    public async Task<object> Any(VerifyEmailAddress request)
    {
        var rowsAffected = await Db.UpdateOnlyAsync(() => new Contact { VerifiedDate = DateTime.UtcNow },
            where: x => x.ExternalRef == request.ExternalRef);

        var sub = await Db.SingleAsync<Contact>(x => x.ExternalRef == request.ExternalRef);
        if (sub != null)
        {
            var viewRequest = new RenderCustomHtml { Layout = "marketing", Template = "newsletter-welcome" }.FromContact(sub);
            var context = Renderer.CreateMailContext(layout:viewRequest.Layout, page:viewRequest.Template);
            var bodyHtml = await Renderer.RenderToHtmlAsync(Db, context, sub);
            await Renderer.CreateMessageAsync(Db, new MailMessage {
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
        var msgIdsToSend = await Db.ColumnAsync<int>(Db.From<MailMessageRun>()
            .Where(x => x.MailRunId == request.Id && (x.CompletedDate == null && x.StartedDate == null))
            .Select(x => x.Id));

        if (msgIdsToSend.Count > 0)
        {
            await Db.UpdateOnlyAsync(() => new MailRun { SentDate = DateTime.UtcNow }, 
                where:x => x.Id == request.Id && x.SentDate == null);
        }
        
        PublishMessage(new SendMessages {
            MailRunMessageIds = msgIdsToSend
        });
    }

    public async Task<object> Any(ViewMailRunInfo request)
    {
        var results = await Db.SingleAsync<(int, int)>(Db.From<MailMessageRun>()
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

    public async Task<object> Any(ViewAppData request)
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
            ("Users", nameof(AppUser)),
            ("Contacts", nameof(Contact)),
            ("Messages", nameof(MailMessage)),
            ("MailRuns", nameof(MailRun)),
            ("MailRunMessages", nameof(MailMessageRun)),
            ("Threads", nameof(Thread)),
            ("Comments", nameof(Comment)),
            ("CommentReports", nameof(CommentReport)),
            ("CommentVotes", nameof(CommentVote)),
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

        var archivedTables = new[] {
            ("Messages", nameof(ArchiveMessage)),
            ("MailRuns", nameof(ArchiveRun)),
            ("MailRunMessages", nameof(ArchiveMessageRun)),
        };
        var archivedTotalSql = archivedTables
            .Map(x => $"SELECT '{x.Item1}' AS Name, (SELECT COUNT(*) FROM {x.Item2}) AS Total")
            .Join(" UNION ");
        using var dbArchive = await DbFactory.OpenAsync("archive");
        var archivedTotals = await dbArchive.DictionaryAsync<string, int>(archivedTotalSql);

        return new ViewAppStatsResponse
        {
            Totals = totals,
            Before30DayTotals = before30DayTotals,
            Last30DayTotals = last30DayTotals,
            ArchivedTotals = archivedTotals,
        };
    }

    public IDbConnectionFactory DbFactory { get; set; }
    public async Task<object> Any(ArchiveMail request)
    {
        var messageIdsToDelete = new List<int>();
        var mailRunIdsToDelete = new List<int>();
        
        var createdBefore = DateTime.UtcNow.AddDays(request.OlderThanDays!.Value * -1);
        if (request.Messages == true)
        {
            var messages = await Db.SelectAsync<MailMessage>(x => x.CompletedDate != null && x.CreatedDate < createdBefore);
            try
            {
                using var dbArchive = await DbFactory.OpenAsync("archive");
                foreach (var message in messages)
                {
                    var archiveMessage = message.ConvertTo<ArchiveMessage>();
                    await dbArchive.InsertAsync(archiveMessage);
                    messageIdsToDelete.Add(message.Id);
                }
            }
            finally
            {
                await Db.DeleteByIdsAsync<MailMessage>(messageIdsToDelete);
            }
        }
        if (request.MailRuns == true)
        {
            var mailRuns = await Db.SelectAsync<MailRun>(x =>x.CompletedDate != null && x.CreatedDate < createdBefore);
            try
            {
                using var dbArchive = await DbFactory.OpenAsync("archive");
                foreach (var mailRun in mailRuns)
                {
                    var archiveMailRun = mailRun.ConvertTo<ArchiveRun>();
                    var archiveId = (int) await dbArchive.InsertAsync(archiveMailRun, selectIdentity:true);
                    var mailRunMessages = await Db.SelectAsync<MailMessageRun>(x => x.MailRunId == mailRun.Id);
                    foreach (var message in mailRunMessages)
                    {
                        var archiveMessage = message.ConvertTo<ArchiveMessageRun>();
                        archiveMessage.MailRunId = archiveId;
                        await dbArchive.InsertAsync(archiveMessage);
                    }
                    mailRunIdsToDelete.Add(mailRun.Id);
                }
            }
            finally
            {
                await Db.DeleteByIdsAsync<MailRun>(mailRunIdsToDelete);
            }
        }

        return new ArchiveMailResponse
        {
            ArchivedMessageIds = messageIdsToDelete,
            ArchivedMailRunIds = mailRunIdsToDelete,
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
    
    public static async Task<Contact> GetOrCreateContact(this IDbConnection db, CreateEmailBase request)
    {
        var sub = await db.SingleAsync<Contact>(x => x.EmailLower == request.Email.ToLower());
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
            sub.Id = (int) await db.InsertAsync(sub, selectIdentity: true);
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