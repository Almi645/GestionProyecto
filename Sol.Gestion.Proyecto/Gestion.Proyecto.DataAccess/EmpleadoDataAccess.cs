using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Resource;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Gestion.Proyecto.Common;
using Repository;

namespace Gestion.Proyecto.DataAccess
{
    public class EmpleadoDataAccess
    {
        private static DatabaseProviderFactory oDatabaseProviderFactory = new DatabaseProviderFactory();
        private Database oDatabase = oDatabaseProviderFactory.Create(Global.Conexion);

        public EmpleadoList GetAllEmpleado()
        {
            EmpleadoList oLista = new EmpleadoList();
            using (IDataReader oIDataReader = oDatabase.ExecuteReader(Empleado.Proc.ListarEmpleado.Str()))
            {
                int i1 = oIDataReader.GetOrdinal("IdEmpleado");
                int i2 = oIDataReader.GetOrdinal("Nombres");
                int i3 = oIDataReader.GetOrdinal("Apellidos");
                int i4 = oIDataReader.GetOrdinal("IdTipoDocEmp");
                int i5 = oIDataReader.GetOrdinal("NroDoc");
                int i6 = oIDataReader.GetOrdinal("Dirección");
                int i7 = oIDataReader.GetOrdinal("IdCargo");
                int i8 = oIDataReader.GetOrdinal("Estado");
                while (oIDataReader.Read())
                {
                    Empleado obj = new Empleado();
                    obj.IdEmpleado = DataUtil.DbValueToDefault<Int32>(oIDataReader[i1]);
                    obj.Nombres = DataUtil.DbValueToDefault<String>(oIDataReader[i2]);
                    obj.Apellidos = DataUtil.DbValueToDefault<String>(oIDataReader[i3]);
                    obj.IdTipoDocumento = DataUtil.DbValueToDefault<Int32>(oIDataReader[i4]);
                    obj.NroDocumento = DataUtil.DbValueToDefault<String>(oIDataReader[i5]);
                    obj.Direccion = DataUtil.DbValueToDefault<String>(oIDataReader[i6]);
                    obj.IdCargo = DataUtil.DbValueToDefault<Int32>(oIDataReader[i7]);
                    obj.Estado = DataUtil.DbValueToDefault<String>(oIDataReader[i8]);
                    oLista.Add(obj);
                }
            }
            return oLista;
        }
    }
}
