using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Script;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class MailInfo
{
    public static MailInfo Instance { get; } = new();
    public string Company { get; set; } = "ServiceStack";
    public string CompanyOfficial { get; set; } = "ServiceStack, Inc.";
    public string Domain { get; set; } = "servicestack.net";
    public string MailingAddress { get; set; } = "470 Schooleys Mt Road #636, Hackettstown, NJ 07840-4096";
    public string MailPreferences { get; set; } = "Mail Preferences";
    public string Unsubscribe { get; set; } = "Unsubscribe";
    public string Contact { get; set; } = "Contact";
    public string Privacy { get; set; }  = "Privacy policy";
    public string OurAddress { get; set; } = "Our mailing address:";
    public string MailReason { get; set; } = "You received this email because you are subscribed to ServiceStack news and announcements.";
    public string SignOffTeam { get; set; } = "The ServiceStack Team";
    public string NewsletterFmt { get; set; } = "ServiceStack Newsletter, {0}";
}

public class MailImages
{
    public static MailImages Instance { get; } = new();
    public const string BaseUrl = "https://ssg-services.servicestack.net/img/mail";
    public string Logo72 { get; set; } = BaseUrl + "/logo_72x72@2x.png";
    public string LogoFull350 { get; set; } = BaseUrl + "/logofull_350x60@2x.png";
    public string WebsiteSocial { get; set; } = BaseUrl + "/website_24x24@2x.png";
    public string YouTubeSocial { get; set; } = BaseUrl + "/youtube_24x24@2x.png";
    public string Email { get; set; } = BaseUrl + "/email_100x100@2x.png";
    public string TwitterSocial { get; set; } = BaseUrl + "/twitter_24x24@2x.png";
    public string SpeakerSection { get; set; } = BaseUrl + "/speaker_48x48@2x.png";
    public string VideoSection { get; set; } = BaseUrl + "/video_48x48@2x.png";
    public string YouTubeSection { get; set; } = BaseUrl + "/youtube_48x48@2x.png";
    public string BlogSection { get; set; } = BaseUrl + "/blog_48x48@2x.png";
    public string Welcome { get; set; } = BaseUrl + "/welcome_650.jpg";
}

public class MailLinks
{
    public static MailLinks Instance { get; } = new();
    public string BaseUrl { get; set; } = MailData.Instance.BaseUrl;
    public string AppBaseUrl { get; set; } = MailData.Instance.AppBaseUrl;
    public string Website { get; set; } = MailData.Instance.BaseUrl;
    public string MailPreferences { get; set; } = MailData.Instance.BaseUrl + "/mailpreferences";
    public string Unsubscribe { get; set; } = MailData.Instance.BaseUrl + "/unsubscribe";
    public string Privacy { get; set; } = MailData.Instance.BaseUrl + "/privacy";
    public string Contact { get; set; } = MailData.Instance.BaseUrl + "/#contact";
    public string SignupConfirmed { get; set; } = MailData.Instance.BaseUrl + "/signup-confirmed";
    public string Twitter { get; set; } = "https://twitter.com/ServiceStack";
    public string YouTube { get; set; } = "https://www.youtube.com/channel/UC0kXKGVU4NHcwNdDdRiAJSA";
    public List<ImageLink> Socials => new()
    {
        new() { Href = Website, Src = MailImages.Instance.WebsiteSocial },
        new() { Href = YouTube, Src = MailImages.Instance.YouTubeSocial },
        new() { Href = Twitter, Src = MailImages.Instance.TwitterSocial },
    };
}

public class MailData
{
    public static MailData Instance { get; set; }
    public string BaseUrl { get; init; }
    public string AppBaseUrl { get; init; }
    public DateTime LastUpdated { get; set; }
    public List<MarkdownFile> Posts { get; set; } = new();

    public Task LoadAsync() => LoadAsync(BaseUrl);
    public async Task LoadAsync(string baseUrl)
    {
        Posts.Clear();
        var indexUrl = baseUrl.CombineWith("/meta/index.json");
        var index = JSON.parse(await indexUrl.GetJsonFromUrlAsync());
        var posts = index is Dictionary<string,object> oIndex
            ? oIndex.TryGetValue("posts", out var oPosts)
                ? oPosts.ConvertTo<List<string>>()
                : null
            : null;
        
        foreach (var yearPostsUrl in posts.Safe())
        {
            var yearPostsJson = await yearPostsUrl.GetJsonFromUrlAsync();
            var yearPosts = yearPostsJson.FromJson<List<MarkdownFile>>();
            Posts.AddRange(yearPosts);
        }

        LastUpdated = DateTime.UtcNow;
        Posts = Posts.OrderByDescending(x => x.Date).ToList();
    }

    public MailData Search(DateTime? fromDate = null, DateTime? toDate = null)
    {
        var posts = Posts.AsEnumerable();
        if (fromDate != null)
            posts = posts.Where(x => x.Date >= fromDate);
        if (toDate != null)
            posts = posts.Where(x => x.Date < toDate);
        
        return new MailData
        {
            Posts = posts.ToList() 
        };
    }
}

public class ImageLink
{
    public string Href { get; set; }
    public string Src { get; set; }
}
