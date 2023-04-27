using System.Collections.Generic;
using ServiceStack;
using ServiceStack.DataAnnotations;
using ServiceStack.Messaging;

namespace SsgServices.ServiceModel;

[Tag(Tag.Mq), ExcludeMetadata, Restrict(RequestAttributes.MessageQueue)]
public class SendMessages : IGet, IReturn<SendMessageResponse>
{
    public List<long>? MailMessageIds { get; set; }
    public List<long>? MailRunMessageIds { get; set; }
}
public class SendMessageResponse
{
    public List<long>? MailMessageIds { get; set; }
    public List<long>? MailRunMessageIds { get; set; }
    public List<string>? Errors { get; set; }
    public ResponseStatus? ResponseStatus { get; set; }
}

[Tag(Tag.Mq), ValidateIsAdmin]
public class ViewMqMessages : IGet, IReturn<ViewMqMessagesResponse>
{
}
public class ViewMqMessagesResponse
{
    public Dictionary<string, List<IMessage>> Messages { get; set; }
}