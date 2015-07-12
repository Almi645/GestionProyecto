using Gestion.Proyecto.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.Entity.Entity
{
    public class Usuario
    {
        public Int32 IdUsuario { get; set; }
        public Empleado Empleado { get; set; }
        public string NombreUsuario { get; set; }
        public string Contrasenia { get; set; }

        public enum Proc
        {
            [StringValue("[dbo].[Usp_ValidarUsuario]")]
            ValidarUsuario
        }
    }
}
