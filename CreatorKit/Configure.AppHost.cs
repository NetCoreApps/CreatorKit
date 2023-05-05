using System.Data;
using Funq;
using ServiceStack;
using ServiceStack.OrmLite;
using ServiceStack.Web;
using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel;

[assembly: HostingStartup(typeof(CreatorKit.AppHost))]

namespace CreatorKit;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context,services) => {
            var publicApiBaseUrl = "https://" + (Environment.GetEnvironmentVariable("DEPLOY_HOST") ??
                                   "ssg-services.servicestack.net");
            AppData.Set(new AppData
            {
                BaseUrl = context.HostingEnvironment.IsDevelopment()
                    ? "https://localhost:5002"
                    : "https://servicestack.net",
                AppBaseUrl = context.HostingEnvironment.IsDevelopment()
                    ? "https://localhost:5001"
                    : publicApiBaseUrl,
                PublicApiBaseUrl = publicApiBaseUrl,
            });

            services.AddSingleton(MailData.Instance);
            services.AddSingleton(AppData.Instance);
            services.AddSingleton(EmailRenderer.Instance);
        });

    public AppHost() : base("Creator Kit", typeof(MyServices).Assembly) {}

    public override void Configure(Container container)
    {
        SetConfig(new HostConfig {
            AddRedirectParamsToQueryString = true,
            UseSameSiteCookies = false,
            AllowFileExtensions = { "json" }
        });
        
        Plugins.Add(new CorsFeature(allowedHeaders: "Content-Type,Authorization",
            allowOriginWhitelist: new[]{
                "https://localhost:5002",
                "https://localhost:5001",
                "http://localhost:5000",
                "http://localhost:8080",
                "https://servicestack.net",
                "https://diffusion.works",
            }, allowCredentials: true));
        Plugins.Add(new CleanUrlsFeature());
        
        MarkdownConfig.Transformer = new MarkdigTransformer();

        LoadAsync(container).GetAwaiter().GetResult();
    }

    public async Task LoadAsync(Container container)
    {
        container.Resolve<EmailRenderer>().Init(this);
        await container.Resolve<MailData>().LoadAsync();
        await container.Resolve<AppData>().LoadAsync(this, 
            ContentRootDirectory.GetDirectory("emails"), RootDirectory.GetDirectory("img/mail"));
        ScriptContext.ScriptAssemblies.Add(typeof(Hello).Assembly);
        ScriptContext.Args[nameof(AppData)] = AppData.Instance;
    }

    public static void RegisterLicense() =>
        Licensing.RegisterLicense("OSS BSD-3-Clause 2023 https://github.com/NetCoreApps/ssg-services JyPOp3PjQXHkwYmxCq86NLwnfZuqLTdSCNJ2ymUdIhPcr+z8cvx3XZW//rLsHjHDWhzmSxnMV+0ql2N9RTOvJHeyjq22infs0PExajdpKXfGK9j+EWwB4eKK/uod1h3lUIyCVnp6DLsMQS6yIWT37F2W3xeT1+iH7y5qMfAVYF0=");
}

public class MarkdigTransformer : IMarkdownTransformer
{
    private Markdig.MarkdownPipeline Pipeline { get; } = 
        Markdig.MarkdownExtensions.UseAdvancedExtensions(new Markdig.MarkdownPipelineBuilder()).Build();
    public string Transform(string markdown) => Markdig.Markdown.ToHtml(markdown, Pipeline);
}