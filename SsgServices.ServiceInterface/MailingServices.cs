using System;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.OrmLite;
using SsgServices.ServiceModel;
using SsgServices.ServiceModel.Types;

namespace SsgServices.ServiceInterface;

public class MailingServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }

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
                EmailLower = request.Email.ToLower(),
                NameLower = $"{request.FirstName} {request.LastName}".ToLower(),
                ExternalRef = Renderer.CreateRef(),
                CreatedDate = DateTime.UtcNow,
            };
            contact.Id = (int) await Db.InsertAsync(contact, selectIdentity: true);
            
            var viewRequest = new RenderCustomHtml { Layout = "marketing", Page = "verify-email" }.FromContact(contact);
            var context = Renderer.CreateMailContext(layout:viewRequest.Layout, page:viewRequest.Page, meta: MailData);
            var bodyHtml = await Renderer.RenderToHtmlAsync(Db, context, contact);
            await Renderer.CreateMessageAsync(Db, new MailMessage {
                Message = new EmailMessage
                {
                    To = contact.ToMailTos(),
                    Subject = $"Verify Email Address for {MailInfo.Instance.Company}",
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest));
        }
        return contact;
    }

    public async Task Any(UnsubscribeFromMailingList request)
    {
        var mailingList = EnumUtils.FromEnumFlagsList<MailingList>(request.MailingLists);
        var existing = request.ExternalRef != null
            ? await Db.SingleAsync<Contact>(x => x.ExternalRef == request.ExternalRef)
            : request.Email != null
                ? await Db.SingleAsync<Contact>(x => x.EmailLower == request.Email.ToLower())
                : null;
        if (existing == null)
            throw HttpError.NotFound("Mail subscription not found");

        var remainingList = existing.MailingLists & ~mailingList;
        await Db.UpdateOnlyAsync(() => new Contact { MailingLists = remainingList },
            where: x => x.Id == existing.Id);
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
                await Db.UpdateOnlyAsync(() => new MailMessage {
                        ErrorCode = e.GetType().Name,
                        ErrorMessage = e.Message,
                    },
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
                await Db.UpdateOnlyAsync(() => new MailMessageRun {
                        ErrorCode = e.GetType().Name,
                        ErrorMessage = e.Message,
                    },
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

    public async Task<object> Any(ViewMailData request)
    {
        if (request.Load == true)
            await MailData.LoadAsync();
        
        return new ViewMailDataResponse
        {
            LastUpdated = MailData.LastUpdated,
            LatestPosts = MailData.Posts.OrderByDescending(x => x.Date).Take(10).ToList(),
        };
    }

    public async Task<object> Any(VerifyEmailAddress request)
    {
        var rowsAffected = await Db.UpdateOnlyAsync(() => new Contact { VerifiedDate = DateTime.UtcNow },
            where: x => x.ExternalRef == request.ExternalRef);

        var sub = await Db.SingleAsync<Contact>(x => x.ExternalRef == request.ExternalRef);
        if (sub != null)
        {
            var viewRequest = new RenderCustomHtml { Layout = "marketing", Page = "newsletter-welcome" }.FromContact(sub);
            var context = Renderer.CreateMailContext(layout:viewRequest.Layout, page:viewRequest.Page, meta: MailData);
            var bodyHtml = await Renderer.RenderToHtmlAsync(Db, context, sub);
            await Renderer.CreateMessageAsync(Db, new MailMessage {
                Message = new EmailMessage {
                    To = sub.ToMailTos(),
                    Subject = $"{sub.FirstName}, welcome to {MailInfo.Instance.Company}!",
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest));
        }

        return HttpResult.Redirect(MailLinks.Instance.SignupConfirmed);
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
}

public static class MailMessageExtensions
{
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
        if (msg.RendererArgs.TryGetValue(nameof(msg.Page), out var oPage) && oPage is string page)
            msg.Page = page;
        
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
        if (mailRun.GeneratorArgs.TryGetValue(nameof(mailRun.Page), out var oPage) && oPage is string page)
            mailRun.Page = page;
        
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