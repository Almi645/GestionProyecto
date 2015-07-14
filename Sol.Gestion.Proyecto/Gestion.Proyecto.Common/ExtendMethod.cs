using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.Common
{
    public static class ExtendMethod
    {
        public static string Str(this object value)
        {
            // Get the type
            Type type = value.GetType();

            // Get fieldinfo for this type
            FieldInfo fieldInfo = type.GetField(value.ToString());

            // Get the stringvalue attributes
            StringValueAttribute[] attribs = fieldInfo.GetCustomAttributes(
                typeof(StringValueAttribute), false) as StringValueAttribute[];

            // Return the first if there was a match.
            return attribs.Length > 0 ? attribs[0].StringValue : null;
        }

        public static int Int(this String value)
        {
            return Convert.ToInt32(value);
        }
        public static int Int(this decimal value)
        {
            return Convert.ToInt32(value);
        }

        public static int Bool(this bool value)
        {
            if (value)
                return 1;
            else
                return 0;
        }

        public static string nullEmpty(this String value)
        {
            if (value == null)
                return string.Empty;
            else
                return value;
        }
    }
}
