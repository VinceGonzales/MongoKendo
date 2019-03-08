using Newtonsoft.Json;
using Rad.Web.Areas.Fortnite.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Mvc;

namespace Rad.Web.Areas.Fortnite.Controllers
{
    public class MainController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Heroes()
        {
            return View();
        }

        [AcceptVerbs(HttpVerbs.Get)]
        public JsonResult GetSchematics()
        {
            List<SchematicVM> viewModel = new List<SchematicVM>();
            string filePath = Server.MapPath("~/App_Data/updated-schematics.json");
            using (StreamReader r = new StreamReader(filePath))
            {
                string json = r.ReadToEnd();
                viewModel = JsonConvert.DeserializeObject<List<SchematicVM>>(json);
            }
            
            return Json(viewModel.OrderBy(s => s.name), JsonRequestBehavior.AllowGet);
        }

        [AcceptVerbs(HttpVerbs.Get)]
        public JsonResult GetHeroes()
        {
            List<HeroVM> viewModel = new List<HeroVM>();
            string filePath = Server.MapPath("~/App_Data/heroes.json");
            using (StreamReader r = new StreamReader(filePath))
            {
                string json = r.ReadToEnd();
                viewModel = JsonConvert.DeserializeObject<List<HeroVM>>(json);
            }

            return Json(viewModel, JsonRequestBehavior.AllowGet);
        }

        [AcceptVerbs(HttpVerbs.Get)]
        public JsonResult GetSchematicsOld()
        {
            List<SchematicVM> viewModel = new List<SchematicVM>();
            string filePath = Server.MapPath("~/App_Data/schematics.json");
            using (StreamReader r = new StreamReader(filePath))
            {
                string json = r.ReadToEnd();
                viewModel = JsonConvert.DeserializeObject<List<SchematicVM>>(json);
            }
            HydrateOptFields(viewModel);
            return Json(viewModel, JsonRequestBehavior.AllowGet);
        }

        private void HydrateOptFields(List<SchematicVM> vm)
        {
            SchemType schemType;

            foreach (SchematicVM s in vm)
            {
                if (s.description.IndexOf("assault") > 0)
                {
                    schemType = SchemType.Assault;
                }
                else if (s.description.IndexOf("blunt") > 0)
                {
                    schemType = SchemType.Blunt;
                }
                else if (s.description.IndexOf("launcher") > 0)
                {
                    schemType = SchemType.Explosive;
                    s.AmmoType = "Rockets";
                }
                else if (s.description.IndexOf("pistol") > 0)
                {
                    schemType = SchemType.Pistol;
                }
                else if (s.description.IndexOf("shotgun") > 0)
                {
                    schemType = SchemType.Shotgun;
                    s.AmmoType = "Shells 'n' Slugs";
                }
                else if (s.description.IndexOf("sniper") > 0)
                {
                    schemType = SchemType.Sniper;
                }
                else if (s.description.IndexOf("sword") > 0)
                {
                    schemType = SchemType.Sword;
                }
                else if (s.description.IndexOf("axe") > 0)
                {
                    schemType = SchemType.Axe;
                }
                else if (s.description.IndexOf("scythe") > 0)
                {
                    schemType = SchemType.Scythe;
                }
                else if (s.description.IndexOf("spear") > 0)
                {
                    schemType = SchemType.Spear;
                }
                else
                {
                    schemType = (SchemType)System.Enum.Parse(typeof(SchemType), "Trap");
                }
                s.SchematicType = schemType.ToString();

                TraitVM trait = s.stat.FirstOrDefault(x => x.name.Contains("DamageElement"));
                if (trait != null)
                {
                    s.DamageType = trait.name.Replace("DamageElement: ", "");
                }
            }
        }
    }
}