using Gestion.Proyecto.BusinessLogic;
using Gestion.Proyecto.Common;
using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Other;
using Gestion.Proyecto.Resource;
using Gestion.Proyecto.Seguridad.Filters;
using Gestion.Proyecto.Web.Controllers.Base;
using Gestion.Proyecto.Web.Helpers.ModelObejctValidate;
using Gestion.Proyecto.Web.Models.Common;
using Gestion.Proyecto.Web.Models.Proyecto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Gestion.Proyecto.Web.Controllers
{
    public class ProyectoController : BaseController
    {
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

        public ActionResult ConsultarPartial(
            ProyectoConsultaViewModel model,
            int page = 1,
            string sortDir = "",
            string sort = "")
        {
            int RowCount = (int)Decimal.Zero;
            model.Paginacion = UtilGrid.MyPaginationDefault<Paginacion>(sortDir, sort, page);
            model.PersonaList = new ProyectosBusinessLogic().GetProyectosPaginacion(model.Proyectos, model.Paginacion, out RowCount);
            model.Paginacion.RowCount = RowCount;
            model.Paginacion.FooterDesc = UtilGrid.CountRecords(page, model.Paginacion.RowsPerPage, RowCount);
            return PartialView("_ProyectoGridPartialView", model);
        }

        public ActionResult Nuevo()
        {
            var model = new ProyectoViewModel();
            model.EmpleadoList = new EmpleadoBusinessLogic().GetAllEmpleado();
            return View(model);
        }

        [HttpPost]
        public ActionResult Registrar(ProyectoViewModel model)
        {
            if (ModelState.IsValid)
            {
                int result = new ProyectosBusinessLogic().Registrar(model.Proyectos);
                switch (result)
	            {
                    case 0:
                        return Content(MessageCode.ToastrRegisterError);
                    case -1:
                        return Content(MessageCode.ToastrCodigoProyectoExist);
		            default:
                        return Content(String.Format(MessageCode.BootBoxSuccess, "CancelarProyecto"));
	            }
            }            
            else
            {
                return Content(String.Format(MessageCode.FormValidate, "FrmProyecto") + MessageCode.FunctionMultiselectValidate);
            }
        }

        public ActionResult Editar(int Id)
        {   
            var model = new ProyectoViewModel();
            model.Proyectos = new ProyectosBusinessLogic().GetbyId(Id);
            model.EstadoList = DefaultModel.GetEstado();
            model.EmpleadoList = new EmpleadoBusinessLogic().GetAllEmpleado();

            if (model.Proyectos.IdProyecto == 0)
                return RedirectToAction("Consultar");
            else
                return View(model);
        }

        [HttpPost]
        public ActionResult Editar(ProyectoViewModel model)
        {

            return null;
        }
    }
}