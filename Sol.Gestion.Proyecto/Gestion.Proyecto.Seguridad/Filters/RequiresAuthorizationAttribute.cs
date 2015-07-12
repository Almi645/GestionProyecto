
using Gestion.Proyecto.Seguridad.Helpers;
using MvcSiteMapProvider;
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
    public class RequiresAuthorizationAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            Boolean isAccessibleToUser = false;

            if (SiteMaps.Current.CurrentNode != null)
            {
                isAccessibleToUser = SiteMaps.Current.CurrentNode.IsAccessibleToUser();
            }
            if (!isAccessibleToUser)
            {
                filterContext.Result = RedirectResultTo.Redirect(
                    new RouteValueDictionary(new
                    {
                        controller = "Account",
                        action = "Login"
                    }

                ), filterContext);
            }

            base.OnActionExecuting(filterContext);
        }
    }
}
