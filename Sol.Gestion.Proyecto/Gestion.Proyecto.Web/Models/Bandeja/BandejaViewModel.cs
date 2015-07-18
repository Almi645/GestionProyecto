using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Other;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Gestion.Proyecto.Web.Models.Bandeja
{
    public class BandejaViewModel
    {
        public Proyectos Proyectos { get; set; }
        public Paginacion Paginacion { get; set; }
        public ProyectosList PersonaList { get; set; }
    }
}