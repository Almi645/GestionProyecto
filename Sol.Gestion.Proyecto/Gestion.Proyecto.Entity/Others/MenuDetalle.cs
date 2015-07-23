using Gestion.Proyecto.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.Entity.Others
{
    public class MenuDetalle
    {
        public int IdMenuDetalle { get; set; }
        public string Descripcion { get; set; }
        public string Codigo { get; set; }
        public int Grupo { get; set; }
        public bool Estado { get; set; }

        public enum Proc
        {
            [StringValue("[dbo].[Usp_Sel_MenuDetalle]")]
            Select,
        }
    }
}
