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

        [Display(Name = "BoardType", ResourceType = typeof(DisplayLabel))]
        [Required(ErrorMessageResourceType = typeof(Validation), ErrorMessageResourceName = "CampoRequerido")]  
        public string BoardType { get; set; }

        [Display(Name = "BiosVersion", ResourceType = typeof(DisplayLabel))]
        [Required(ErrorMessageResourceType = typeof(Validation), ErrorMessageResourceName = "CampoRequerido")]  
        public string BiosVersion { get; set; }

        [Display(Name = "SoftVersion", ResourceType = typeof(DisplayLabel))]
        [Required(ErrorMessageResourceType = typeof(Validation), ErrorMessageResourceName = "CampoRequerido")]  
        public string SoftVersion { get; set; }

        [Display(Name = "LogicVersion", ResourceType = typeof(DisplayLabel))]
        [Required(ErrorMessageResourceType = typeof(Validation), ErrorMessageResourceName = "CampoRequerido")]  
        public string LogicVersion{ get; set; }

        [Display(Name = "PCBVersion", ResourceType = typeof(DisplayLabel))]
        [Required(ErrorMessageResourceType = typeof(Validation), ErrorMessageResourceName = "CampoRequerido")]  
        public string PCBVersion { get; set; }

        [Display(Name = "SerialNumber", ResourceType = typeof(DisplayLabel))]
        [Required(ErrorMessageResourceType = typeof(Validation), ErrorMessageResourceName = "CampoRequerido")]  
        public string SerialNumber { get; set; }

        public Proyectos Proyectos { get; set; }

        public enum Proc
        {
            [StringValue("[dbo].[Usp_Ins_DetalleTarjetaLugar]")]
            Insertar,

            [StringValue("[dbo].[Usp_DetalleTarjetaLugarPaginacion]")]
            Paginacion
        }
    }
}
