using System.Web.Mvc;

namespace Rad.Web.Areas.Apex
{
    public class ApexAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Apex";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Apex_default",
                "Apex/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}