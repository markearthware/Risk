using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace ServerSide
{
    using ServerSide.App_Start;
    using ServerSide.Handlers;

    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            FilterConfig.RegisterGlobalFilters();
            RouteConfig.RegisterRoutes();
            WorkerConfig.Initialise();

            GlobalConfiguration.Configuration.MessageHandlers.Add(new CorsHandler()); 
        }

        void Application_PreSendRequestHeaders(Object sender, EventArgs e)
        {
            Response.Headers.Set("Cache-Control", "no-cache, no-store, must-revalidate");
        }
    }
}