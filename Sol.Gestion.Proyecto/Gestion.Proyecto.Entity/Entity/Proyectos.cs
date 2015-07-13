using Gestion.Proyecto.Common;
using Gestion.Proyecto.Resource;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.Entity.Entity
{
    public class Proyectos
    {
        public int IdProyecto { get; set; }

        [Display(Name = "Codigo", ResourceType = typeof(DisplayLabel))]
        [Required(ErrorMessageResourceType = typeof(Validation), ErrorMessageResourceName = "CampoRequeridoCustom")]  
        public string Codigo{ get; set; }

        [Display(Name = "Descripcion", ResourceType = typeof(DisplayLabel))]
        public string Descripcion { get; set; }

        [Display(Name = "Estado", ResourceType = typeof(DisplayLabel))]
        public bool Estado { get; set; }

        [Display(Name = "NombreEstacion", ResourceType = typeof(DisplayLabel))]
        public string NombreEstacion { get; set; }

        [Display(Name = "TipoEquipo", ResourceType = typeof(DisplayLabel))]
        public string TipoEquipo { get; set; }

        [Display(Name = "NombreEquipo", ResourceType = typeof(DisplayLabel))]
        public string NombreEquipo { get; set; }

        [Display(Name = "ID", ResourceType = typeof(DisplayLabel))]
        public string ID { get; set; }

        [Display(Name = "IP", ResourceType = typeof(DisplayLabel))]
        public string IP { get; set; }

        public enum Proc
        {
            [StringValue("[dbo].[Usp_ProyectoPaginacion]")]
            Paginacion,

            [StringValue("[dbo].[Usp_Ins_Proyecto]")]
            Insertar
        }
    }
}
