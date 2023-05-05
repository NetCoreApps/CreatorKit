using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Script;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class MailData
{
    public static MailData Instance { get; set; } = new();
    public DateTime LastUpdated { get; set; }
    public List<MarkdownFile> Posts { get; set; } = new();

    public Task LoadAsync() => LoadAsync(AppData.Instance.BaseUrl);
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
