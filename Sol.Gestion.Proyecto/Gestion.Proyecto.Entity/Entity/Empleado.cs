using Gestion.Proyecto.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.Entity.Entity
{
    public class Empleado
    {
        public Int32 IdEmpleado { get; set; }

        public string Nombres { get; set; }

        public string Apellidos { get; set; }

        public int IdTipoDocumento { get; set; }

        public string NroDocumento { get; set; }

        public string Direccion { get; set; }

        public int IdCargo { get; set; }

        public string Estado { get; set; }

        public Cargo Cargo { get; set; }

        public enum Proc
        {
            [StringValue("[dbo].[Usp_ListarEmpleado]")]
            ListarEmpleado
        }
    }
}
