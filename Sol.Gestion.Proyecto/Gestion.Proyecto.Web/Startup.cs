using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Gestion.Proyecto.Web.Startup))]
namespace Gestion.Proyecto.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
