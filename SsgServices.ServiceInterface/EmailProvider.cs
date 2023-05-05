using System;
using System.Linq;
using System.Net.Mail;
using System.Net.Mime;
using ServiceStack;
using SsgServices.ServiceModel;
using SsgServices.ServiceModel.Types;

namespace SsgServices.ServiceInterface;

public class EmailProvider
{
    public string UserName { get; set; }
    public string Password { get; set; }
    public string Host { get; set; }
    public int Port { get; set; }
    public bool EnableSsl { get; set; }
    public string From { get; set; }
    public string FromName { get; set; }
    public string Bcc { get; set; }
    public string BccName { get; set; }

    public Action<EmailMessage, System.Net.Mail.MailMessage> BeforeSend { get; set; }

    public Action<EmailMessage, Exception> OnException { get; set; }

    public void Send(EmailMessage email)
    {
        try
        {
            using var client = new SmtpClient(Host, Port);
            client.Credentials = new System.Net.NetworkCredential(UserName, Password);
            client.EnableSsl = EnableSsl;

            var emailTo = email.To.First().ToMailAddress();
            var emailFrom = (email.From ?? new MailTo { Email = From, Name = FromName }).ToMailAddress();

            var msg = new System.Net.Mail.MailMessage(emailFrom, emailTo)
            {
                Subject = email.Subject,
                Body = email.BodyText ?? email.BodyHtml,
                IsBodyHtml = email.BodyText == null,
            };

            if (!msg.IsBodyHtml && email.BodyHtml != null)
            {
                var mimeType = new ContentType(MimeTypes.Html);
                var alternate = AlternateView.CreateAlternateViewFromString(email.BodyHtml, mimeType);
                msg.AlternateViews.Add(alternate);
            }

            foreach (var to in email.To.Skip(1))
            {
                msg.To.Add(to.ToMailAddress());
            }
            foreach (var cc in email.Cc.Safe())
            {
                msg.CC.Add(cc.ToMailAddress());
            }
            foreach (var bcc in email.Bcc.Safe())
            {
                msg.Bcc.Add(bcc.ToMailAddress());
            }
            if (!string.IsNullOrEmpty(Bcc))
            {
                msg.Bcc.Add(new MailAddress(Bcc));
            }

            BeforeSend?.Invoke(email, msg);

            client.Send(msg);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}

public static class EmailProviderUtils
{
    public static MailAddress ToMailAddress(this MailTo from)
    {
        return string.IsNullOrEmpty(from.Name)
            ? new MailAddress(from.Email)
            : new MailAddress(from.Email, from.Name);
    }
}