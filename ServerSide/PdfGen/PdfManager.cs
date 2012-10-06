﻿using System.Collections.Generic;
using ServerSide.Models;

namespace ServerSide.PdfGen
{
    using System;
    using System.Configuration;
    using System.IO;
    using System.Web;
    using Winnovative.WnvHtmlConvert;
    using System.Web.Script.Serialization;

    public class PdfManager
    {
         public Stream GetCertificate(string userId, Task task, List<Assessment> assessments)
        {            
            var certificateFileName = this.GetCertificateFileName(userId);
            var certificateDirectory = HttpContext.Current.Server.MapPath(ConfigurationManager.AppSettings["CertificateCacheDirectory"]);
            var certificatePath = Path.Combine(certificateDirectory, certificateFileName);

            if (!File.Exists(certificatePath))
            {
                if (!Directory.Exists(certificateDirectory))
                {
                    Directory.CreateDirectory(certificateDirectory);
                }

                // Generate PDF Certificate
                var pdfConverter = new PdfConverter();
                pdfConverter.PdfDocumentOptions.PdfPageOrientation = PDFPageOrientation.Landscape;
                pdfConverter.LicenseKey = ConfigurationManager.AppSettings["WinnovativeLicenseKey"];
                pdfConverter.PdfDocumentOptions.BottomMargin = 0;
                pdfConverter.PdfDocumentOptions.RightMargin = 0;
                pdfConverter.PageWidth = 1050;
                pdfConverter.PageHeight = 790;
                pdfConverter.PdfDocumentOptions.SinglePage = true;
                var currenthost = ConfigurationManager.AppSettings["WebsiteDomain"] + "/";

                var serializer = new JavaScriptSerializer();
                var taskString = serializer.Serialize(task);
                var assessmentsString = serializer.Serialize(assessments);

                var generateCertificateUrlPath = ConfigurationManager.AppSettings["GeneratePdfUrlPath"] + "?g=" + userId + "&task=" + taskString + "&assessments=" +assessmentsString;
                var generateCertificateUrl = currenthost + generateCertificateUrlPath;
                pdfConverter.SavePdfFromUrlToFile(generateCertificateUrl, certificatePath);
            }

            return new FileStream(certificatePath, FileMode.Open, FileAccess.Read);
        }

        private string GetCertificateFileName(string userId)
        {            
            return string.Format("RiskAssessmentReport-{0}.pdf", userId.ToString());
        }
    }
}