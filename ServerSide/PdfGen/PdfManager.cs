namespace ServerSide.PdfGen
{
    using System;
    using System.Configuration;
    using System.IO;

    using ServerSide.Infrastructure;

    using Winnovative.WnvHtmlConvert;

    public class PdfManager
    {
        private const string CertificateDirectory = @"C:\temp";

        public string CertificatePath { get; set; }

        public Stream GetCertificate(string reportId)
        {
            var certificateFileName = this.GetCertificateFileName(reportId);
            var certificatePath = Path.Combine(CertificateDirectory, certificateFileName);
            this.CertificatePath = certificatePath;

            if (!File.Exists(certificatePath))
            {
                if (!Directory.Exists(CertificateDirectory))
                {
                    Directory.CreateDirectory(CertificateDirectory);
                }

                // Generate PDF Certificate
                var pdfConverter = new PdfConverter();
                pdfConverter.PdfDocumentOptions.PdfPageOrientation = PDFPageOrientation.Landscape;
                pdfConverter.LicenseKey = ConfigurationManager.AppSettings["WinnovativeLicenseKey"];
                pdfConverter.PdfDocumentOptions.BottomMargin = 0;
                pdfConverter.PdfDocumentOptions.RightMargin = 0;
                pdfConverter.PdfDocumentOptions.GenerateSelectablePdf = true;
                pdfConverter.ActiveXEnabled = true;
                pdfConverter.PageWidth = 1050;
                pdfConverter.PageHeight = 790;
                pdfConverter.PdfDocumentOptions.SinglePage = true;
                var currenthost = ConfigurationManager.AppSettings["WebsiteDomain"] + "/";

                var generateCertificateUrlPath = ConfigurationManager.AppSettings["GeneratePdfUrlPath"] + "?g="
                                                 + reportId;
                var generateCertificateUrl = currenthost + generateCertificateUrlPath;
                try
                {
                    pdfConverter.SavePdfFromUrlToFile(generateCertificateUrl, certificatePath);
                }
                catch (Exception e)
                {
                    Log.SendExceptionEmail(e);
                }
            }

            return new FileStream(certificatePath, FileMode.Open, FileAccess.Read);
        }

        private string GetCertificateFileName(string reportId)
        {
            return string.Format("RiskAssessmentReport-{0}.pdf", reportId);
        }
    }
}