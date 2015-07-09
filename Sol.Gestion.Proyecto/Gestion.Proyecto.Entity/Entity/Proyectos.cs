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
        public string Codigo{ get; set; }
        public string Descripcion { get; set; }
        public string Estado { get; set; }
        public string NombreEstacion { get; set; }
        public string TipoEquipo { get; set; }
        public string ID { get; set; }
        public string IP { get; set; }
    }
}
