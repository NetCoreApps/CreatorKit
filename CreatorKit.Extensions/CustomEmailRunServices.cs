﻿using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using ServiceStack;

namespace CreatorKit.Extensions;

public class CustomEmailRunServices : Service
{
    public EmailProvider EmailProvider { get; set; }
    public EmailRenderer Renderer { get; set; }
    public WebsiteData WebsiteData { get; set; }

    public async Task<object> Any(NewsletterMailRun request)
    {
        var newsletterDate = request.ToDate ?? DateTime.UtcNow;
        var response = Renderer.CreateMailRunResponse();

        var mailRun = await Renderer.CreateMailRunAsync(Db, new MailRun {
            Layout = "marketing",
            Template = "newsletter",
        }, request);
        
        foreach (var sub in await Db.GetActiveSubscribersAsync(request.MailingList))
        {
            var viewRequest = request.ConvertTo<RenderNewsletter>().FromContact(sub);
            var bodyHtml = (string) await Gateway.SendAsync(typeof(string), viewRequest);
            response.AddMessage(await Renderer.CreateMessageRunAsync(Db, new MailMessageRun
            {
                Message = new EmailMessage
                {
                    To = sub.ToMailTos(),
                    Subject = string.Format(AppData.Info.NewsletterFmt, $"{newsletterDate:MMMM} {newsletterDate:yyyy}"),
                    BodyHtml = bodyHtml,
                }
            }.FromRequest(viewRequest), mailRun, sub));
        }

        await Db.CompletedMailRunAsync(mailRun, response);
        return response;
    }
}