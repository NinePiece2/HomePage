using Microsoft.AspNetCore.Mvc;

namespace HomePage.Controllers
{
    public class ProjectsController : Controller
    {
        public IActionResult Index()
        {
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
