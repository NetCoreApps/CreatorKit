using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ServiceStack;
using ServiceStack.Messaging;
using SsgServices.ServiceModel;

[assembly: HostingStartup(typeof(SsgServices.ConfigureMq))]

namespace SsgServices;

/**
      Register Services you want available via MQ in your AppHost, e.g:
        var mqServer = container.Resolve<IMessageService>();
        mqServer.RegisterHandler<MyRequest>(ExecuteMessage);
*/
public class ConfigureMq : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            services.AddSingleton<IMessageService>(c => new BackgroundMqService());
        })
        .ConfigureAppHost(afterAppHostInit: appHost => {
            var mqServer = appHost.Resolve<IMessageService>();
            mqServer.RegisterHandler<SendMessages>(appHost.ExecuteMessage);
            mqServer.Start();
        });
}
