Licensing.RegisterLicense("OSS BSD-3-Clause 2023 https://github.com/NetCoreApps/ssg-services JyPOp3PjQXHkwYmxCq86NLwnfZuqLTdSCNJ2ymUdIhPcr+z8cvx3XZW//rLsHjHDWhzmSxnMV+0ql2N9RTOvJHeyjq22infs0PExajdpKXfGK9j+EWwB4eKK/uod1h3lUIyCVnp6DLsMQS6yIWT37F2W3xeT1+iH7y5qMfAVYF0=");

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseHttpsRedirection();
}
app.UseServiceStack(new AppHost());

app.Run();