using Gestion.Proyecto.DataAccess;
using Gestion.Proyecto.Entity.Other;
using Gestion.Proyecto.Resource;
using Microsoft.Practices.EnterpriseLibrary.Data;
using Repository;
using Sodimac.ECommerce.Repository.Helper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Gestion.Proyecto.Common;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Entity;

namespace Gestion.Proyecto.DataAccess
{
    public class ProyectosDataAccess
    {
        private static DatabaseProviderFactory oDatabaseProviderFactory = new DatabaseProviderFactory();
        private Database oDatabase = oDatabaseProviderFactory.Create(Global.Conexion);

        public ProyectosList GetProyectosOPaginacion(Proyectos oPersona, Paginacion oPaginacion, out int RowCount)
        {
            ProyectosList olista = new ProyectosList();
            DbCommand oDbCommand = oDatabase.GetStoredProcCommand(Proyectos.Proc.Paginacion.Str());
            oDatabase.AddInParameter(oDbCommand, "@Codigo", DbType.String, oPersona.Codigo);
            oDatabase = Pagination.DefaultParams(oDatabase, oDbCommand, oPaginacion);

            using (IDataReader oIDataReader = oDatabase.ExecuteReader(oDbCommand))
            {
                Proyectos obj = new Proyectos();
                int i1 = oIDataReader.GetOrdinal("CodProyecto");
                int i2 = oIDataReader.GetOrdinal("DescripProyecto");
                int i3 = oIDataReader.GetOrdinal("NombreEstacion");
                int i4 = oIDataReader.GetOrdinal("TipoEquipo");
                int i5 = oIDataReader.GetOrdinal("NombreEquipo");
                while (oIDataReader.Read())
                {
                    obj = new Proyectos();
                    obj.Codigo = DataUtil.DbValueToDefault<String>(oIDataReader[i1]);
                    obj.Descripcion = DataUtil.DbValueToDefault<String>(oIDataReader[i2]);
                    obj.NombreEstacion = DataUtil.DbValueToDefault<String>(oIDataReader[i3]);
                    obj.TipoEquipo = DataUtil.DbValueToDefault<String>(oIDataReader[i4]);
                    obj.NombreEquipo = DataUtil.DbValueToDefault<String>(oIDataReader[i5]);
                    olista.Add(obj);
                }
            }
            RowCount = Convert.ToInt32(oDatabase.GetParameterValue(oDbCommand, "@RowCount"));
            return olista;
        }

        public int Registrar(Proyectos oProyectos)
        {
            try
            {
                oDatabase.ExecuteScalar(Proyectos.Proc.Insertar.Str(),
                                                    oProyectos.Codigo,
                                                    oProyectos.Descripcion,
                                                    oProyectos.Estado,
                                                    oProyectos.NombreEstacion,
                                                    oProyectos.TipoEquipo,
                                                    oProyectos.NombreEquipo,
                                                    oProyectos.ID,
                                                    oProyectos.IP);
                return 1;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
