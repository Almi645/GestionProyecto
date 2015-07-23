using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Others;
using Gestion.Proyecto.Resource;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Gestion.Proyecto.Common;
using System.Data.Common;
using System.Data;
using Repository;

namespace Gestion.Proyecto.DataAccess
{
    public class MenuDetalleDataAccess
    {
        private static DatabaseProviderFactory oDatabaseProviderFactory = new DatabaseProviderFactory();
        private Database oDatabase = oDatabaseProviderFactory.Create(Global.Conexion);

        public MenuDetalleList GetAllMenuDetalle()
        {
            MenuDetalleList oLista = new MenuDetalleList();
            DbCommand oDbCommand = oDatabase.GetStoredProcCommand(MenuDetalle.Proc.Select.Str());
            using (IDataReader oIDataReader = oDatabase.ExecuteReader(oDbCommand))
            {
                int i1 = oIDataReader.GetOrdinal("IdMenuDetalle");
                int i2 = oIDataReader.GetOrdinal("Descripcion");
                int i3 = oIDataReader.GetOrdinal("Codigo");
                int i4 = oIDataReader.GetOrdinal("Grupo");
                int i5 = oIDataReader.GetOrdinal("Estado");

                while (oIDataReader.Read())
                {
                    MenuDetalle obj = new MenuDetalle();
                    obj.IdMenuDetalle = DataUtil.DbValueToDefault<Int32>(oIDataReader[i1]);
                    obj.Descripcion = DataUtil.DbValueToDefault<String>(oIDataReader[i2]);
                    obj.Codigo = DataUtil.DbValueToDefault<String>(oIDataReader[i3]);
                    obj.Grupo = DataUtil.DbValueToDefault<Int32>(oIDataReader[i4]);
                    obj.Estado = DataUtil.DbValueToDefault<Boolean>(oIDataReader[i5]);
                    oLista.Add(obj);
                }
            }
            return oLista;
        }
    }
}
