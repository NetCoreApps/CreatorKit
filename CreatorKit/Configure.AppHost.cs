using CreatorKit.Extensions;
using Funq;
using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel;

[assembly: HostingStartup(typeof(CreatorKit.AppHost))]

namespace CreatorKit;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context,services) => {
            AppData.Set(context.Configuration);
            services.AddSingleton(AppData.Instance);
            services.AddSingleton(EmailRenderer.Instance);
            services.AddSingleton<MailData>();
        });

    public AppHost() : base("Creator Kit", typeof(MyServices).Assembly, typeof(CustomEmailServices).Assembly) {}

    public override void Configure(Container container)
    {
        SetConfig(new HostConfig {
            AddRedirectParamsToQueryString = true,
            UseSameSiteCookies = false,
            AllowFileExtensions = { "json" }
        });

        Plugins.Add(new CorsFeature(AppSettings)
            .AppendOriginWhitelist(new[] {
                AppData.Instance.WebsiteBaseUrl,
            }));
        Plugins.Add(new CleanUrlsFeature());
        
        MarkdownConfig.Transformer = new MarkdigTransformer();
        LoadAsync(container).GetAwaiter().GetResult();
    }

    public async Task LoadAsync(Container container)
    {
        container.Resolve<EmailRenderer>().Init(this);
        await container.Resolve<AppData>().LoadAsync(this, 
            ContentRootDirectory.GetDirectory("emails"), RootDirectory.GetDirectory("img/mail"));
        ScriptContext.ScriptAssemblies.Add(typeof(Hello).Assembly);
        ScriptContext.ScriptMethods.Add(new ValidationScripts());
        ScriptContext.Args[nameof(AppData)] = AppData.Instance;
    }

    public static void RegisterLicense() =>
        Licensing.RegisterLicense("OSS BSD-3-Clause 2023 https://github.com/NetCoreApps/CreatorKit uxZ7vM7ILRPT6vsqcNZOji4nqjOuCh4vvtk7SRwIcos4yW4aQHZZdTZ6858df/i8ZS+sIBUGb/ysSWWYLMbCjsgVrZ3kbBunomMXYD5g0eeM8TM8Dn2q23Jp7wCoCRV5DrsBdPDR62CAwMfVarbdHrJP+AIKQWyqdB6Q/F8px1E=");
}

public class MarkdigTransformer : IMarkdownTransformer
{
    private Markdig.MarkdownPipeline Pipeline { get; } = 
        Markdig.MarkdownExtensions.UseAdvancedExtensions(new Markdig.MarkdownPipelineBuilder()).Build();
    public string Transform(string markdown) => Markdig.Markdown.ToHtml(markdown, Pipeline);
}