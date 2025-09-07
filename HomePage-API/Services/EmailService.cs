using HomePage_API.Data;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

namespace HomePage_API.Services
{
    public interface IEmailService
    {
        Task SendEmail(string userName, string title, bool? isSecure, string bodyHtml, bool? isImportantTag, string? ccEmail, string? bccEmail);
    }
    public class EmailService : IEmailService
    {
        private static string BearerToken;
        private readonly HomePageContext context;

        public EmailService(HomePageContext _context)
        {
            context = _context;
        }

        public async Task SendEmail(string userName, string title, bool? isSecure, string bodyHtml, bool? isImportantTag, string? ccEmail, string? bccEmail)
        {
            await GetBearerToken();

            var client = new HttpClient
            {
                BaseAddress = new Uri("https://emailserviceapi.romitsagu.com/")
            };

            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", BearerToken);

            var requestBody = new
            {
                UserName = userName,
                Title = title,
                CreatedEmail = "portfolio@romitsagu.com",
                CreatedName = "Portfolio No-Reply",
                IsSecure = isSecure,
                BodyHtml = bodyHtml,
                IsImportantTag = isImportantTag,
                CcEmail = ccEmail,
                BccEmail = bccEmail
            };

            var jsonRequestBody = JsonConvert.SerializeObject(requestBody);
            var content = new StringContent(jsonRequestBody, Encoding.UTF8, "application/json");

            HttpResponseMessage response = await client.PostAsync("Email/SendEmail", content);

            if (!response.IsSuccessStatusCode)
            {
                Console.WriteLine("Unable to send Error Email.");
                throw new Exception("Unable to send Error Email.");
            }
        }

        internal async Task GetBearerToken()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri($"https://emailserviceapi.romitsagu.com/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var userId = context.PowerSettings.Where(x => x.Key == "EmailService-API-Key").FirstOrDefault().Value;

                var requestUrl = $"Token/GetToken?userid={userId}";

                HttpResponseMessage response = await client.GetAsync(requestUrl);

                if (response.IsSuccessStatusCode)
                {
                    var stringResponse = await response.Content.ReadAsStringAsync();
                    BearerToken = stringResponse.Trim('"');
                }
                else
                {
                    Console.WriteLine("Unable to get access token for Email Error Notification.");
                    throw new Exception("Unable to get access token for Email Error Notification.");
                }
            }

        }
    }
}