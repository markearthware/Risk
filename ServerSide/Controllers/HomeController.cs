using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using ServerSide.Models;
using ServerSide.ViewModels;

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

        public ActionResult MakePdf(string g, string task, string assessments)
        {
            var deserializer = new JavaScriptSerializer();
            var taskObj = deserializer.Deserialize<Task>(task);
            var assessmentsObj = deserializer.Deserialize<List<Assessment>>(assessments);


            var viewModel = new MakePdfViewModel { Task = taskObj, Assessments = assessmentsObj, AssessmentNumber = g };

            return this.View(viewModel);
        }
    }
}
