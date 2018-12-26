using Newtonsoft.Json;
using Rad.Web.Areas.Fortnite.Models;
using System.Collections.Generic;
using System.IO;
using System.Web.Mvc;

namespace Rad.Web.Areas.Fortnite.Controllers
{
    public class MainController : Controller
    {
        public ActionResult Index()
        {
            List<SchematicVM> viewModel = null;
            string filePath = Server.MapPath("~/App_Data/schematics.json");
            using (StreamReader r = new StreamReader(filePath))
            {
                string json = r.ReadToEnd();
                viewModel = JsonConvert.DeserializeObject<List<SchematicVM>>(json);
            }
            return View(viewModel);
        }
    }
}