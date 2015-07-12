using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Gestion.Proyecto.Seguridad.Filters
{
    [NoCacheAttribute]
    public class RequiresAuthenticationAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            //if (filterContext.HttpContext.Request.IsAjaxRequest())
            //{
            //    if ((!filterContext.HttpContext.Request.IsAuthenticated) || (HttpContext.Current.Session["Usuario"] == null))
            //    {
            //        JavaScriptResult result = new JavaScriptResult()
            //        {
            //            Script = "window.location='" + "/Account/Login" + "';"
            //        };
            //        filterContext.Result = result;
            //    }
            //}
            //else
            //{
            //    if (HttpContext.Current.Session["Usuario"] == null)
            //    {
            //        filterContext.Result = new RedirectToRouteResult(
            //            new RouteValueDictionary(new
            //            {
            //                controller = "Account",
            //                action = "Login"
            //            }
            //        ));
            //    }
            //}

            //base.OnActionExecuting(filterContext);

            if (/*!filterContext.HttpContext.Request.IsAuthenticated*/ HttpContext.Current.Session["UsuarioGP"] == null)
            {
                filterContext.Result = Gestion.Proyecto.Seguridad.Helpers.RedirectResultTo.Redirect(
                    new RouteValueDictionary( new 
                    { 
                        action = "Login",
                        controller = "Account",

                    }), filterContext);
            }

            base.OnActionExecuting(filterContext);
        }
    }
}
