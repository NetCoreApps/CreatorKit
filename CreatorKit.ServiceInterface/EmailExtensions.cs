using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;

namespace CreatorKit.ServiceInterface;

public static class EmailExtensions
{
    public static void AddMessage(this MailRunResponse ret, MailMessageRun msg) => ret.CreatedIds.Add(msg.Id);
}