using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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
            var pdfManager = new PdfManager();
            var file = pdfManager.GetPdf(g);
            Response.AddHeader("Content-Type", "binary/octet-stream");
            Response.AddHeader("Content-Disposition", "inline; filename=MirenaCertificate.pdf; size=" + file.Length);
            return File(file, "application/pdf");
        }
    }
}
