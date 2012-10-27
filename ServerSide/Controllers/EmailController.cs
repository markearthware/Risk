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
            var reportId = Guid.NewGuid().ToString().Replace("-",string.Empty).Substring(0,8);
            var pdfManager = new PdfManager();

            foreach (var assessment in assessments)
            {
                if (assessment.ExistingControls == "null")
                    assessment.ExistingControls = null;

                if (assessment.Controls == "null")
                    assessment.Controls = null;
            }

            pdfManager.GetCertificate(reportId, task, assessments);
            UserMailer.Report(pdfManager.CertificatePath, task).Send();
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}
