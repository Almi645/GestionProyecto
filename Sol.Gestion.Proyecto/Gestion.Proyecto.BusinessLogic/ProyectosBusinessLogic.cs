﻿using Gestion.Proyecto.DataAccess;
using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.Entity.EntityList;
using Gestion.Proyecto.Entity.Other;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Gestion.Proyecto.Common;

namespace Gestion.Proyecto.BusinessLogic
{
    public class ProyectosBusinessLogic
    {
        public ProyectosList GetProyectosPaginacion(Proyectos oProyectos, Paginacion oPaginacion, out int RowCount)
        {
            try
            {
                return new ProyectosDataAccess().GetProyectosPaginacion(oProyectos, oPaginacion, out RowCount);
            }
            catch (Exception)
            {
                RowCount = decimal.Zero.Int();
                return null;
            }
        }

        public int Registrar(Proyectos oProyectos)
        {
            try
            {
                return new ProyectosDataAccess().Registrar(oProyectos);
            }
            catch (Exception)
            {
                return decimal.Zero.Int();
            }
        }

        public Proyectos GetbyId(int Id)
        {
            try
            {
                return new ProyectosDataAccess().GetbyId(Id);
            }
            catch (Exception)
            {
                return null;
            }
        }

        public int Actualizar(Proyectos oProyectos)
        {
            try
            {
                return new ProyectosDataAccess().Actualizar(oProyectos);
            }
            catch (Exception)
            {
                return 0;
            }
        }

        public ProyectosList GetBandejaPaginacion(Proyectos oProyectos, int IdEmpleado, Paginacion oPaginacion, out int RowCount)
        {
            try
            {
                return new ProyectosDataAccess().GetBandejaPaginacion(oProyectos, IdEmpleado, oPaginacion, out RowCount);
            }
            catch (Exception)
            {
                RowCount = decimal.Zero.Int();
                return null;
            }
        }
    }
}
