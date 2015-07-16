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
            oUsuario.UserName = "Admin";
            oUsuario.Password = Encrypt.RijndaelSimple.Encriptar("123");
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
                obj.Estado = "A";
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
