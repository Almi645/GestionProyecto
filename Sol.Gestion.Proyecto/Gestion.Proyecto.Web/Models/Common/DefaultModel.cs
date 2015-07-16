using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Gestion.Proyecto.Web.Models.Common
{
    public static class DefaultModel
    {
        public static EstadoList GetEstado()
        {
            EstadoList oEstadoList = new EstadoList();

            Estado Estado1 = new Estado();
            Estado1.Codigo = "A";
            Estado1.Descripcion = "Activo";

            Estado Estado2 = new Estado();
            Estado2.Codigo = "C";
            Estado2.Descripcion = "Cerrado";

            Estado Estado3 = new Estado();
            Estado3.Codigo = "I";
            Estado3.Descripcion = "Eliminado";

            oEstadoList.Add(Estado1);
            oEstadoList.Add(Estado2);
            oEstadoList.Add(Estado3);

            return oEstadoList;
        }
    }
            

}