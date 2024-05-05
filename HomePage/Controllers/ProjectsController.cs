using HomePage.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Drawing.Printing;

namespace HomePage.Controllers
{
    public class ProjectsController : Controller
    {
        public IActionResult Index()
        {
            HomePageContext homePageContext = new HomePageContext();

            // Get the data
            List<Application> DataList = homePageContext.Applications.ToList();

            // Pass the data to the view
            ViewBag.DataList = DataList;
            return View();
        }

        public IActionResult HomeServer()
        {
            return View();
        }
        
        public IActionResult FaceGen()
        {
            return View();
        }
        
        public IActionResult SocialNetwork()
        {
            return View();
        }
    }
}
