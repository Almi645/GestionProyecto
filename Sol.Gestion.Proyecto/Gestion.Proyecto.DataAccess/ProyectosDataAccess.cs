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

        public ProyectosList GetProyectosPaginacion(Proyectos oPersona, Paginacion oPaginacion, out int RowCount)
        {
            ProyectosList olista = new ProyectosList();
            DbCommand oDbCommand = oDatabase.GetStoredProcCommand(Proyectos.Proc.Paginacion.Str());
            oDatabase.AddInParameter(oDbCommand, "@Codigo", DbType.String, oPersona.Codigo.nullEmpty());
            oDatabase = Pagination.DefaultParams(oDatabase, oDbCommand, oPaginacion);

            using (IDataReader oIDataReader = oDatabase.ExecuteReader(oDbCommand))
            {
                Proyectos obj = new Proyectos();
                int i1 = oIDataReader.GetOrdinal("IdProyecto");
                int i2 = oIDataReader.GetOrdinal("CodProyecto");
                int i3 = oIDataReader.GetOrdinal("DescripProyecto");
                int i4 = oIDataReader.GetOrdinal("NombreEstacion");
                int i5 = oIDataReader.GetOrdinal("TipoEquipo");
                int i6 = oIDataReader.GetOrdinal("NombreEquipo");
                while (oIDataReader.Read())
                {
                    obj = new Proyectos();
                    obj.IdProyecto = DataUtil.DbValueToDefault<Int32>(oIDataReader[i1]);
                    obj.Codigo = DataUtil.DbValueToDefault<String>(oIDataReader[i2]);
                    obj.Descripcion = DataUtil.DbValueToDefault<String>(oIDataReader[i3]);
                    obj.NombreEstacion = DataUtil.DbValueToDefault<String>(oIDataReader[i4]);
                    obj.TipoEquipo = DataUtil.DbValueToDefault<String>(oIDataReader[i5]);
                    obj.NombreEquipo = DataUtil.DbValueToDefault<String>(oIDataReader[i6]);
                    olista.Add(obj);
                }
            }
            RowCount = Convert.ToInt32(oDatabase.GetParameterValue(oDbCommand, "@RowCount"));
            return olista;
        }

        public int Registrar(Proyectos oProyectos)
        {
            DbCommand oDbCommand = oDatabase.GetStoredProcCommand(Proyectos.Proc.Insertar.Str());
            oDatabase.AddInParameter(oDbCommand, "@Codigo", DbType.String, oProyectos.Codigo);
            oDatabase.AddInParameter(oDbCommand, "@Descripcion", DbType.String, oProyectos.Descripcion);
            oDatabase.AddInParameter(oDbCommand, "@NombreEstacion", DbType.String, oProyectos.NombreEstacion);
            oDatabase.AddInParameter(oDbCommand, "@TipoEquipo", DbType.String, oProyectos.TipoEquipo);
            oDatabase.AddInParameter(oDbCommand, "@NombreEquipo", DbType.String, oProyectos.NombreEquipo);
            oDatabase.AddInParameter(oDbCommand, "@ID", DbType.String, oProyectos.ID);
            oDatabase.AddInParameter(oDbCommand, "@IP", DbType.String, oProyectos.IP);
            oDatabase.AddInParameter(oDbCommand, "@Asignacion", DbType.String, String.Join(",", oProyectos.Asignacion));
            return Convert.ToInt32(oDatabase.ExecuteScalar(oDbCommand));
        }

        public Proyectos GetbyId(int Id)
        {
            Proyectos oProyectos = new Proyectos();
            DbCommand oDbCommand = oDatabase.GetStoredProcCommand(Proyectos.Proc.SelectById.Str());
            oDatabase.AddInParameter(oDbCommand, "@IdProyecto", DbType.Int32, Id);

            using (IDataReader oIDataReader = oDatabase.ExecuteReader(oDbCommand))
            {
                int i1 = oIDataReader.GetOrdinal("IdProyecto");
                int i2 = oIDataReader.GetOrdinal("CodProyecto");
                int i3 = oIDataReader.GetOrdinal("DescripProyecto");
                int i4 = oIDataReader.GetOrdinal("Estado");
                int i5 = oIDataReader.GetOrdinal("NombreEstacion");
                int i6 = oIDataReader.GetOrdinal("TipoEquipo");
                int i7 = oIDataReader.GetOrdinal("NombreEquipo");
                int i8 = oIDataReader.GetOrdinal("ID");
                int i9 = oIDataReader.GetOrdinal("IP");
                int i10 = oIDataReader.GetOrdinal("Asignacion");
                while (oIDataReader.Read())
                {
                    oProyectos.IdProyecto = DataUtil.DbValueToDefault<Int32>(oIDataReader[i1]);
                    oProyectos.Codigo = DataUtil.DbValueToDefault<String>(oIDataReader[i2]);
                    oProyectos.Descripcion = DataUtil.DbValueToDefault<String>(oIDataReader[i3]);
                    oProyectos.Estado = DataUtil.DbValueToDefault<String>(oIDataReader[i4]);
                    oProyectos.NombreEstacion = DataUtil.DbValueToDefault<String>(oIDataReader[i5]);
                    oProyectos.TipoEquipo = DataUtil.DbValueToDefault<String>(oIDataReader[i6]);
                    oProyectos.NombreEquipo = DataUtil.DbValueToDefault<String>(oIDataReader[i7]);
                    oProyectos.ID = DataUtil.DbValueToDefault<String>(oIDataReader[i8]);
                    oProyectos.IP = DataUtil.DbValueToDefault<String>(oIDataReader[i9]);
                    oProyectos.Asignacion = (DataUtil.DbValueToDefault<String>(oIDataReader[i10])).Split(',');
                }
            }
            return oProyectos;
        }
    }
}
