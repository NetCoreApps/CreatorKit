using System;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.OrmLite;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class MailServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public MailData MailData { get; set; }

    public async Task<object> Any(SubscribeToMailingList request)
    {
        var mailingList = EnumUtils.FromEnumFlagsList<MailingList>(request.MailingLists);
        var existing = await Db.SingleAsync<Subscription>(x => x.EmailLower == request.Email.ToLower());
        if (existing != null)
        {
            existing.FirstName = request.FirstName;
            existing.LastName = request.LastName;
            existing.MailingLists |= mailingList;
            await Db.UpdateAsync(existing);
        }
        else
        {
            var newMail = new Subscription
            {
                Email = request.Email,
                EmailLower = request.Email.ToLower(),
                FirstName = request.FirstName,
                LastName = request.LastName,
                MailingLists = mailingList,
                ExternalRef = Guid.NewGuid().ToString(),
                CreatedDate = DateTime.UtcNow,
            };
            var id = await Db.InsertAsync(newMail, selectIdentity: true);
        }
        return new SubscribeToMailingListResponse();
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
        
        msg.Message.BodyHtml = msg.Message.BodyText = null;
        return msg;
    }

    public async Task<object> Any(SendMailMessageRun request)
    {
        var msg = await Db.SingleByIdAsync<MailRunMessage>(request.Id);
        if (msg.CompletedDate != null && request.Force != true)
            throw new Exception($"Message {request.Id} has already been sent");

        try
        {
            EmailProvider.Send(msg.Message);
        }
        catch (Exception e)
        {
            await Db.UpdateOnlyAsync(() => new MailRunMessage {
                    ErrorCode = e.GetType().Name,
                    ErrorMessage = e.Message,
                },
                where: x => x.Id == request.Id);
            throw;
        }

        await Db.UpdateOnlyAsync(() => new MailRunMessage { CompletedDate = DateTime.UtcNow },
            where: x => x.Id == request.Id);
        
        msg.Message.BodyHtml = msg.Message.BodyText = null;
        return msg;
    }

    public async Task<object> Any(ViewMailRunMessage request)
    {
        var msg = await Db.SingleByIdAsync<MailRunMessage>(request.Id);
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
}
