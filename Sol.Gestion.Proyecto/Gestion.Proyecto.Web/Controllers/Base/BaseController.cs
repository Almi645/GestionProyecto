using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using Gestion.Proyecto.Security.Filters;


namespace Gestion.Proyecto.Web.Controllers.Base
{
    [NoCacheAttribute]
    public class BaseController : Controller
    {
        public RedirectResult RedirectJSEnviarPagina(String ActionDestino, String ControllerDestino)
        {
            return Redirect(@Url.Action(ActionDestino, ControllerDestino));
        }

        public RedirectResult RedirectJSEnviarPagina(String url)
        {
            return Redirect(url);
        }

        protected override RedirectResult Redirect(String Url)
        {
            return new AjaxAwareRedirectResult(Url);
        }

        public class AjaxAwareRedirectResult : RedirectResult
        {
            public AjaxAwareRedirectResult(String Url)
                : base(Url)
            {
            }

            public override void ExecuteResult(ControllerContext oControllerContext)
            {
                if (oControllerContext.RequestContext.HttpContext.Request.IsAjaxRequest())
                {
                    String DestinationUrl = UrlHelper.GenerateContentUrl(Url, oControllerContext.HttpContext);

                    JavaScriptResult oJavaScriptResult = new JavaScriptResult()
                    {
                        Script = "window.location='" + DestinationUrl + "';"
                    };
                    oJavaScriptResult.ExecuteResult(oControllerContext);
                }
                else
                    base.ExecuteResult(oControllerContext);
            }
        }
    }
}
