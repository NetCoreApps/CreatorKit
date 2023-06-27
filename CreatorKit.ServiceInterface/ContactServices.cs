using System;
using System.Linq;
using System.Threading.Tasks;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using ServiceStack;
using ServiceStack.OrmLite;

namespace CreatorKit.ServiceInterface;

public class ContactServices : Service
{
    public async Task<object> Any(InvalidateEmails request)
    {
        if (!request.Emails.IsEmpty())
        {
            var invalidEmails = request.Emails.Map(x => new InvalidEmail
            {
                Email = x,
                EmailLower = x.ToLower(),
                Status = request.Status,
            });
            var existingInvalidEmails = await Db.ColumnDistinctAsync<string>(Db.From<InvalidEmail>()
                .Select(x => x.EmailLower));
            foreach (var invalidEmail in invalidEmails)
            {
                if (existingInvalidEmails.Contains(invalidEmail.EmailLower))
                    continue;
                await Db.InsertAsync(invalidEmail);
                existingInvalidEmails.Add(invalidEmail.EmailLower);
            }

            var lowerEmails = invalidEmails.Map(x => x.EmailLower);
            await Db.DeleteAsync<Contact>(x => lowerEmails.Contains(x.EmailLower));
        }
        return new ErrorResponse();
    }
}
