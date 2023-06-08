using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Messaging;
using ServiceStack.OrmLite;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;

namespace CreatorKit.ServiceInterface;

public class BackgroundMqServices : Service
{
    public IMessageService MessageService { get; set; }

    public async Task<object> Any(SendMessages request)
    {
        var ret = new SendMessageResponse();
        await using var mailServices = HostContext.ResolveService<MailingServices>(Request);

        foreach (var id in request.MailMessageIds.Safe())
        {
            try
            {
                await mailServices.Any(new SendMailMessage { Id = id });
            }
            catch (Exception e)
            {
                ret.Errors ??= new();
                ret.Errors.Add($"[Error {id}] {e.GetType().Name}: {e.Message}");
            }
        }
        
        foreach (var id in request.MailRunMessageIds.Safe())
        {
            try
            {
                await mailServices.Any(new SendMailMessageRun { Id = id });
            }
            catch (Exception e)
            {
                ret.Errors ??= new();
                ret.Errors.Add($"[Error {id}] {e.GetType().Name}: {e.Message}");
            }
        }

        if (request.MailRunMessageIds?.Count > 0)
        {
            var mailRunId = await Db.ScalarAsync<int>(Db.From<MailMessageRun>().Where(x => x.Id == request.MailRunMessageIds[0])
                .Select(x => x.MailRunId));
            await Db.UpdateOnlyAsync(() => new MailRun { CompletedDate = DateTime.UtcNow },
                where: x => x.Id == mailRunId);
        }
        
        await PulsePeriodicTasks();
        
        return ret;
    }
    
    static DateTime lastPeriodicRun = DateTime.MinValue;
    async Task PulsePeriodicTasks()
    {
        if (Interlocked.Read(ref InBackgroundTasks) > 0)
            return;

        var lastRun = DateTime.UtcNow - lastPeriodicRun;
        if (lastRun > AppData.Instance.PeriodicTasksInterval)
        {
            lastPeriodicRun = DateTime.UtcNow;
            // Run any tasks that should run periodically
            PublishMessage(new BackgroundTasks { ArchiveCompleted = true });
        }
    }    
    
    static long InBackgroundTasks = 0;
    public async Task<object> Any(BackgroundTasks request)
    {
        var ret = new BackgroundTasksResponse();
        if (Interlocked.CompareExchange(ref InBackgroundTasks, 1, 0) > 0)
            return ret;
        
        try
        {
            return ret;
        }
        finally
        {
            Interlocked.CompareExchange(ref InBackgroundTasks, 0, 1);
        }
    }

    public object Any(ViewMqMessages request)
    {
        var bgMq = (BackgroundMqService)MessageService;
        var mqCollection = (BackgroundMqCollection<SendMessages>) bgMq.GetCollection(typeof(SendMessages));
        var ret = new Dictionary<string, List<IMessage>>();
        foreach (var queueName in mqCollection.QueueNames)
        {
            ret[queueName] = mqCollection.GetQueueMessages(queueName);
        }
        return new ViewMqMessagesResponse
        {
            Messages = ret
        };
    }
}