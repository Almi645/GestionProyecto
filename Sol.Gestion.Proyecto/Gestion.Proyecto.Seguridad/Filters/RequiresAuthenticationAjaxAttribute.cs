using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Gestion.Proyecto.Seguridad.Filters
{
    public class RequiresAuthenticationAjaxAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext.HttpContext.Request.IsAjaxRequest())
            {
                if ((!filterContext.HttpContext.Request.IsAuthenticated) || (HttpContext.Current.Session["UsuarioGP"] == null))
                {
                    JavaScriptResult result = new JavaScriptResult()
                    {
                        Script = "window.location='" + "/Account/Login" + "';"
                    };
                    filterContext.Result = result;
                }
            }
            else
            {
                if (!filterContext.HttpContext.Request.IsAuthenticated || (HttpContext.Current.Session["UsuarioGP"] == null))
                {

                    filterContext.Result = new RedirectToRouteResult(
                        new RouteValueDictionary(new
                        {
                            controller = "Account",
                            action = "Login"
                        }
                    ));
                }
            }

            base.OnActionExecuting(filterContext);
        }
    }
}
