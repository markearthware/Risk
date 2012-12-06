[assembly: WebActivator.PreApplicationStartMethod(typeof(ServerSide.App_Start.FilterConfig), "RegisterGlobalFilters")]

namespace ServerSide.App_Start
{
    using System.Web.Mvc;

    public class FilterConfig
    {
        public static void RegisterGlobalFilters()
        {
            GlobalFilters.Filters.Add(new HandleErrorAttribute());
        }
    }
}