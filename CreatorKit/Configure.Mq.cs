using ServiceStack.Messaging;
using CreatorKit.ServiceModel;

[assembly: HostingStartup(typeof(CreatorKit.ConfigureMq))]

namespace CreatorKit;

public class ConfigureMq : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            services.AddSingleton<IMessageService>(c => new BackgroundMqService());
        })
        .ConfigureAppHost(afterAppHostInit: appHost => {
            var mqServer = appHost.Resolve<IMessageService>();
            mqServer.RegisterHandler<SendMessages>(appHost.ExecuteMessage);
            mqServer.RegisterHandler<BackgroundTasks>(appHost.ExecuteMessage);
            mqServer.Start();
        });
}
