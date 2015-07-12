using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Web.Routing;

namespace Gestion.Proyecto.Seguridad.Helpers
{
    public class RedirectResultTo
    {
        public static ActionResult Redirect(RouteValueDictionary route, ActionExecutingContext context)
        {
            ActionResult result;

            if (context.HttpContext.Request.IsAjaxRequest())
            {
                UrlHelper url = new UrlHelper(context.RequestContext);

                result = new JavaScriptResult()
                {
                    Script = "window.location = '" + url.Action(null, route) + "';"
                };
            }
            else
            {
                result = new RedirectToRouteResult(route);
            }

            return result;
        }
    }
}
