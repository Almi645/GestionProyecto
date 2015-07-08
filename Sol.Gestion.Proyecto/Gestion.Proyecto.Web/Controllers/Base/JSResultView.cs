using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Gestion.Proyecto.Web.Controllers.Base
{
    public class JSResultView
    {
        public JSResultView(String MessageResult, Object Result)
        {
            this.MessageResult = MessageResult;
            this.Result = Result;
        }
        public String MessageResult { get; set; }
        public Object Result { get; set; }
    }
}