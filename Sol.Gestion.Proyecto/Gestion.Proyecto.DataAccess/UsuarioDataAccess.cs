using Gestion.Proyecto.DataAccess;
using Gestion.Proyecto.Common;
using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.Resource;
using Microsoft.Practices.EnterpriseLibrary.Data;
using Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.DataAccess
{
    public class UsuarioDataAccess
    {
        private static DatabaseProviderFactory oDatabaseProviderFactory = new DatabaseProviderFactory();
        private Database oDatabase = oDatabaseProviderFactory.Create(Global.Conexion);

        public Usuario AutenticarUsuario(Usuario Usuario)
        {
            Usuario oUsuario = new Usuario();
            DbCommand oDbCommand = oDatabase.GetStoredProcCommand(Usuario.Proc.ValidarUsuario.Str());
            oDatabase.AddInParameter(oDbCommand, "@UserName", DbType.String, Usuario.UserName);
            oDatabase.AddInParameter(oDbCommand, "@Password", DbType.String, Usuario.Password);
      
            using (IDataReader oIDataReader = oDatabase.ExecuteReader(oDbCommand))
            {
                int i1 = oIDataReader.GetOrdinal("IdUsuario");
                int i2 = oIDataReader.GetOrdinal("UserName");
                int i3 = oIDataReader.GetOrdinal("Nombres");
                int i4 = oIDataReader.GetOrdinal("Apellidos");
                int i5 = oIDataReader.GetOrdinal("IdTipoDocEmp");
                int i6 = oIDataReader.GetOrdinal("NroDoc");
                int i7 = oIDataReader.GetOrdinal("Direccion");
                int i8 = oIDataReader.GetOrdinal("IdCargo");
                int i9 = oIDataReader.GetOrdinal("DescripCargo");

                while (oIDataReader.Read())
                {
                    oUsuario = new Usuario();
                    oUsuario.IdUsuario = DataUtil.DbValueToDefault<Int32>(oIDataReader[i1]);
                    oUsuario.UserName = DataUtil.DbValueToDefault<String>(oIDataReader[i2]);
                    oUsuario.Empleado = new Empleado();
                    oUsuario.Empleado.Nombres = DataUtil.DbValueToDefault<String>(oIDataReader[i3]);
                    oUsuario.Empleado.Apellidos = DataUtil.DbValueToDefault<String>(oIDataReader[i4]);
                    oUsuario.Empleado.IdTipoDocumento = DataUtil.DbValueToDefault<Int32>(oIDataReader[i5]);
                    oUsuario.Empleado.NroDocumento = DataUtil.DbValueToDefault<String>(oIDataReader[i6]);
                    oUsuario.Empleado.Direccion = DataUtil.DbValueToDefault<String>(oIDataReader[i7]);
                    oUsuario.Empleado.IdCargo = DataUtil.DbValueToDefault<Int32>(oIDataReader[i8]);
                    oUsuario.Empleado.Cargo = new Cargo();
                    oUsuario.Empleado.Cargo.IdCargo = DataUtil.DbValueToDefault<Int32>(oIDataReader[i8]);
                    oUsuario.Empleado.Cargo.Descripcion = DataUtil.DbValueToDefault<String>(oIDataReader[i9]);
                }
            }
            return oUsuario;
        }

        public int RegistrarUsuario(Usuario oUsuario)
        {
            return  Convert.ToInt32(oDatabase.ExecuteScalar(Usuario.Proc.Insertar.Str(),
                                                        oUsuario.UserName,
                                                        oUsuario.Password));
        }
    }
}
