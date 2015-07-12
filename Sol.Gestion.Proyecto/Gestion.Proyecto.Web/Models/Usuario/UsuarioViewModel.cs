using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Gestion.Proyecto.Web.Models.Usuario
{
    public class UsuarioViewModel
    {
        

        //[Required(AllowEmptyStrings = false, ErrorMessage = "Ingrese usuario")]
        [Required(ErrorMessageResourceType = typeof(Gestion.Proyecto.Resource.Validation), ErrorMessageResourceName = "IngreseUsuario")]
        [Display(Name = "Usuario")]
        public string UserName { get; set; }




        [Required(ErrorMessageResourceType = typeof(Gestion.Proyecto.Resource.Validation), ErrorMessageResourceName = "IngreseContraseña")]
        //[Required(AllowEmptyStrings = false, ErrorMessage = "Ingrese contraseña")]
        [DataType(DataType.Password)]
        [Display(Name = "Contraseña")]
        public string Password { get; set; }

        [Display(Name = "No cerrar sesión")]
        public bool RememberMe { get; set; }
    }
}