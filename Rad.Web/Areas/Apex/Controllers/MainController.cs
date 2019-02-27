using Newtonsoft.Json;
using Rad.Web.Areas.Apex.Models;
using System.Collections.Generic;
using System.IO;
using System.Web.Mvc;

namespace Rad.Web.Areas.Apex.Controllers
{
    public class MainController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [AcceptVerbs(HttpVerbs.Get)]
        public JsonResult GetWeapons()
        {
            List<GunVM> viewModel = new List<GunVM>();
            string filePath = Server.MapPath("~/App_Data/apex-weapons.json");
            using (StreamReader r = new StreamReader(filePath))
            {
                string json = r.ReadToEnd();
                viewModel = JsonConvert.DeserializeObject<List<GunVM>>(json);
            }

            return Json(viewModel, JsonRequestBehavior.AllowGet);
        }
    }
}