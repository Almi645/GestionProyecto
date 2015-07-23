using Gestion.Proyecto.BusinessLogic;
using Gestion.Proyecto.Security.Filters;
using Gestion.Proyecto.Web.Controllers.Base;
using Gestion.Proyecto.Web.Models.ProyectoDetalle;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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
    }
}