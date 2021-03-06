﻿using System;
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
using Gestion.Proyecto.Security;
using Gestion.Proyecto.Resource;
using Gestion.Proyecto.Web.Models;

namespace Gestion.Proyecto.Web.Controllers
{
    //[Authorize]
    //[Authorize(Roles = "Administrators")]
    //[Authorize(Users = "Alice,Bob")]
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
                try
                {
                    if (Membership.ValidateUser(model.UserName, model.Password))
                    {
                        FormsAuthentication.RedirectFromLoginPage(model.UserName, false);
                        return RedirectJSEnviarPagina(Url.Action("Consultar", new RouteValueDictionary(new { controller = "Proyecto" })));
                    }
                    else
                        ModelState.AddModelError(string.Empty, Messages.InvalidLogin);
                }
                catch (Exception)
                {
                    ModelState.AddModelError(string.Empty, Messages.InesperadoErrorLogin);
                }
            }

            return View();
        }

        [HttpGet()]
        public ActionResult SignOut()
        {
            FormsAuthentication.SignOut();
            Session.RemoveAll();
            return RedirectToAction("Login");
        }
    }
}
