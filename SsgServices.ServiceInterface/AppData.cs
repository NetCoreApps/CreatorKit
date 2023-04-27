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
    public List<string> EmailLayouts { get; set; } = new();
    public List<string> EmailPartials { get; set; } = new();
    public List<string> EmailPages { get; set; } = new();

    public List<KeyValuePair<string, string>> EmailLayoutOptions => ToKeyValuePairs(EmailLayouts);
    public List<KeyValuePair<string, string>> EmailPageOptions => ToKeyValuePairs(EmailPages);
    public KeyValuePair<string, string>[] MailingListOptions => Input.GetEnumEntries(typeof(MailingList));
    public string[]? MailingListValues => Input.GetEnumValues(typeof(MailingList));

    public List<KeyValuePair<string, string>> ToKeyValuePairs(List<string> filenames)
    {
        var sorted = filenames.OrderBy(x => x).ToList();
        var to = new List<KeyValuePair<string, string>>();
        foreach (var file in sorted)
        {
            to.Add(new(file, file.WithoutExtension()));
        }
        return to;
    }

    public async Task LoadAsync(IVirtualDirectory emailsDir)
    {
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
