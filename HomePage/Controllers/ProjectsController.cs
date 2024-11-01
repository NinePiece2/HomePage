using HomePage.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Drawing.Printing;
using Markdig;
using Microsoft.IdentityModel.Tokens;

namespace HomePage.Controllers
{
    public class ProjectsController : Controller
    {
        private readonly HomePageContext homePageContext;
        private readonly HttpClient client;
        public ProjectsController(HomePageContext _homePageContext)
        {
            homePageContext = _homePageContext;

            var handler = new HttpClientHandler
            {
                ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => true
            };

            client = new HttpClient(handler);
        }

        public async Task<IActionResult> Index()
        {
            // Get the data
            List<Application> DataList = homePageContext.Applications.ToList();

            // Pass the data to the view
            ViewBag.DataList = DataList;
            return View();
        }

        public async Task<IActionResult> HomeServer()
        {
            var projectInfo = homePageContext.Applications.Where(x => x.Name == "TrueNAS Home Server").FirstOrDefault();

            string markdownContent = string.Empty;

            // Check if the URL is not null or empty
            if (!string.IsNullOrEmpty(projectInfo.GitHubReadMeLink))
            {
                markdownContent = await client.GetStringAsync(projectInfo.GitHubReadMeLink);

                markdownContent = markdownContent.Replace("images/", projectInfo.GitHubReadMeImagesLink);
            }
            else
            {
                // Handle the case where the URL is missing
                markdownContent = "No README URL found.";
                throw new Exception(markdownContent);
            }

            var mkd = Markdown.ToHtml(markdownContent);

            var model = new ProjectsViewModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return View(model);
        }
        
        public async Task<IActionResult> FaceGen()
        {

            var projectInfo = homePageContext.Applications.Where(x => x.Name == "Artiface: Facial Art Synthesizer").FirstOrDefault();

            string markdownContent = string.Empty;

            // Check if the URL is not null or empty
            if (!string.IsNullOrEmpty(projectInfo.GitHubReadMeLink))
            {
                markdownContent = await client.GetStringAsync(projectInfo.GitHubReadMeLink);

                markdownContent = markdownContent.Replace("images/", projectInfo.GitHubReadMeImagesLink);
            }
            else
            {
                // Handle the case where the URL is missing
                markdownContent = "No README URL found.";
                throw new Exception(markdownContent);
            }

            var mkd = Markdown.ToHtml(markdownContent);

            var model = new ProjectsViewModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return View(model);
        }
        
        public async Task<IActionResult> SocialNetwork()
        {
            return View();
        }
    }
}
