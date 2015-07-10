using Gestion.Proyecto.DataAccess;
using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Other;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.BusinessLogic
{
    public class ProyectosBusinessLogic
    {
        public ProyectosList GetProyectosOPaginacion(Proyectos oPersona, Paginacion oPaginacion, out int RowCount)
        {
            return new ProyectosDataAccess().GetProyectosOPaginacion(oPersona, oPaginacion, out RowCount);
        }
    }
}
