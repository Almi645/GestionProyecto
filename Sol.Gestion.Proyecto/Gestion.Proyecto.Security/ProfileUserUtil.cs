using Gestion.Proyecto.Entity.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Gestion.Proyecto.Security
{
    public class ProfileUserUtil
    {
        public static Usuario GetUserSession()
        {
            Usuario oUsuario = new Usuario();

            if (HttpContext.Current.Session["Usuario"] != null)
                oUsuario = (Usuario)HttpContext.Current.Session["Usuario"];

            return oUsuario;
        }

        public static bool IsAuthenticated()
        {
            if (HttpContext.Current.Session["Usuario"] == null)
                return false;
            else
                return true;
        }

        public static void SetUserSession(Usuario oUsuario)
        {
            HttpContext.Current.Session["Usuario"] = oUsuario;
        }
    }
}
