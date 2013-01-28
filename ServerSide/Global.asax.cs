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

    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            var config = GlobalConfiguration.Configuration;
            config.Formatters.Insert(0, new Westwind.Web.WebApi.JsonpFormatter());
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            String corsOrigin, corsMethod, corsHeaders;

            corsOrigin = HttpContext.Current.Request.Headers["Origin"];
            corsMethod = HttpContext.Current.Request.Headers["Access-Control-Request-Method"];
            corsHeaders = HttpContext.Current.Request.Headers["Access-Control-Request-Headers"];

            if (corsOrigin == null || corsOrigin == "null")
            {
                corsOrigin = "*";
            }

            HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", corsOrigin);

            if (corsMethod != null)
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", corsMethod);

            if (corsHeaders != null)
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", corsHeaders);

            if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
            {
                return;
            } 
        }
    }
}