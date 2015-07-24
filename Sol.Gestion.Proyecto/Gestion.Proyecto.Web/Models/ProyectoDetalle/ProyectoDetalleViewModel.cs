using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.Common;
using Gestion.Proyecto.Entity.Other;

namespace Gestion.Proyecto.Web.Models.ProyectoDetalle
{
    public class ProyectoDetalleViewModel
    {
        public MenuDetalleList MenuDetalleList { get; set; }

        public Proyectos Proyectos { get; set; }

        public Paginacion Paginacion { get; set; }

        public DetalleTarjetaLugar DetalleTarjetaLugar { get; set; }

        public DetalleTarjetaLugarList DetalleTarjetaLugarList { get; set; }

        public enum Partial
        {
            [StringValue("~/Views/ProyectoDetalle/DetalleTarjetaLugar/Nuevo.cshtml")]
            DetalleTarjetaLugar,

            [StringValue("~/Views/ProyectoDetalle/DetalleTarjetaLugar/_GridPartial.cshtml")]
            DetalleTarjetaLugarGrid
        }
    }
}