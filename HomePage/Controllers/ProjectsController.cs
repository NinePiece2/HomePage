using HomePage.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Drawing.Printing;

namespace HomePage.Controllers
{
    public class ProjectsController : Controller
    {
        public IActionResult Index(int page = 1, int pageSize = 10)
        {
            HomePageContext homePageContext = new HomePageContext();

            // Get the total number of items
            int totalItems = homePageContext.Applications.Count();

            // Calculate the total number of pages
            int totalPages = (int)Math.Ceiling((double)totalItems / pageSize);

            // Get the paginated data
            List<Application> DataList = homePageContext.Applications
            .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            // Pass the data to the view
            ViewBag.DataList = DataList;
            ViewBag.CurrentPage = page;
            ViewBag.TotalPages = totalPages;
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
    }
}
