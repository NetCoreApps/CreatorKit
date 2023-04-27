using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Messaging;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class MqServices : Service
{
    public IMessageService MessageService { get; set; }
    
    public async Task<object> Any(SendMessages request)
    {
        var ret = new SendMessageResponse();
        await using var mailServices = HostContext.ResolveService<MailServices>(Request);

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
        
        return ret;
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