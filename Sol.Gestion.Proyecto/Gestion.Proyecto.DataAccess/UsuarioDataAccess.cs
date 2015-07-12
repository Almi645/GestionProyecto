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
            DbCommand oDbCommand = oDatabase.GetStoredProcCommand("[dbo].[Usp_ValidarUsuario]");
            oDatabase.AddInParameter(oDbCommand, "@Usuario", DbType.String, Usuario.NombreUsuario);
            oDatabase.AddInParameter(oDbCommand, "@Contrasenia", DbType.String, Usuario.Contrasenia);
      
            using (IDataReader oIDataReader = oDatabase.ExecuteReader(oDbCommand))
            {
                int i1 = oIDataReader.GetOrdinal("IdUsuario");
                int i2 = oIDataReader.GetOrdinal("Usuario");
                int i3 = oIDataReader.GetOrdinal("Contrasenia");

                while (oIDataReader.Read())
                {
                    oUsuario = new Usuario();
                    oUsuario.IdUsuario = DataUtil.DbValueToDefault<Int32>(oIDataReader[i1]);
                    oUsuario.NombreUsuario = DataUtil.DbValueToDefault<String>(oIDataReader[i2]);
                    oUsuario.Contrasenia = DataUtil.DbValueToDefault<String>(oIDataReader[i3]);
                }
            }
            return oUsuario;
        }

        public int RegistrarUsuario(Usuario oUsuario)
        {
            try
            {
                return (int)oDatabase.ExecuteScalar("[dbo].[Usp_Ins_Usuario]",
                                                                    oUsuario.Empleado.IdEmpleado,
                                                                    oUsuario.NombreUsuario,
                                                                    oUsuario.Contrasenia);
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
