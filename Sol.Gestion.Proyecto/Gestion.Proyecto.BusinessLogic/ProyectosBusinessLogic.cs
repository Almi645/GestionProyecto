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
        public ProyectosList GetProyectosOPaginacion(Proyectos oProyectos, Paginacion oPaginacion, out int RowCount)
        {
            return new ProyectosDataAccess().GetProyectosOPaginacion(oProyectos, oPaginacion, out RowCount);
        }

        public int Registrar(Proyectos oProyectos)
        {
            return new ProyectosDataAccess().Registrar(oProyectos);
        }
    }
}
