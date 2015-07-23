using Gestion.Proyecto.DataAccess;
using Gestion.Proyecto.Entity.EntityList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.BusinessLogic
{
    public class MenuDetalleBusinessLogic
    {
        public MenuDetalleList GetAllMenuDetalle()
        {
            try
            {
                return new MenuDetalleDataAccess().GetAllMenuDetalle();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
