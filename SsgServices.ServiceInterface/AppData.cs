using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Html;
using ServiceStack.IO;
using SsgServices.ServiceModel;

namespace SsgServices.ServiceInterface;

public class AppData
{
    public static AppData Instance { get; } = new();
    public TimeSpan PeriodicTasksInterval { get; set; } = TimeSpan.FromMinutes(10);
    public List<string> EmailLayouts { get; set; } = new();
    public List<string> EmailPartials { get; set; } = new();
    public List<string> EmailPages { get; set; } = new();

    public List<string> EmailLayoutOptions => EmailLayouts.Map(x => x.WithoutExtension());
    public List<string> EmailPageOptions => EmailPages.Map(x => x.WithoutExtension());
    public List<string> RenderEmailApis { get; set; } = new();
    public List<string> MailRunGeneratorApis { get; set; } = new();
    public KeyValuePair<string, string>[] MailingListOptions => Input.GetEnumEntries(typeof(MailingList));
    public string[]? MailingListValues => Input.GetEnumValues(typeof(MailingList));

    public async Task LoadAsync(ServiceStackHost appHost, IVirtualDirectory emailsDir)
    {
        RenderEmailApis = appHost.Metadata.RequestTypes.Where(x => typeof(RenderEmailBase).IsAssignableFrom(x)).Map(x => x.Name);
        MailRunGeneratorApis = appHost.Metadata.RequestTypes.Where(x => typeof(MailRunBase).IsAssignableFrom(x)).Map(x => x.Name);
        
        EmailLayouts.Clear();
        EmailPartials.Clear();
        EmailPages.Clear();
        
        var files = emailsDir.GetFiles();
        foreach (var file in files)
        {
            if (!file.Name.EndsWith(".html"))
                continue;

            EmailPages.Add(file.Name);
        }

        var emailsSharedDir = emailsDir.GetDirectory("shared");
        foreach (var file in emailsSharedDir.GetFiles())
        {
            if (!file.Name.EndsWith(".html"))
                continue;

            if (file.Name.Contains("layout"))
            {
                EmailLayouts.Add(file.Name);
            } 
            else if (file.Name.Contains("partial"))
            {
                EmailPartials.Add(file.Name);
            }
        }
    }
}
