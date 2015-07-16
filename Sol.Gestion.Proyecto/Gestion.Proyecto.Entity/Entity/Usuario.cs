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
        public string UserName { get; set; }
        public string Password { get; set; }

        public enum Proc
        {
            [StringValue("[dbo].[Usp_ValidarUsuario]")]
            ValidarUsuario,

            [StringValue("[dbo].[Usp_Ins_Usuario]")]
            Insertar
        }
    }
}
