using Gestion.Proyecto.DataAccess;
using Gestion.Proyecto.Entity.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.BusinessLogic
{
    public class UsuarioBusinessLogic
    {
        UsuarioDataAccess oUsuarioDataAccess = new UsuarioDataAccess();

        public Usuario AutenticarUsuario(Usuario oUsuario) 
        {
            return new UsuarioDataAccess().AutenticarUsuario(oUsuario);
        }

        public int RegistrarUsuario(Usuario oUsuario)
        {
            try
            {
                return oUsuarioDataAccess.RegistrarUsuario(oUsuario);
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
