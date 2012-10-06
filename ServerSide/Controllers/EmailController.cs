using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ServerSide.Mailers;

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
        private IUserMailer _userMailer = new UserMailer();
        public IUserMailer UserMailer
        {
            get { return _userMailer; }
            set { _userMailer = value; }
        }

        [System.Web.Http.HttpGet]
        public HttpResponseMessage Send([FromUri]Task task, [FromUri]List<Assessment> assessments )
        {
            var reportId = Guid.NewGuid().ToString();
            var pdfManager = new PdfManager();
            pdfManager.GetCertificate(reportId, task, assessments);
            UserMailer.Report(pdfManager.CertificatePath).Send();
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}
