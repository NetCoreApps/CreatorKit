using System;
using System.Collections.Generic;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using ServiceStack;
using ServiceStack.Jobs;
using ServiceStack.OrmLite;

namespace CreatorKit.ServiceInterface;

public class SendMessages : IGet, IReturn<SendMessagesResponse>
{
    public List<int>? MailMessageIds { get; set; }
    public List<int>? MailRunMessageIds { get; set; }
}

public class SendMessagesResponse
{
    public List<int>? MailMessageIds { get; set; }
    public List<int>? MailRunMessageIds { get; set; }
    public List<string>? Errors { get; set; }
    public ResponseStatus? ResponseStatus { get; set; }
}

public class SendMessagesCommand(IMailProvider mail, IBackgroundJobs jobs)
    : SyncCommandWithResult<SendMessages, SendMessagesResponse>
{
    protected override SendMessagesResponse Run(SendMessages request)
    {
        var ret = new SendMessagesResponse();
        using var mailDb = mail.OpenMonthDb();

        foreach (var id in request.MailMessageIds.Safe())
        {
            try
            {
                var cmd = new SendMailMessageCommand(mail, jobs);
                cmd.ExecuteAsync(new SendMailMessage { Id = id }).Wait();
            }
            catch (Exception e)
            {
                ret.Errors ??= [];
                ret.Errors.Add($"[Error {id}] {e.GetType().Name}: {e.Message}");
            }
        }

        foreach (var id in request.MailRunMessageIds.Safe())
        {
            try
            {
                var cmd = new SendMailMessageRunCommand(mail, jobs);
                cmd.ExecuteAsync(new SendMailMessageRun { Id = id }).Wait();
            }
            catch (Exception e)
            {
                ret.Errors ??= [];
                ret.Errors.Add($"[Error {id}] {e.GetType().Name}: {e.Message}");
            }
        }

        if (request.MailRunMessageIds?.Count > 0)
        {
            var mailRunId = mailDb.Scalar<int>(mailDb.From<MailMessageRun>()
                .Where(x => x.Id == request.MailRunMessageIds[0])
                .Select(x => x.MailRunId));
            mailDb.UpdateOnly(() => new MailRun { CompletedDate = DateTime.UtcNow },
                where: x => x.Id == mailRunId);
        }

        return ret;
    }
}

public class SendMailMessageCommand(IMailProvider mail, IBackgroundJobs jobs)
    : SyncCommandWithResult<SendMailMessage, MailMessage>
{
    protected override MailMessage Run(SendMailMessage request)
    {
        using var mailDb = mail.OpenMonthDb();
        var msg = mailDb.SingleById<MailMessage>(request.Id);
        if (msg.CompletedDate != null && request.Force != true)
            throw new Exception($"Message {request.Id} has already been sent");

        // ensure message is only sent once
        if (mailDb.UpdateOnly(() => new MailMessage { StartedDate = DateTime.UtcNow, Draft = false },
                where: x => x.Id == request.Id && (x.StartedDate == null || request.Force == true)) == 1)
        {
            jobs.EnqueueCommand<EmailMessageCommand>(msg.Message);

            mailDb.UpdateOnly(() => new MailMessage { CompletedDate = DateTime.UtcNow },
                where: x => x.Id == request.Id);
        }

        return msg;
    }
}

public class SendMailMessageRunCommand(IMailProvider mail, IBackgroundJobs jobs)
    : SyncCommandWithResult<SendMailMessageRun, MailMessageRun>
{
    protected override MailMessageRun Run(SendMailMessageRun request)
    {
        using var mailDb = mail.OpenMonthDb();
        var msg = mailDb.SingleById<MailMessageRun>(request.Id);
        if (msg.CompletedDate != null && request.Force != true)
            throw new Exception($"Message {request.Id} has already been sent");

        // ensure message is only sent once
        if (mailDb.UpdateOnly(() => new MailMessageRun { StartedDate = DateTime.UtcNow },
                where: x => x.Id == request.Id && x.StartedDate == null) == 1)
        {
            jobs.EnqueueCommand<EmailMessageCommand>(msg.Message);

            mailDb.UpdateOnly(() => new MailMessageRun { CompletedDate = DateTime.UtcNow },
                where: x => x.Id == request.Id);
        }
        
        return msg;
    }
}