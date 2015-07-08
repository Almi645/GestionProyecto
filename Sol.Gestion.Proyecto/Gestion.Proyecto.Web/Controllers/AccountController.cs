using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using System.Web.Routing;
using System.Security.Principal;
using Newtonsoft.Json;
using System.Web.Script.Serialization;
using Gestion.Proyecto.Web.Controllers.Base;
using Gestion.Proyecto.Helpers;
using Gestion.Proyecto.Resource;
using Gestion.Proyecto.Web.Models;

namespace Gestion.Proyecto.Web.Controllers
{
    [Authorize]
    public class AccountController : BaseController
    {
        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            if (ProfileUserUtil.IsAuthenticated())
            {
                try
                {
                    return RedirectToAction("Index", "Home");
                }
                catch (Exception)
                {
                    return View();
                }

            }

            return View();
        }

        [ValidateAntiForgeryToken, AllowAnonymous, HttpPost]
        public ActionResult Login(AccountViewModels model, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                #region MyRegionLogica
                try
                {
                    if (Membership.ValidateUser(model.UserName, model.Password))
                    {
                        #region MyRegion
                        #endregion
                        FormsAuthentication.RedirectFromLoginPage(model.UserName, false);
                        return RedirectJSEnviarPagina(Url.Action("Index", new RouteValueDictionary(new { controller = "Home" })));
                    }
                    else
                        ModelState.AddModelError(string.Empty, Messages.InvalidLogin);
                }
                catch (Exception)
                {
                    ModelState.AddModelError(string.Empty, Messages.InesperadoErrorLogin);
                }
                #endregion
            }
            return View();
        }

        [HttpGet()]
        public ActionResult SignOut()
        {
            HttpCookie myCookie = new HttpCookie("userCookie");
            myCookie.Expires = DateTime.Now.AddDays(-1d);
            Response.Cookies.Add(myCookie);
            FormsAuthentication.SignOut();
            Session.RemoveAll();
            return RedirectToAction("Login", "Account");
        }
    }
}
