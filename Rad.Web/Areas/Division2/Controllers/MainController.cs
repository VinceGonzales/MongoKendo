using Newtonsoft.Json;
using Rad.Web.Areas.Division2.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Web.Mvc;

namespace Rad.Web.Areas.Division2.Controllers
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
            List<WeaponVM> viewModel = new List<WeaponVM>();
            string filePath = Server.MapPath("~/App_Data/division-weapons.json");
            using (StreamReader r = new StreamReader(filePath))
            {
                string json = r.ReadToEnd();
                viewModel = JsonConvert.DeserializeObject<List<WeaponVM>>(json);
            }

            return Json(viewModel, JsonRequestBehavior.AllowGet);
        }
    }
}