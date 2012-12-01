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
    using System.Web.Script.Serialization;
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
            CreateTextFile(reportId, task, assessments);
            pdfManager.GetCertificate(reportId);
            UserMailer.Report(pdfManager.CertificatePath, task).Send();
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        public static void CreateTextFile(string reportId, Task task, List<Assessment> assessments)
        {
            var serializer = new JavaScriptSerializer();
            var taskString = serializer.Serialize(task);
            var assessmentsString = serializer.Serialize(assessments);

            if(!Directory.Exists(@"c:\temp"))
            {
                Directory.CreateDirectory(@"c:\temp");
            }

            string path = string.Format(@"c:\temp\{0}.txt",reportId);
            if (!File.Exists(path))
            {
                // Create a file to write to. 
                using (StreamWriter sw = File.CreateText(path))
                {
                    sw.Write(taskString);
                    sw.Write("~");
                    sw.Write(assessmentsString);
                }
            }
        }
    }
}
