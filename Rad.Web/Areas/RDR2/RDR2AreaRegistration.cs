using System.Web.Mvc;

namespace Rad.Web.Areas.RDR2
{
    public class RDR2AreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "RDR2";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "RDR2_default",
                "RDR2/{controller}/{action}/{id}",
                new { controller = "Main", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}