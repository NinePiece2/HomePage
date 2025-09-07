using HomePage_API.Models;
using Markdig;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.Drawing.Printing;
using System.Text.RegularExpressions;
using HomePage_API.Services;
using System.Globalization;

namespace HomePage_API.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly HttpClient client;
        private readonly IEmailService emailService;

        public ContactController(IEmailService _emailService)
        {
            emailService = _emailService;

            var handler = new HttpClientHandler
            {
                ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => true
            };

            client = new HttpClient(handler);
        }

        [HttpPost]
        public async Task<IActionResult> SendContactForm([FromBody] ContactFormModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            TextInfo textInfo = CultureInfo.CurrentCulture.TextInfo;
            string[] words = model.Name.Split(' ');
            for (int i = 0; i < words.Length; i++)
            {
                words[i] = textInfo.ToTitleCase(words[i]);
            }
            model.Name = string.Join(" ", words);

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

            bodyHtml = bodyHtml.Replace("{Name}", model.Name)
                   .Replace("{Email}", model.Email)
                   .Replace("{Topic}", model.Topic)
                   .Replace("{Message}", model.Message);

            await emailService.SendEmail("romit.sagu@hotmail.com", "Contact Request - " + model.Name, null, bodyHtml, true, "romit@romitsagu.com", null);

            return Ok();
        }
    }
}
