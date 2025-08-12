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
            var projectInfo = homePageContext.Applications
               .FirstOrDefault(x => x.Name == "TrueNAS Home Server");

            if (projectInfo == null)
                throw new Exception("Project info not found.");

            string markdownContent = string.Empty;

            if (!string.IsNullOrEmpty(projectInfo.GitHubReadMeLink))
            {
                markdownContent = await client.GetStringAsync(projectInfo.GitHubReadMeLink);
                markdownContent = markdownContent.Replace("images/", projectInfo.GitHubReadMeImagesLink);
            }
            else
            {
                throw new Exception("No README URL found.");
            }

            var pipeline = new MarkdownPipelineBuilder()
                .UseAdvancedExtensions()
                .Build();

            var mkd = Markdown.ToHtml(markdownContent, pipeline);

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
            var projectInfo = homePageContext.Applications
               .FirstOrDefault(x => x.Name == "Artiface: Facial Art Synthesizer");

            if (projectInfo == null)
                throw new Exception("Project info not found.");

            string markdownContent = string.Empty;

            if (!string.IsNullOrEmpty(projectInfo.GitHubReadMeLink))
            {
                markdownContent = await client.GetStringAsync(projectInfo.GitHubReadMeLink);
                markdownContent = markdownContent.Replace("images/", projectInfo.GitHubReadMeImagesLink);
                markdownContent = markdownContent.Replace("test_samples/", "https://raw.githubusercontent.com/Siddhant0701/ArtiFace/refs/heads/master/test_samples/");
            }
            else
            {
                throw new Exception("No README URL found.");
            }

            var pipeline = new MarkdownPipelineBuilder()
                .UseAdvancedExtensions()
                .Build();

            var mkd = Markdown.ToHtml(markdownContent, pipeline);

            var model = new ProjectsViewModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return View(model);
        }

        public async Task<IActionResult> CacheController()
        {
            var projectInfo = homePageContext.Applications
               .FirstOrDefault(x => x.Name == "Cache Controller");

            if (projectInfo == null)
                throw new Exception("Project info not found.");

            string markdownContent = string.Empty;

            if (!string.IsNullOrEmpty(projectInfo.GitHubReadMeLink))
            {
                markdownContent = await client.GetStringAsync(projectInfo.GitHubReadMeLink);
                markdownContent = markdownContent.Replace("images/", projectInfo.GitHubReadMeImagesLink);
            }
            else
            {
                throw new Exception("No README URL found.");
            }

            var pipeline = new MarkdownPipelineBuilder()
                .UseAdvancedExtensions()
                .Build();

            var mkd = Markdown.ToHtml(markdownContent, pipeline);

            var model = new ProjectsViewModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return View(model);
        }

        public async Task<IActionResult> VGAController()
        {
            var projectInfo = homePageContext.Applications
               .FirstOrDefault(x => x.Name == "VGA Controller");

            if (projectInfo == null)
                throw new Exception("Project info not found.");

            string markdownContent = string.Empty;

            if (!string.IsNullOrEmpty(projectInfo.GitHubReadMeLink))
            {
                markdownContent = await client.GetStringAsync(projectInfo.GitHubReadMeLink);
                markdownContent = markdownContent.Replace("images/", projectInfo.GitHubReadMeImagesLink);
            }
            else
            {
                throw new Exception("No README URL found.");
            }

            var pipeline = new MarkdownPipelineBuilder()
                .UseAdvancedExtensions()
                .Build();

            var mkd = Markdown.ToHtml(markdownContent, pipeline);

            var model = new ProjectsViewModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return View(model);
        }

        public async Task<IActionResult> CDN()
        {
            var projectInfo = homePageContext.Applications
                .FirstOrDefault(x => x.Name == "Content Delivery Network (CDN)");

            if (projectInfo == null)
                throw new Exception("Project info not found.");

            string markdownContent = string.Empty;

            if (!string.IsNullOrEmpty(projectInfo.GitHubReadMeLink))
            {
                markdownContent = await client.GetStringAsync(projectInfo.GitHubReadMeLink);
                markdownContent = markdownContent.Replace("images/", projectInfo.GitHubReadMeImagesLink);
            }
            else
            {
                throw new Exception("No README URL found.");
            }

            var pipeline = new MarkdownPipelineBuilder()
                .UseAdvancedExtensions()
                .Build();

            var mkd = Markdown.ToHtml(markdownContent, pipeline);

            var model = new ProjectsViewModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return View(model);
        }

        public async Task<IActionResult> MRIBrainTumorDetection()
        {
            var projectInfo = homePageContext.Applications
                .FirstOrDefault(x => x.Name == "MRI Brain Tumor Detection");

            if (projectInfo == null)
                throw new Exception("Project info not found.");

            string markdownContent = string.Empty;

            if (!string.IsNullOrEmpty(projectInfo.GitHubReadMeLink))
            {
                markdownContent = await client.GetStringAsync(projectInfo.GitHubReadMeLink);
                markdownContent = markdownContent.Replace("images/", projectInfo.GitHubReadMeImagesLink);
            }
            else
            {
                throw new Exception("No README URL found.");
            }

            var pipeline = new MarkdownPipelineBuilder()
                .UseAdvancedExtensions()
                .Build();

            var mkd = Markdown.ToHtml(markdownContent, pipeline);

            var model = new ProjectsViewModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return View(model);
        }
        
        public async Task<IActionResult> LanCacheUI()
        {
            var projectInfo = homePageContext.Applications
                .FirstOrDefault(x => x.Name == "Nine LanCache UI");

            if (projectInfo == null)
                throw new Exception("Project info not found.");

            string markdownContent = string.Empty;

            if (!string.IsNullOrEmpty(projectInfo.GitHubReadMeLink))
            {
                markdownContent = await client.GetStringAsync(projectInfo.GitHubReadMeLink);
                markdownContent = markdownContent.Replace("images/", projectInfo.GitHubReadMeImagesLink);
            }
            else
            {
                throw new Exception("No README URL found.");
            }

            // Build pipeline with GitHub-style extensions including tables
            var pipeline = new MarkdownPipelineBuilder()
                .UseAdvancedExtensions() // includes tables, footnotes, task lists, etc.
                .Build();

            var mkd = Markdown.ToHtml(markdownContent, pipeline);

            var model = new ProjectsViewModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return View(model);
        }

    }
}
