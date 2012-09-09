using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ServerSide.Controllers
{
    using System.Configuration;
    using System.IO;
    using System.Web;
    using System.Web.Mvc;
    using PdfGen;
    using ServerSide.Models;

    using Winnovative.WnvHtmlConvert;

    public class EmailController : ApiController
    {
        [System.Web.Http.HttpGet]
        public string Send([FromUri]Task task, [FromUri]List<Assessment> assessments )
        {
            var guid = Guid.NewGuid().ToString();
            var pdfManager = new PdfManager();
            pdfManager.GetCertificate(guid);
            return "Success";
        }
    }
}
