using HomePage.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Drawing.Printing;
using Markdig;

namespace HomePage.Controllers
{
    public class ProjectsController : Controller
    {
        private readonly HomePageContext homePageContext;
        public ProjectsController(HomePageContext _homePageContext)
        {
            homePageContext = _homePageContext;
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
            // Get the README URL
            string readmeURL = homePageContext.Applications.Where(x => x.Name == "TrueNAS Home Server").
                                    Select(x => x.GitHubReadMeLink).FirstOrDefault();

            var projectInfo = homePageContext.Applications.Where(x => x.Name == "TrueNAS Home Server").FirstOrDefault();

            string markdownContent = string.Empty;

            // Check if the URL is not null or empty
            if (!string.IsNullOrEmpty(readmeURL))
            {
                using (HttpClient client = new HttpClient())
                {
                    // Fetch the markdown content from the URL
                    markdownContent = await client.GetStringAsync(readmeURL);
                }

                markdownContent = markdownContent.Replace("images/", "https://raw.githubusercontent.com/NinePiece2/TrueNASHomeServer/refs/heads/main/images/");
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
            return View();
        }
        
        public async Task<IActionResult> SocialNetwork()
        {
            return View();
        }
    }
}
