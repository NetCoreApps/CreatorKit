using System;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.OrmLite;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class MailServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public MailData MailData { get; set; }

    public async Task<object> Any(CreateSubscription request)
    {
        var mailingList = EnumUtils.FromEnumFlagsList<MailingList>(request.MailingLists);
        var sub = await Db.SingleAsync<Subscription>(x => x.EmailLower == request.Email.ToLower());
        if (sub != null)
        {
            sub.FirstName = request.FirstName;
            sub.LastName = request.LastName;
            sub.MailingLists |= mailingList;
            await Db.UpdateAsync(sub);
        }
        else
        {
            sub = new Subscription
            {
                Email = request.Email,
                FirstName = request.FirstName,
                LastName = request.LastName,
                MailingLists = mailingList,
                EmailLower = request.Email.ToLower(),
                NameLower = $"{request.FirstName} {request.LastName}".ToLower(),
                ExternalRef = Guid.NewGuid().ToString(),
                CreatedDate = DateTime.UtcNow,
            };
            sub.Id = (int) await Db.InsertAsync(sub, selectIdentity: true);
            
            var viewRequest = new ViewMail { Layout = "layout-marketing", Page = "verify-email" }.FromSub(sub);
            var context = Renderer.CreateMailContext(layout:viewRequest.Layout, page:viewRequest.Page, meta: MailData);
            var bodyHtml = await Renderer.RenderToHtmlAsync(Db, context, sub);
            await Renderer.SendMessageAsync(Db, new MailMessage {
                Message = new EmailMessage
                {
                    To = sub.ToMailTos(),
                    Subject = $"Verify Email Address for {MailInfo.Instance.Company}",
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest));
        }
        return sub;
    }

    public async Task<object> Any(UnsubscribeFromMailingList request)
    {
        var mailingList = EnumUtils.FromEnumFlagsList<MailingList>(request.MailingLists);
        var existing = request.ExternalRef != null
            ? await Db.SingleAsync<Subscription>(x => x.ExternalRef == request.ExternalRef)
            : request.Email != null
                ? await Db.SingleAsync<Subscription>(x => x.EmailLower == request.Email.ToLower())
                : null;
        if (existing == null)
            throw HttpError.NotFound("Mail subscription not found");

        var remainingList = existing.MailingLists & ~mailingList;
        await Db.UpdateOnlyAsync(() => new Subscription { MailingLists = remainingList },
            where: x => x.Id == existing.Id);

        return new UnsubscribeToMailingListResponse();
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
        if (await Db.UpdateOnlyAsync(() => new MailMessage { StartedDate = DateTime.UtcNow },
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
        var rowsAffected = await Db.UpdateOnlyAsync(() => new Subscription { VerifiedDate = DateTime.UtcNow },
            where: x => x.ExternalRef == request.ExternalRef);

        var sub = await Db.SingleAsync<Subscription>(x => x.ExternalRef == request.ExternalRef);
        if (sub != null)
        {
            var viewRequest = new ViewMail { Layout = "layout-marketing", Page = "newsletter-welcome" }.FromSub(sub);
            var context = Renderer.CreateMailContext(layout:viewRequest.Layout, page:viewRequest.Page, meta: MailData);
            var bodyHtml = await Renderer.RenderToHtmlAsync(Db, context, sub);
            await Renderer.SendMessageAsync(Db, new MailMessage {
                Message = new EmailMessage {
                    To = sub.ToMailTos(),
                    Subject = $"{sub.FirstName}, welcome to {MailInfo.Instance.Company}!",
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest));
        }

        return HttpResult.Redirect(MailLinks.Instance.SignupConfirmed);
    }

    public async Task<object> Any(ViewMail request)
    {
        var context = Renderer.CreateMailContext(layout:request.Layout, page:request.Page);
        
        return await Renderer.RenderToHtmlResultAsync(Db, context, request);
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
    
    public async Task<object> Any(CreateSimpleTextEmail request)
    {
        var sub = await Db.GetOrCreateSubscription(request);
        var email = await Renderer.CreateMessageAsync(Db, new MailMessage
        {
            Message = new EmailMessage
            {
                To = sub.ToMailTos(),
                Subject = request.Subject,
                BodyText = request.Body,
            },
        }.FromRequest(request), send:request.Send == true);
        return email;
    }

    public async Task<object> Any(CreateMarkdownHtmlEmail request)
    {
        var context = Renderer.CreateMailContext(layout:request.Layout, page:request.Page,
            args: new() {
                ["title"] = request.Title,
                ["body"] = request.Body,
            });
        var bodyHtml = await Renderer.RenderToHtmlAsync(Db, context, request);
        var sub = await Db.GetOrCreateSubscription(request);
        var email = await Renderer.CreateMessageAsync(Db, new MailMessage
        {
            Message = new EmailMessage
            {
                To = sub.ToMailTos(),
                Subject = request.Subject,
                BodyHtml = bodyHtml,
            },
        }.FromRequest(request), send:request.Send == true);
        return email;
    }
}

public static class MailMessageExtensions
{
    public static async Task<Subscription> GetOrCreateSubscription(this IDbConnection db, CreateEmailBase request)
    {
        var sub = await db.SingleAsync<Subscription>(x => x.EmailLower == request.Email.ToLower());
        if (sub == null)
        {
            sub = new Subscription
            {
                Email = request.Email,
                EmailLower = request.Email.ToLower(),
                FirstName = request.FirstName,
                LastName = request.LastName,
                MailingLists = MailingList.None,
                ExternalRef = Guid.NewGuid().ToString(),
                CreatedDate = DateTime.UtcNow,
            };
            sub.Id = (int) await db.InsertAsync(sub, selectIdentity: true);
        }
        return sub;
    }

    public static T FromSub<T>(this T request, Subscription sub) where T : RenderEmailBase
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