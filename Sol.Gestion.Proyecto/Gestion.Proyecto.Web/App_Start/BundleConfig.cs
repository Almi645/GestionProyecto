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

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/3dev/base/jquery.ui.core.css",
                        "~/Content/3dev/base/jquery.ui.resizable.css",
                        "~/Content/3dev/base/jquery.ui.selectable.css",
                        "~/Content/3dev/base/jquery.ui.accordion.css",
                        "~/Content/3dev/base/jquery.ui.autocomplete.css",
                        "~/Content/3dev/base/jquery.ui.button.css",
                        "~/Content/3dev/base/jquery.ui.dialog.css",
                        "~/Content/3dev/base/jquery.ui.slider.css",
                        "~/Content/3dev/base/jquery.ui.tabs.css",
                        "~/Content/3dev/base/jquery.ui.datepicker.css",
                        "~/Content/3dev/base/jquery.ui.progressbar.css",
                        "~/Content/3dev/base/jquery.ui.theme.css",
                         "~/Content/themes/base/jquery.ui.autocomplete.css"));

        }
    }
}
