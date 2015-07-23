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
            var model = new ProyectoDetalleViewModel();
            if(Codigo == ConfigurationManager.AppSettings["DetalleTarjetaLugar"])
            {
                return PartialView(ProyectoDetalleViewModel.Partial.DetalleTarjetaLugar.Str(), model);
            }

            return null;
        }
    }
}