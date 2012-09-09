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

        public FileResult MakePdf(string g)
        {
            var certificateManager = new PdfManager();
            var certificate = certificateManager.GetCertificate(g);

            Response.AddHeader("Content-Type", "binary/octet-stream");
            Response.AddHeader("Content-Disposition", "inline; filename=MirenaCertificate.pdf; size=" + certificate.Length);

            return File(certificate, "application/pdf");
        }
    }
}
