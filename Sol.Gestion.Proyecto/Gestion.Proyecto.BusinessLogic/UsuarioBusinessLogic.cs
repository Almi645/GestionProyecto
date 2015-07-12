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
            return oUsuarioDataAccess.AutenticarUsuario(oUsuario);
        }
        public int RegistrarUsuario(Usuario oUsuario)
        {
            return oUsuarioDataAccess.RegistrarUsuario(oUsuario);
        }
    }
}
