using dotenv.net;
using HomePage.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.DataProtection;

var builder = WebApplication.CreateBuilder(args);

// Load environment variables from .env file in development environment
if (builder.Environment.IsDevelopment())
{
    DotEnv.Load();
}
else
{
    builder.Configuration.AddEnvironmentVariables();
}

var connectionString = builder.Configuration.GetConnectionString("HomePageEntities");
builder.Services.AddDbContext<HomePageContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddDataProtection()
    .PersistKeysToDbContext<HomePageContext>();

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Syncfusion License Registration
var syncfusionLicense = Environment.GetEnvironmentVariable("SyncfusionLicense");
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense(syncfusionLicense);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

// Add custom error handling for 404 Not Found
app.UseStatusCodePagesWithReExecute("/Home/Error", "?statusCode={0}");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
