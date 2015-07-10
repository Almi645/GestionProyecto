using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Other;

namespace Gestion.Proyecto.Web.Models.Proyecto
{
    public class ProyectoConsultaViewModel
    {
        public Proyectos Proyectos { get; set; }
        public Paginacion Paginacion { get; set; }
        public ProyectosList PersonaList { get; set; }
    }
}