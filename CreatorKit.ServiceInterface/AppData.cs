using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ServiceStack;
using ServiceStack.Html;
using ServiceStack.IO;
using CreatorKit.ServiceModel;
using CreatorKit.ServiceModel.Types;
using ServiceStack.Auth;

namespace CreatorKit.ServiceInterface;

public class AppData
{
    public static AppData Instance { get; private set; } = new();
    public static void Set(AppData instance)
    {
        instance.ReplaceTokensInVars["{{" + nameof(BaseUrl) + "}}"] = instance.BaseUrl;
        instance.ReplaceTokensInVars["{{" + nameof(AppBaseUrl) + "}}"] = instance.AppBaseUrl;
        instance.ReplaceTokensInVars["{{" + nameof(PublicAppBaseUrl) + "}}"] = instance.PublicAppBaseUrl;
        Instance = instance;
    }

    public string BaseUrl { get; init; }
    public string AppBaseUrl { get; init; }
    /// <summary>
    /// Images in emails need to be hosted from publicly accessible URLs 
    /// </summary>
    public string PublicAppBaseUrl { get; init; }

    public Dictionary<string, string> ReplaceTokensInVars { get; set; } = new();
    
    public TimeSpan PeriodicTasksInterval { get; set; } = TimeSpan.FromMinutes(10);
    public List<string> EmailLayouts { get; set; } = new();
    public List<string> EmailPartials { get; set; } = new();
    public List<string> EmailTemplates { get; set; } = new();
    public List<string> EmailVars { get; set; } = new();

    public List<string> EmailLayoutOptions => EmailLayouts.Map(x => x.WithoutExtension());
    public List<string> EmailTemplateOptions => EmailTemplates.Map(x => x.WithoutExtension());
    public List<string> RenderEmailApis { get; set; } = new();
    public List<string> MailRunGeneratorApis { get; set; } = new();
    public KeyValuePair<string, string>[] MailingListOptions => Input.GetEnumEntries(typeof(MailingList));
    public string[]? MailingListValues => Input.GetEnumValues(typeof(MailingList));

    public Dictionary<string, Dictionary<string, string>> Vars { get; set; } = new();

    public ConcurrentDictionary<int, DateTime> BannedUsersMap { get; set; } = new();

    public IVirtualDirectory EmailsDir { get; set; }
    public IVirtualDirectory EmailImagesDir { get; set; }

    public async Task LoadAsync(ServiceStackHost appHost, IVirtualDirectory emailsDir, IVirtualDirectory emailImagesDir)
    {
        EmailsDir = emailsDir;
        EmailImagesDir = emailImagesDir;
        
        RenderEmailApis = appHost.Metadata.RequestTypes.Where(x => typeof(RenderEmailBase).IsAssignableFrom(x)).Map(x => x.Name);
        MailRunGeneratorApis = appHost.Metadata.RequestTypes.Where(x => typeof(MailRunBase).IsAssignableFrom(x)).Map(x => x.Name);
        
        EmailLayouts.Clear();
        EmailPartials.Clear();
        EmailTemplates.Clear();
        
        var files = emailsDir.GetFiles();
        foreach (var file in files.Where(x => x.Name.EndsWith(".html")))
        {
            EmailTemplates.Add(file.Name);
        }
        foreach (var file in emailsDir.GetDirectory("layouts").GetFiles().Where(x => x.Name.EndsWith(".html")))
        {
            EmailLayouts.Add(file.Name);
        }
        foreach (var file in emailsDir.GetDirectory("partials").GetFiles().Where(x => x.Name.EndsWith(".html")))
        {
            EmailPartials.Add(file.Name);
        }
        foreach (var file in emailsDir.GetDirectory("vars").GetFiles().Where(x => x.Name.EndsWith(".txt")))
        {
            EmailVars.Add(file.Name);
        }
        await LoadVarsAsync();
    }

    public static string Var(string collection, string name) => Instance.Vars[collection][name];
    public static class Info
    {
        public static string Company => Var("info", "Company");
        public static string NewsletterFmt => Var("info", "NewsletterFmt");
    }
    public static class Urls
    {
        public static string SignupConfirmed => Var("urls", "SignupConfirmed");
    }

    public async Task LoadVarsAsync()
    {
        Vars.Clear();
        foreach (var file in EmailsDir.GetDirectory("vars").GetFiles().Where(x => x.Name.EndsWith(".txt")))
        {
            await using var fs = file.OpenRead();
            var contents = await fs.ReadToEndAsync();
            foreach (var token in ReplaceTokensInVars)
            {
                contents = contents.Replace(token.Key, token.Value);
            }

            Vars[file.Name.WithoutExtension()] = new(contents.ParseAsKeyValues());
        }

        var images = Vars["images"] = new Dictionary<string, string>();
        var imgBaseUrl = PublicAppBaseUrl.CombineWith(EmailImagesDir.VirtualPath);
        var delims = new[] { '@', '.', '-' };
        foreach (var file in EmailImagesDir.GetFiles())
        {
            var splitOn = file.Name.IndexOfAny(delims);
            if (splitOn == -1) continue;

            var varName = file.Name.Substring(0, splitOn);
            images[varName] = imgBaseUrl.CombineWith(file.Name);
        }
    }
}
