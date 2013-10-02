namespace ServerSide.Infrastructure
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Web.Hosting;
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

                var path = string.Format(HostingEnvironment.MapPath("~/App_Data/{0}.txt"),reportId);
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
                if (request != null)
                {
                    if(request.Assessments != null && request.Task != null)
                    {
                        if (request.Assessments.Any())
                        {
                            foreach (var assessment in request.Assessments)
                            {
                                if (assessment != null)
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

                            }
                            CreateTextFile(reportId, request.Task, request.Assessments);
                            pdfManager.GetCertificate(reportId);
                            this.userMailer.Report(pdfManager.CertificatePath, request.Task).Deliver();
                        }
                        else
                        {
                            request.Task.ReasonForFaliure =
                                "No assessments created against the task. Ensure there are assessments in the assessments list before emailing";
                            this.userMailer.Problem(request.Task).Deliver();

                            Log.SendCustomLogEmail("No assessments created against the task");
                        }
                    }
                    else
                    {
                        if (request.Assessments == null)
                        {
                            request.Task.ReasonForFaliure =
                                "No assessments created against the task. Ensure there are assessments in the assessments list before emailing";
                            this.userMailer.Problem(request.Task).Deliver();
                            Log.SendCustomLogEmail("assessments is null");
                        }
                        if(request.Task == null)
                        {
                            request.Task.ReasonForFaliure =
                                "Insufficient task information - make sure all information in the task form is completed before emailing";
                            this.userMailer.Problem(request.Task).Deliver();
                            Log.SendCustomLogEmail("task is null");
                        }
                    }
                }
                else
                {
                    Log.SendCustomLogEmail("request is null");
                }
                
            }
            catch (Exception e)
            {
                Log.SendExceptionEmail(e);
                Log.SendCustomLogEmail("Process method catching exception line 108 PdfGenerationRequestProcessor");
            }
        }
    }
}