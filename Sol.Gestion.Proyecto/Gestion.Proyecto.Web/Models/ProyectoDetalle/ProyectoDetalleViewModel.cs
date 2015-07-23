using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Entity;

namespace Gestion.Proyecto.Web.Models.ProyectoDetalle
{
    public class ProyectoDetalleViewModel
    {
        public MenuDetalleList MenuDetalleList { get; set; }
        public Proyectos Proyectos { get; set; }
    }
}