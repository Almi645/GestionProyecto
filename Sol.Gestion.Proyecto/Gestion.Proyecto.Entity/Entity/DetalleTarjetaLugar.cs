using Gestion.Proyecto.Resource;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.Entity.Entity
{
    public class DetalleTarjetaLugar
    {
        public int IdDetalleTarjetaLugar { get; set; }

        public int IdProyecto { get; set; }

        [Display(Name = "SubRackId", ResourceType = typeof(DisplayLabel))]
        [Required(ErrorMessageResourceType = typeof(Validation), ErrorMessageResourceName = "CampoRequerido")]  
        public string SubRackId { get; set; }

        [Display(Name = "Slot", ResourceType = typeof(DisplayLabel))]
        [Required(ErrorMessageResourceType = typeof(Validation), ErrorMessageResourceName = "CampoRequerido")]  
        public string Slot { get; set; }

        public string BoardType { get; set; }

        public string BiosVersion { get; set; }

        public string SoftVersion { get; set; }

        public string LogicVersion{ get; set; }

        public string PCBVersion { get; set; }

        public string SerialNumber { get; set; }

        public Proyectos Proyectos { get; set; }
    }
}
