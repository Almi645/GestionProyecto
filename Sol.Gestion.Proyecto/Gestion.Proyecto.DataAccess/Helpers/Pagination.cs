using Gestion.Proyecto.Entity.Other;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.DataAccess.Helper
{
    public class Pagination
    {
        /// <summary>
        /// Parametros para Base de Datos :
        /// 1. @page   (Número de página)
        /// 2. @rowsPerPage (Filas por página)
        /// 3. @sortDir (Ordenamiento ascendente ó descendente)
        /// 4. @sortType (Ordenamiento por tipo de campo)
        /// 5. @rowCount (Variable de salida de total de registros)
        /// </summary>
        /// <param name="oDatabase"></param>
        /// <param name="oDbCommand"></param>
        /// <param name="oPaginacion"></param>
        /// <returns></returns>
        public static Database DefaultParams(Database oDatabase, DbCommand oDbCommand, Paginacion oPaginacion)
        {
            oDatabase.AddInParameter(oDbCommand, "@page", DbType.Int32, oPaginacion.Page);
            oDatabase.AddInParameter(oDbCommand, "@rowsPerPage", DbType.Int32, oPaginacion.RowsPerPage);
            oDatabase.AddInParameter(oDbCommand, "@sortDir", DbType.String, oPaginacion.SortDir);
            oDatabase.AddInParameter(oDbCommand, "@sortType", DbType.String, oPaginacion.SortType);
            oDatabase.AddOutParameter(oDbCommand, "@rowCount", DbType.Int32, 0);
            return oDatabase;
        }
    }
}