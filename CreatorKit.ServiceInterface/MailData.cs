using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using CreatorKit.ServiceModel;

namespace CreatorKit.ServiceInterface;

public class MailData
{
    public DateTime LastUpdated { get; set; }
    public AppData AppData { get; }

    public MailData(AppData appData)
    {
        AppData = appData;
    }

    public TimeSpan CacheDuration { get; set; } = TimeSpan.FromMinutes(10);
    public ConcurrentDictionary<int, SiteMeta> MetaCache { get; } = new();

    public async Task<SiteMeta> SearchAsync(DateTime? fromDate = null, DateTime? toDate = null)
    {
        var year = fromDate?.Year ?? DateTime.UtcNow.Year;
        var metaCache = MetaCache.TryGetValue(year, out var siteMeta) && siteMeta.CreatedDate < DateTime.UtcNow.Add(CacheDuration)
            ? siteMeta
            : null;

        if (metaCache == null)
        {
            var metaJson = await AppData.WebsiteBaseUrl.CombineWith($"/meta/{year}/all.json").GetJsonFromUrlAsync();
            metaCache = metaJson.FromJson<SiteMeta>();
            metaCache.CreatedDate = DateTime.UtcNow;
            MetaCache[year] = metaCache;
        }

        var results = new SiteMeta
        {
            CreatedDate = metaCache.CreatedDate,
            Pages = WithinRange(metaCache.Pages, fromDate, toDate).ToList(),
            Posts = WithinRange(metaCache.Posts, fromDate, toDate).ToList(),
            WhatsNew = WithinRange(metaCache.WhatsNew, fromDate, toDate).ToList(),
            Videos = WithinRange(metaCache.Videos, fromDate, toDate).ToList(),
        };
        return results;
    }

    private static IEnumerable<MarkdownFile> WithinRange(IEnumerable<MarkdownFile> docs, DateTime? fromDate, DateTime? toDate)
    {
        if (fromDate != null)
            docs = docs.Where(x => x.Date >= fromDate);
        if (toDate != null)
            docs = docs.Where(x => x.Date < toDate);
        return docs;
    }
}
