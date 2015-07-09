using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Gestion.Proyecto.Web.Controllers
{
    public class ProyectoController : Controller
    {
        // GET: Proyecto
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Consultar()
        {
            return View();
        }
    }
}