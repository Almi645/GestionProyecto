using Gestion.Proyecto.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Security;

namespace Gestion.Proyecto.Helpers
{
    public class ProfileUserUtil
    {
        public static Usuario GetUserSession()
        {
            Usuario oUsuario = new Usuario();

            if (HttpContext.Current.Session["GPUsuario"] != null)
                oUsuario = (Usuario)HttpContext.Current.Session["GPUsuario"];

            return oUsuario;
        }

        public static bool IsAuthenticated()
        {
            if (HttpContext.Current.Session["GPUsuario"] == null)
                return false;
            else
                return true;
        }

        public static void SetUserSession(Usuario oUsuario)
        {
            HttpContext.Current.Session["GPUsuario"] = oUsuario;
        }
    }
}
