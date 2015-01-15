using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TestExtJs.Startup))]
namespace TestExtJs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
