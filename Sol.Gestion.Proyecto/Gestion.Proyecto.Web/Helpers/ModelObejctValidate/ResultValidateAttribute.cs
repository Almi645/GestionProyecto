using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gestion.Proyecto.Web.Helpers.ModelObejctValidate
{
    public class ResultValidateAttribute
    {
        private static void PrintResults(IEnumerable<ValidationResult> results, Int32 indentationLevel)
        {
            foreach (var validationResult in results)
            {
                SetIndentation(indentationLevel);

                Console.WriteLine(validationResult.ErrorMessage);
                Console.WriteLine();

                if (validationResult is CompositeValidationResult)
                {
                    PrintResults(((CompositeValidationResult)validationResult).Results, indentationLevel + 1);
                }
            }
        }

        private static void SetIndentation(int indentationLevel)
        {
            Console.CursorLeft = indentationLevel * 4;
        }
    }
}