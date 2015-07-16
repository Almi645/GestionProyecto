using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Web.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Gestion.Proyecto.Web.Models.Proyecto
{
    public class ProyectoViewModel
    {
        public Proyectos Proyectos { get; set; }

        public EmpleadoList EmpleadoList { get; set; }

        public EstadoList EstadoList { get; set; }

    }
}