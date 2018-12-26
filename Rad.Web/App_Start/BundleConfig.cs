using System.Web.Optimization;

namespace Rad.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/kendoui2018").Include(
                      "~/Scripts/kendo/2018.2.620/kendo.all.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/css/kendoui2018").Include(
                      "~/Content/kendo/2018.2.620/kendo.common.min.css",
                      "~/Content/kendo/2018.2.620/kendo.bootstrap.min.css",
                      "~/Content/kendo/2018.2.620/kendo.blueopal.min.css",
                      "~/Content/kendo/2018.2.620/kendo.common-bootstrap.min.css"));
        }
    }
}