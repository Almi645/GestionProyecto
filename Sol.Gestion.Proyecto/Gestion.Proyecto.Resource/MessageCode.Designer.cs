﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34209
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Gestion.Proyecto.Resource {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    public class MessageCode {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal MessageCode() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("Gestion.Proyecto.Resource.MessageCode", typeof(MessageCode).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to bbredirect(&quot;Registrado correctamente.&quot;, {0});.
        /// </summary>
        public static string BootBoxSuccess {
            get {
                return ResourceManager.GetString("BootBoxSuccess", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to bbredirect(&quot;Cambios guardados correctamente.&quot;, {0});.
        /// </summary>
        public static string BootBoxSuccessEdit {
            get {
                return ResourceManager.GetString("BootBoxSuccessEdit", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to ClearInput();.
        /// </summary>
        public static string FormClearInput {
            get {
                return ResourceManager.GetString("FormClearInput", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to $(&apos;#{0}&apos;).valid();.
        /// </summary>
        public static string FormValidate {
            get {
                return ResourceManager.GetString("FormValidate", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to ValidMultiselect();.
        /// </summary>
        public static string FunctionMultiselectValidate {
            get {
                return ResourceManager.GetString("FunctionMultiselectValidate", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to toastr.warning(&apos;El código de proyecto ingresado ya existe.&apos;);.
        /// </summary>
        public static string ToastrCodigoProyectoExist {
            get {
                return ResourceManager.GetString("ToastrCodigoProyectoExist", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to toastr.error(&apos;Ocurrio un error al guardar los cambios.&apos;);.
        /// </summary>
        public static string ToastrEditError {
            get {
                return ResourceManager.GetString("ToastrEditError", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to toastr.success(&apos;Cambios guardados correctamente.&apos;);.
        /// </summary>
        public static string ToastrEditSuccess {
            get {
                return ResourceManager.GetString("ToastrEditSuccess", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to toastr.error(&apos;Ocurrio un error al registrar.&apos;);.
        /// </summary>
        public static string ToastrRegisterError {
            get {
                return ResourceManager.GetString("ToastrRegisterError", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to toastr.success(&apos;Registrado correctamente.&apos;);.
        /// </summary>
        public static string ToastrRegisterSuccess {
            get {
                return ResourceManager.GetString("ToastrRegisterSuccess", resourceCulture);
            }
        }
    }
}
