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
            if (HttpContext.Current.Session["UsuarioGP"] == null)
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
