using Gestion.Proyecto.BusinessLogic;
using Gestion.Proyecto.Common;
using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Other;
using Gestion.Proyecto.Resource;
using Gestion.Proyecto.Security;
using Gestion.Proyecto.Security.Filters;
using Gestion.Proyecto.Web.Controllers.Base;
using Gestion.Proyecto.Web.Models.Bandeja;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Gestion.Proyecto.Web.Controllers
{
    [OutputCacheAttribute(VaryByParam = "*", Duration = 0, NoStore = true)]
    public class BandejaController : BaseController
    {
        [RequiresAuthenticationAttribute]
        public ActionResult Nuevo()
        {
            return View();
        }

        [RequiresAuthenticationAttribute]
        public ActionResult Consulta()
        {
            var model = new BandejaViewModel();
            model.Proyectos = new Proyectos();
            model.PersonaList = new ProyectosList();
            model.Paginacion = UtilGrid.MyPaginationDefault<Paginacion>();
            return View(model);
        }

        [RequiresAuthenticationAjaxAttribute]
        public ActionResult ConsultarPartial(BandejaViewModel model, int page = 1, string sortDir = "", string sort = "")
        {
            int IdEmpleado = ProfileUserUtil.GetUserSession().Empleado.IdEmpleado;

            int RowCount = (int)Decimal.Zero;
            model.Paginacion = UtilGrid.MyPaginationDefault<Paginacion>(sortDir, sort, page);
            model.PersonaList = new ProyectosBusinessLogic().GetBandejaPaginacion(model.Proyectos,IdEmpleado, model.Paginacion, out RowCount);
            model.Paginacion.RowCount = RowCount;
            model.Paginacion.FooterDesc = UtilGrid.CountRecords(page, model.Paginacion.RowsPerPage, RowCount);
            return PartialView("_BandejaGridPartialView", model);
        }
    }
}