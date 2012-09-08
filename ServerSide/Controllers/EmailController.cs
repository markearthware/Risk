using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ServerSide.Controllers
{
    using System.IO;
    using System.Web.Mvc;
    using PdfGen;
    using ServerSide.Models;

    public class EmailController : ApiController
    {
        [System.Web.Http.HttpGet]
        public string Send([FromUri]Task task, [FromUri]List<Assessment> assessments )
        {
            PdfManager pdfGen = new PdfManager();
            pdfGen.CreatePdf(Guid.NewGuid().ToString());
            return "Success";
        }

    }
}
