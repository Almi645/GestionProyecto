using Gestion.Proyecto.BusinessLogic;
using Gestion.Proyecto.Common;
using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Other;
using Gestion.Proyecto.Resource;
using Gestion.Proyecto.Web.Models.Proyecto;
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
            var model = new ProyectoConsultaViewModel();
            model.Proyectos = new Proyectos();
            model.PersonaList = new ProyectosList();
            model.Paginacion = UtilGrid.MyPaginationDefault<Paginacion>(string.Empty, string.Empty, Constants.RowsPerPage.Int());
            return View(model);
        }

        [HttpGet]
        public ActionResult ConsultarPartial(
            ProyectoConsultaViewModel model,
            int page = 1,
            string sortDir = "",
            string sortType = "")
        {
            int RowCount = (int)Decimal.Zero;
            model.Paginacion = UtilGrid.MyPaginationDefault<Paginacion>(sortDir, sortType, page);
            model.PersonaList = new ProyectosBusinessLogic().GetProyectosOPaginacion(model.Proyectos, model.Paginacion, out RowCount);
            model.Paginacion.RowCount = RowCount;
            model.Paginacion.FooterDesc = UtilGrid.CountRecords(page, model.Paginacion.RowsPerPage, RowCount);
            return PartialView("_ProyectoGridPartialView", model);
        }

        public ActionResult Nuevo()
        {
            return View();
        }
    }
}