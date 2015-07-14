using Gestion.Proyecto.DataAccess;
using Gestion.Proyecto.Entity.EntityList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.BusinessLogic
{
    public class EmpleadoBusinessLogic
    {
        public EmpleadoList GetAllEmpleado()
        {
            try
            {
                return new EmpleadoDataAccess().GetAllEmpleado();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
