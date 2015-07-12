using CRP.GuiaEnfermeria.Seguridad.Cryptography;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace Gestion.Proyecto.Seguridad.Filters
{
    public class PersistentSessionAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext.HttpContext.Request.IsAuthenticated && HttpContext.Current.Session["UsuarioGP"] == null)
            {
                HttpCookie userData = HttpContext.Current.Request.Cookies["userCookie"];
                if (userData != null)
                {
                    string stringUserData = StringCipher.Decrypt(userData.Value, "1234");

                    //Crear objeto usuario y descomentar.
                    //HttpContext.Current.Session["Usuario"] = DeserializeJsonTo<Usuario>(stringUserData);
                }
            }

            if (!filterContext.HttpContext.Request.IsAuthenticated && HttpContext.Current.Session["UsuarioGP"] != null)
            {
                HttpContext.Current.Session["UsuarioGP"] = null;
            }

            base.OnActionExecuting(filterContext);
        }

        public static string SerializeToJson(object objeto)
        {
            var jsonSerializer = new DataContractJsonSerializer(objeto.GetType());
            var ms = new MemoryStream();
            jsonSerializer.WriteObject(ms, objeto);
            var jsonResult = Encoding.Default.GetString(ms.ToArray());
            return jsonResult;
        }
        ///
        /// Método extensor para deserializar JSON cualquier objeto
        ///
        public static T DeserializeJsonTo<T>(string jsonSerializado)
        {
            var jss = new JavaScriptSerializer();
            T entidad = jss.Deserialize<T>(jsonSerializado);
            return entidad;
        }
    }
}
