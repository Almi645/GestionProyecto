using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Gestion.Proyecto.Common;
using Microsoft.Practices.EnterpriseLibrary.Data;
using Gestion.Proyecto.Resource;
using Gestion.Proyecto.Entity.Entity;
using System.Data.Common;
using System.Data;
using Gestion.Proyecto.Entity.Other;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.DataAccess.Helper;
using Repository;

namespace Gestion.Proyecto.DataAccess
{
    public class ProyectoDetalleDataAccess
    {
        private static DatabaseProviderFactory oDatabaseProviderFactory = new DatabaseProviderFactory();
        private Database oDatabase = oDatabaseProviderFactory.Create(Global.Conexion);

        public int RegistrarDetalleTarjetaLugar(DetalleTarjetaLugar oDetalleTarjetaLugar)
        {
            DbCommand oDbCommand = oDatabase.GetStoredProcCommand(DetalleTarjetaLugar.Proc.Insertar.Str());
            oDatabase.AddInParameter(oDbCommand, "@IdProyecto", DbType.Int32, oDetalleTarjetaLugar.IdProyecto);
            oDatabase.AddInParameter(oDbCommand, "@SubRackId", DbType.String, oDetalleTarjetaLugar.SubRackId);
            oDatabase.AddInParameter(oDbCommand, "@Slot", DbType.String, oDetalleTarjetaLugar.Slot);
            oDatabase.AddInParameter(oDbCommand, "@BoardType", DbType.String, oDetalleTarjetaLugar.BoardType);
            oDatabase.AddInParameter(oDbCommand, "@BiosVersion", DbType.String, oDetalleTarjetaLugar.BiosVersion);
            oDatabase.AddInParameter(oDbCommand, "@SoftVersion", DbType.String, oDetalleTarjetaLugar.SoftVersion);
            oDatabase.AddInParameter(oDbCommand, "@LogicVersion", DbType.String, oDetalleTarjetaLugar.LogicVersion);
            oDatabase.AddInParameter(oDbCommand, "@PCBVersion", DbType.String, oDetalleTarjetaLugar.PCBVersion);
            oDatabase.AddInParameter(oDbCommand, "@SerialNumber", DbType.String, oDetalleTarjetaLugar.SerialNumber);
            return Convert.ToInt32(oDatabase.ExecuteScalar(oDbCommand));
        }

        public DetalleTarjetaLugarList GetDetalleTarjetaLugarPaginacion(int IdProyecto, Paginacion oPaginacion, out int RowCount)
        {
            DetalleTarjetaLugarList olista = new DetalleTarjetaLugarList();
            DbCommand oDbCommand = oDatabase.GetStoredProcCommand(DetalleTarjetaLugar.Proc.Paginacion.Str());
            oDatabase.AddInParameter(oDbCommand, "@IdProyecto", DbType.Int32, IdProyecto);
            oDatabase = Pagination.DefaultParams(oDatabase, oDbCommand, oPaginacion);

            using (IDataReader oIDataReader = oDatabase.ExecuteReader(oDbCommand))
            {
                int i1 = oIDataReader.GetOrdinal("IdDetTarjetaLugar");
                int i2 = oIDataReader.GetOrdinal("IdProyecto");
                int i3 = oIDataReader.GetOrdinal("SubRackId");
                int i4 = oIDataReader.GetOrdinal("Slot");
                int i5 = oIDataReader.GetOrdinal("BoardType");
                while (oIDataReader.Read())
                {
                    DetalleTarjetaLugar obj = new DetalleTarjetaLugar();
                    obj.IdDetalleTarjetaLugar = DataUtil.DbValueToDefault<Int32>(oIDataReader[i1]);
                    obj.IdProyecto = DataUtil.DbValueToDefault<Int32>(oIDataReader[i2]);
                    obj.SubRackId = DataUtil.DbValueToDefault<String>(oIDataReader[i3]);
                    obj.Slot = DataUtil.DbValueToDefault<String>(oIDataReader[i4]);
                    obj.BoardType = DataUtil.DbValueToDefault<String>(oIDataReader[i5]);
                    olista.Add(obj);
                }
            }
            RowCount = Convert.ToInt32(oDatabase.GetParameterValue(oDbCommand, "@RowCount"));
            return olista;
        }
    }
}
