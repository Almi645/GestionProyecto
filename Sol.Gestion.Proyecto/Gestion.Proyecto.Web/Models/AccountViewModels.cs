using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Gestion.Proyecto.Web.Models
{
    public class AccountViewModels
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "Ingrese usuario")]
        //[RegularExpression(RegExp.LoginName, ErrorMessageResourceName = "LoginName", ErrorMessageResourceType = typeof(Messages))]
        [Display(Name = "Usuario")]
        public string UserName { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Ingrese contraseña")]
        [DataType(DataType.Password)]
        [Display(Name = "Contraseña")]
        public string Password { get; set; }

        [Display(Name = "No cerrar sesión")]
        public bool RememberMe { get; set; }
    }
}