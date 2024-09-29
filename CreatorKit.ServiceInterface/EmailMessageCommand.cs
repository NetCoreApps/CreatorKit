using System.Linq;
using System.Net.Mail;
using System.Net.Mime;
using CreatorKit.ServiceModel.Types;
using ServiceStack;

namespace CreatorKit.ServiceInterface;

[Worker("smtp")]
public class EmailMessageCommand(SmtpConfig config) : SyncCommand<EmailMessage>
{
    protected override void Run(EmailMessage request)
    {
        using var client = new SmtpClient(config.Host, config.Port);
        client.Credentials = new System.Net.NetworkCredential(config.Username, config.Password);
        client.EnableSsl = true;

        var emailTo = request.To.First().ToMailAddress();
        var emailFrom = (request.From ?? new MailTo { Email = config.FromEmail, Name = config.FromName! }).ToMailAddress();

        var msg = new System.Net.Mail.MailMessage(emailFrom, emailTo)
        {
            Subject = request.Subject,
            Body = request.BodyText ?? request.BodyHtml,
            IsBodyHtml = request.BodyText == null,
        };

        if (!msg.IsBodyHtml && request.BodyHtml != null)
        {
            var mimeType = new ContentType(MimeTypes.Html);
            var alternate = AlternateView.CreateAlternateViewFromString(request.BodyHtml, mimeType);
            msg.AlternateViews.Add(alternate);
        }

        foreach (var to in request.To.Skip(1))
        {
            msg.To.Add(to.ToMailAddress());
        }
        foreach (var cc in request.Cc.Safe())
        {
            msg.CC.Add(cc.ToMailAddress());
        }
        foreach (var bcc in request.Bcc.Safe())
        {
            msg.Bcc.Add(bcc.ToMailAddress());
        }
        if (!string.IsNullOrEmpty(config.Bcc))
        {
            msg.Bcc.Add(new MailAddress(config.Bcc));
        }

        client.Send(msg);        
    }
}

public static class EmailUtils
{
    public static MailAddress ToMailAddress(this MailTo from)
    {
        return string.IsNullOrEmpty(from.Name)
            ? new MailAddress(from.Email)
            : new MailAddress(from.Email, from.Name);
    }
}
