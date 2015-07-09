using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.Entity.Other
{
    public class Paginacion
    {
        public int Page { get; set; }

        public int RowsPerPage { get; set; }

        public int RowCount { get; set; }

        public string SortType { get; set; }

        public string SortDir { get; set; }

        public string FooterDesc { get; set; }

        public string Action { get; set; }
    }
}
