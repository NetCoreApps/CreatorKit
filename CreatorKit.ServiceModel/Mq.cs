using System.Collections.Generic;
using ServiceStack;
using ServiceStack.DataAnnotations;
using ServiceStack.Messaging;

namespace CreatorKit.ServiceModel;

[Tag(Tag.Mq), ExcludeMetadata, Restrict(RequestAttributes.MessageQueue)]
public class SendMessages : IGet, IReturn<SendMessageResponse>
{
    public List<int>? MailMessageIds { get; set; }
    public List<int>? MailRunMessageIds { get; set; }
}
public class SendMessageResponse
{
    public List<int>? MailMessageIds { get; set; }
    public List<int>? MailRunMessageIds { get; set; }
    public List<string>? Errors { get; set; }
    public ResponseStatus? ResponseStatus { get; set; }
}

[Tag(Tag.Mq), ExcludeMetadata, Restrict(RequestAttributes.MessageQueue)]
public class BackgroundTasks : IReturn<BackgroundTasksResponse>
{
    public bool? ArchiveCompleted { get; set; }
}
public class BackgroundTasksResponse
{
    public List<string> Completed { get; set; }
    public List<string>? Errors { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

[ExcludeMetadata]
[Tag(Tag.Mq), ValidateIsAdmin]
public class ViewMqMessages : IGet, IReturn<ViewMqMessagesResponse>
{
}
public class ViewMqMessagesResponse
{
    public Dictionary<string, List<IMessage>> Messages { get; set; }
}
