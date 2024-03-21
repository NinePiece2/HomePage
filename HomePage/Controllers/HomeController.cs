using HomePage.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using System.Diagnostics;
using System.Globalization;
using System.Reflection.Metadata;


namespace HomePage.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Error(int? statusCode = null)
        {
            if (statusCode == 404)
            {
                return View("Error404");
            }

            // Handle other status codes or return a generic error view
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public ActionResult SendEmail(string name, string email, string message, string topic)
        {

            name = CapitalizeWords(name);

            var bodyHtml = EmailBody(name, email, message, topic);

            EmailServiceContext emailServiceContext = new EmailServiceContext();
            //var result = emailServiceContext.EnqueueIncomingMessagesRun("romit@romitsagu.com", "Contact Request - " + name, null, null, null, bodyHtml, null, true, null, null);
            emailServiceContext.SaveChanges();

            var result = 1;

            if (result == 1)
            {
                return Json(new { success = true, message = "Operation successful" });
            }

            return Json(new { success = false, message = $"Error" });
        }



        public string EmailBody(string name, string email, string message, string topic)
        {
            // C# code to construct the email body
            var bodyHtml = @"
            <!DOCTYPE html>
            <html lang=""en"">
            <head>
                <meta charset=""UTF-8"">
                <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
                <title>Email Template</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        color: #333;
                        padding: 20px;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        margin-bottom: 20px;
                    }
                    .info-item {
                        margin-bottom: 10px;
                    }
                    label {
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class=""container"">
                    <h1>Form Submission</h1>
                    <div class=""info-item"">
                        <label>Name:</label>
                        <p>{Name}</p>
                    </div>
                    <div class=""info-item"">
                        <label>Email:</label>
                        <p>{Email}</p>
                    </div>
                    <div class=""info-item"">
                        <label>Topic:</label>
                        <p>{Topic}</p>
                    </div>
                    <div class=""info-item"">
                        <label>Message:</label>
                        <p>{Message}</p>
                    </div>
                </div>
            </body>
            </html>"
            ;

            bodyHtml = bodyHtml.Replace("{Name}", name)
                   .Replace("{Email}", email)
                   .Replace("{Topic}", topic)
                   .Replace("{Message}", message);


            return bodyHtml;

        }

        public ActionResult RenderPopUpModel()
        {
            Models.PopUpModel modal = new Models.PopUpModel { ID = "PopUpModel", textArea = false, cancelBtnMessage = "Cancel", confirmBtnMessage = "Confirm", reminderText = "Are you sure you want to Submit?" };
            return PartialView("~/Views/Shared/PopUpModel.cshtml", modal);
        }

        public static string CapitalizeWords(string input)
        {
            TextInfo textInfo = CultureInfo.CurrentCulture.TextInfo;
            string[] words = input.Split(' ');
            for (int i = 0; i < words.Length; i++)
            {
                words[i] = textInfo.ToTitleCase(words[i]);
            }
            return string.Join(" ", words);
        }
    }
}
