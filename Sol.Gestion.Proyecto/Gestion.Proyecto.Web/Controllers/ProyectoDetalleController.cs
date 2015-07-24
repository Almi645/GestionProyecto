using Gestion.Proyecto.BusinessLogic;
using Gestion.Proyecto.Security.Filters;
using Gestion.Proyecto.Web.Controllers.Base;
using Gestion.Proyecto.Web.Models.ProyectoDetalle;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Gestion.Proyecto.Common;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Other;
using Gestion.Proyecto.Entity.Entity;

namespace Gestion.Proyecto.Web.Controllers
{
    public class ProyectoDetalleController : BaseController
    {

        [RequiresAuthenticationAttribute]
        public ActionResult Gestionar(int Id)
        {
            var model = new ProyectoDetalleViewModel();
            model.MenuDetalleList = new MenuDetalleBusinessLogic().GetAllMenuDetalle();
            model.Proyectos = new ProyectosBusinessLogic().GetbyId(Id);
            return View(model);
        }

        public ActionResult Render(string Codigo)
        {
            string codigo = Codigo.Split('|')[0];
            int idProyecto = Codigo.Split('|')[1].Int();

            var model = new ProyectoDetalleViewModel();
            model.Paginacion = UtilGrid.MyPaginationDefault<Paginacion>();
            model.Proyectos = new ProyectosBusinessLogic().GetbyId(idProyecto);
            model.Proyectos = new Proyectos();
            model.Proyectos.IdProyecto = idProyecto;

            if (codigo == ConfigurationManager.AppSettings["DetalleTarjetaLugar"])
            {
                return ViewDetalleTarjetaLugar(model);
            }

            return null;
        }

        private ActionResult ViewDetalleTarjetaLugar(ProyectoDetalleViewModel model)
        {
            model.DetalleTarjetaLugarList = new DetalleTarjetaLugarList();
            return PartialView(ProyectoDetalleViewModel.Partial.DetalleTarjetaLugar.Str(), model);
        }
    }
}