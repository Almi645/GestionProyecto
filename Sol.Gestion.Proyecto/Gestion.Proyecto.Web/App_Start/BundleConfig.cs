using System.Web;
using System.Web.Optimization;

namespace Gestion.Proyecto.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                                    "~/Scripts/jquery-{version}.js",
                                    "~/Scripts/UserControl.Helper.js",
                                    "~/Scripts/jquery.autocomplete.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                                "~/Content/3dev/bootstrap.css",
                                "~/Content/3dev/bootstrap-responsive.css",
                                "~/Content/3dev/font-awesome.css"));

          

        }
    }
}
