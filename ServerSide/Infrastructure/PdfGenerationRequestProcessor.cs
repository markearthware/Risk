namespace ServerSide.Infrastructure
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Net;
    using System.Net.Mail;
    using System.Web.Script.Serialization;

    using ServerSide.Mailers;
    using ServerSide.Models;
    using ServerSide.PdfGen;

    public class PdfGenerationRequestProcessor
    {
        private readonly UserMailer userMailer;

        public PdfGenerationRequestProcessor()
        {
            this.userMailer = new UserMailer();
        }

        public static void CreateTextFile(string reportId, Task task, List<Assessment> assessments)
        {
            try
            {
                var serializer = new JavaScriptSerializer();
                var taskString = serializer.Serialize(task);
                var assessmentsString = serializer.Serialize(assessments);

                if (!Directory.Exists(@"c:\temp"))
                {
                    Directory.CreateDirectory(@"c:\temp");
                }

                var path = String.Format(@"c:\temp\{0}.txt", reportId);
                if (!File.Exists(path))
                {
                    // Create a file to write to. 
                    using (var sw = File.CreateText(path))
                    {
                        sw.Write(taskString);
                        sw.Write("~");
                        sw.Write(assessmentsString);
                    }
                }
            }
            catch(Exception e)
            {
                Log.SendExceptionEmail(e);
            }
        }

        public void Process(PdfGenerationRequest request)
        {
            try
            {
                var reportId = Guid.NewGuid().ToString().Replace("-", String.Empty).Substring(0, 8);
                var pdfManager = new PdfManager();
                foreach (var assessment in request.Assessments)
                {
                    if (assessment.ExistingControls == "null")
                    {
                        assessment.ExistingControls = null;
                    }

                    if (assessment.Controls == "null")
                    {
                        assessment.Controls = null;
                    }
                }
                CreateTextFile(reportId, request.Task, request.Assessments);
                pdfManager.GetCertificate(reportId);
                this.userMailer.Report(pdfManager.CertificatePath, request.Task).Deliver();
            }
            catch (Exception e)
            {
                Log.SendExceptionEmail(e);
            }
        }
    }
}