using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Gestion.Proyecto.Entity.Entity;
using Gestion.Proyecto.BusinessLogic;
using Gestion.Proyecto.Common.Helper;

namespace ProyectoGestionTest
{
    [TestClass]
    public class UnitTest1
    {
       
        [TestMethod]
        public void TestMethod1()
        {
            UsuarioBusinessLogic oUsuarioBusinessLogic = new UsuarioBusinessLogic();
            Usuario oUsuario = new Usuario();
            //oUsuario.Empleado = new Empleado();
            oUsuario.Empleado.IdEmpleado = 1000;
            oUsuario.NombreUsuario = "Admin";
            oUsuario.Contrasenia = Encriptador.RijndaelSimple.Encriptar("123");
            Int32 i = oUsuarioBusinessLogic.RegistrarUsuario(oUsuario);
        }

        [TestMethod]
        public void InsertarProyecto()
        {

            for (int i = 0; i < 30; i++)
            {
                var obj = new Proyectos();
                obj.Codigo = "00" + i;
                obj.Descripcion = "Descrición " + i;
                obj.Estado = true;
                obj.NombreEstacion = "Nombre de Estación " + i;
                obj.TipoEquipo = "Tipo Equipo " + i;
                obj.NombreEquipo = "Nombre de Equipo " + i;
                obj.ID = "ID " + i;
                obj.IP = "IP " + i;
                new ProyectosBusinessLogic().Registrar(obj);
            }
        }
    }
}
