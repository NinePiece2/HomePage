using Microsoft.AspNetCore.Mvc;

namespace HomePage.Controllers
{
    public class BaseController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
