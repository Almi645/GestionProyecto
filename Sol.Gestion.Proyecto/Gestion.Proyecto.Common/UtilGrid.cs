using Gestion.Proyecto.Resource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.Common
{
    public class UtilGrid
    {
        public static T GenericPaginacionPorDefecto<T>() where T : new()
        {
            dynamic paginacion = new T();

            paginacion.Page = Convert.ToInt32(Constants.Page);
            paginacion.RowCount = Convert.ToInt32(Constants.RowCount);
            paginacion.RowsPerPage = Convert.ToInt32(Constants.RowsPerPage);
            paginacion.SortDir = string.Empty;
            paginacion.SortType = string.Empty;

            return paginacion;
        }

        public static T MyPaginationDefault<T>(String sortdir, String sort, Int32 page) where T : new()
        {
            dynamic paginacion = new T();

            paginacion.Page = page;
            paginacion.RowsPerPage = Convert.ToInt32(Constants.RowsPerPage);
            paginacion.SortDir = sortdir;
            paginacion.SortType = sort;

            return paginacion;
        }

        public static T MyPaginationDefault<T>() where T : new()
        {
            dynamic paginacion = new T();

            paginacion.Page = Constants.Page.Int();
            paginacion.RowsPerPage = Convert.ToInt32(Constants.RowsPerPage);
            paginacion.SortDir = string.Empty;
            paginacion.SortType = string.Empty;

            return paginacion;
        }

        public static string CountRecords(int page, int rowsPerPage, int rowCount)
        {
            string strContador;
            long registroInicio, registroFin;
            int pageCount;
            if (page > 0) page--;
            if (page == -1) page = 0;
            decimal temp = Convert.ToDecimal(rowCount) / Convert.ToDecimal(rowsPerPage);
            if (temp > Convert.ToInt32(rowCount / rowsPerPage))
            {
                pageCount = Convert.ToInt32(rowCount / rowsPerPage) + 1;
            }
            else
            {
                pageCount = Convert.ToInt32(rowCount / rowsPerPage);
            }

            registroInicio = (page * rowsPerPage) + 1;

            if (rowCount <= 0)
            {
                strContador = string.Empty;
            }
            else if (rowCount == 1)
            {
                strContador = Constants.OneRecords;
            }
            else
            {
                registroInicio = (page * rowsPerPage) + 1;

                if (page + 1 < pageCount)
                    registroFin = (page + 1) * rowsPerPage;
                else
                    registroFin = rowCount;

                strContador = String.Format(Constants.MultipleRecords, rowCount, registroInicio, registroFin);
            }
            return strContador;
        }


        public static string CountRecordsDefault(int rowCount)
        {
            int page = Constants.Page.Int();
            int rowsPerPage = Convert.ToInt32(Constants.RowsPerPage);

            string strContador;
            long registroInicio, registroFin;
            int pageCount;
            if (page > 0) page--;
            if (page == -1) page = 0;
            decimal temp = Convert.ToDecimal(rowCount) / Convert.ToDecimal(rowsPerPage);
            if (temp > Convert.ToInt32(rowCount / rowsPerPage))
            {
                pageCount = Convert.ToInt32(rowCount / rowsPerPage) + 1;
            }
            else
            {
                pageCount = Convert.ToInt32(rowCount / rowsPerPage);
            }

            registroInicio = (page * rowsPerPage) + 1;

            if (rowCount <= 0)
            {
                strContador = string.Empty;
            }
            else if (rowCount == 1)
            {
                strContador = Constants.OneRecords;
            }
            else
            {
                registroInicio = (page * rowsPerPage) + 1;

                if (page + 1 < pageCount)
                    registroFin = (page + 1) * rowsPerPage;
                else
                    registroFin = rowCount;

                strContador = String.Format(Constants.MultipleRecords, rowCount, registroInicio, registroFin);
            }
            return strContador;
        }
    }
}
