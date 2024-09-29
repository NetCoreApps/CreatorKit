using Funq;
using ServiceStack;
using NUnit.Framework;
using CreatorKit.ServiceInterface;
using CreatorKit.ServiceModel;

namespace CreatorKit.Tests;

public class IntegrationTest
{
    const string BaseUri = "http://localhost:2000/";
    private readonly ServiceStackHost appHost;

    class AppHost : AppSelfHostBase
    {
        public AppHost() : base(nameof(IntegrationTest), typeof(MyServices).Assembly) { }

        public override void Configure(Container container)
        {
             DefaultScriptContext.ScriptAssemblies.Add(typeof(Hello).Assembly);
            DefaultScriptContext.ScriptMethods.Add(new ValidationScripts());
            DefaultScriptContext.Args[nameof(AppData)] = AppData.Instance;
        }
    }

    public IntegrationTest()
    {
        CreatorKit.AppHost.RegisterLicense();
        appHost = new AppHost()
            .Init()
            .Start(BaseUri);
    }

    [OneTimeTearDown]
    public void OneTimeTearDown() => appHost.Dispose();

    public IServiceClient CreateClient() => new JsonServiceClient(BaseUri);

    [Test]
    public void Can_call_Hello_Service()
    {
        var client = CreateClient();

        var response = client.Get(new Hello { Name = "World" });

        Assert.That(response.Result, Is.EqualTo("Hello, World!"));
    }
}