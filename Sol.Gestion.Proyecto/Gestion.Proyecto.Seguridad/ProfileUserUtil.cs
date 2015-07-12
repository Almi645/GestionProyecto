using Gestion.Proyecto.Entity.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Gestion.Proyecto.Seguridad
{
    public class ProfileUserUtil
    {
        public static Usuario GetUserSession()
        {
            Usuario oUsuario = new Usuario();

            if (HttpContext.Current.Session["UsuarioGP"] != null)
                oUsuario = (Usuario)HttpContext.Current.Session["UsuarioGP"];

            return oUsuario;
        }

        public static bool IsAuthenticated()
        {
            if (HttpContext.Current.Session["UsuarioGP"] == null)
                return false;
            else
                return true;
        }

        public static void SetUserSession(Usuario oUsuario)
        {
            HttpContext.Current.Session["UsuarioGP"] = oUsuario;
        }

        public static Usuario GetUsuariobyContrasenaOperacion(string contrasenaoperation)
        {
                try
                {
                  //  login
                 //   var obj = client.GetUsuariobyContrasenaOperacion(contrasenaoperation);
                    var obj=new Usuario();
                    if (obj.IdUsuario > 0)
                    {
                        Usuario oUsuario= new Usuario();
                        oUsuario.IdUsuario = obj.IdUsuario;
                        oUsuario.NombreUsuario = obj.NombreUsuario;
                        oUsuario.Contrasenia = obj.Contrasenia;
                     //   int result = new MaestrosServiceClient().ResponsableSave(oResponsable);
                        int result = 1;
                        if (result != 0)
                        {
                            HttpContext.Current.Session["CrpUsuarioGEOperation"] = obj;
                            return obj;
                        }
                        else
                        {
                            HttpContext.Current.Session["CrpUsuarioGEOperation"] = null;
                            return new Usuario();
                        }
                    }
                    else
                        return new Usuario();

                }
                catch (Exception)
                {
                    return new Usuario();
                }
        }

        public static Usuario GetUserCurrentOperation()
        {
            Usuario oUsuario = new Usuario();

            if (HttpContext.Current.Session["CrpUsuarioGEOperation"] != null)
                oUsuario = (Usuario)HttpContext.Current.Session["CrpUsuarioGEOperation"];

            return oUsuario;
        }
    }
}
