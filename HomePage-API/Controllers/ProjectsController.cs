using HomePage_API.Models;
using HomePage_API.Data;
using Markdig;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.Drawing.Printing;
using System.Text.RegularExpressions;

namespace HomePage_API.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ProjectsController : ControllerBase
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

        [HttpGet]
        public async Task<IActionResult> TableData()
        {
            // Get the data
            List<Application> DataList = homePageContext.Applications.ToList();

            return Ok(DataList);
        }

        [HttpGet]
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

            var model = new ProjectsModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return Ok(model);
        }

        [HttpGet]
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

            var model = new ProjectsModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return Ok(model);
        }

        [HttpGet]
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

            var model = new ProjectsModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return Ok(model);
        }

        [HttpGet]
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

            var model = new ProjectsModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return Ok(model);
        }

        [HttpGet]
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

            var model = new ProjectsModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return Ok(model);
        }

        [HttpGet]
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

            var model = new ProjectsModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return Ok(model);
        }

        [HttpGet]
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

            var model = new ProjectsModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return Ok(model);
        }

        [HttpGet]
        public async Task<IActionResult> SmartTrafficControlSystem()
        {
            var projectInfo = homePageContext.Applications
                .FirstOrDefault(x => x.Name == "Smart Traffic Control System");

            if (projectInfo == null)
                throw new Exception("Project info not found.");

            string markdownContent = string.Empty;

            string videoHTML = "<video src=\"https://github.com/NinePiece2/Traffic-Control-System/raw/refs/heads/master/images/Dual_Traffic_Light_Variant_2_Assembly_Render_v3_Animation_2.mp4\" autoplay muted loop playsinline width=\"800\"></video>";

            if (!string.IsNullOrEmpty(projectInfo.GitHubReadMeLink))
            {
                markdownContent = await client.GetStringAsync(projectInfo.GitHubReadMeLink);
                markdownContent = markdownContent.Replace("images/", projectInfo.GitHubReadMeImagesLink);

                var startIndex = markdownContent.IndexOf("Click to download the video:");
                var snippet = markdownContent.Substring(startIndex, 476); // 476 chars from that point

                markdownContent = markdownContent.Replace(snippet, videoHTML);
            }

            else
            {
                throw new Exception("No README URL found.");
            }

            var pipeline = new MarkdownPipelineBuilder()
                .UseAdvancedExtensions()
                .Build();

            var mkd = Markdown.ToHtml(markdownContent, pipeline);

            var model = new ProjectsModel
            {
                ProjectName = projectInfo.Name,
                ProjectApplicationLink = projectInfo.ApplicationLink,
                ProjectGithubLink = projectInfo.GitHubLink,
                ProjectReadmeContent = mkd
            };

            return Ok(model);
        }

    }
}
