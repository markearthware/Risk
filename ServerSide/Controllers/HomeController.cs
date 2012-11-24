using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using ServerSide.Models;
using ServerSide.ViewModels;
using System.IO;

namespace ServerSide.Controllers
{
    using ServerSide.PdfGen;

    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return this.View();
        }

        public ActionResult MakePdf(string g)
        {
            var deserializer = new JavaScriptSerializer();

            var reportString = GetReportString(g);
            var taskString = reportString.Split('~')[0];
            var assessmentsString = reportString.Split('~')[1];

            var taskObj = deserializer.Deserialize<Task>(taskString);
            var assessmentsObj = deserializer.Deserialize<List<Assessment>>(assessmentsString);

            var viewModel = new MakePdfViewModel { Task = taskObj, Assessments = assessmentsObj, AssessmentNumber = g };

            return this.View(viewModel);
        }

        public static string GetReportString(string g)
        {
            try
            {
                using (StreamReader sr = new StreamReader(string.Format(@"c:\temp\reports\{0}.txt", g)))
                {
                    return sr.ReadToEnd();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("The file could not be read:");
                Console.WriteLine(e.Message);
            }
            return string.Empty;
        }
    }
}
