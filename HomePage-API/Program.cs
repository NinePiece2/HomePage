using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.DataProtection;
using HomePage_API.Data;
using Microsoft.EntityFrameworkCore;
using HomePage_API.Services;

namespace HomePage_API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var connectionString = builder.Configuration.GetConnectionString("HomePageEntities");
            builder.Services.AddDbContext<HomePageContext>(options =>
                options.UseSqlServer(connectionString));

            builder.Services.AddDataProtection()
                .PersistKeysToDbContext<HomePageContext>();

            builder.Services.AddTransient<IEmailService, EmailService>();

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}
