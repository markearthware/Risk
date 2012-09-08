namespace ServerSide.PdfGen
{
    using System;
    using System.Configuration;
    using System.IO;
    using System.Web;
    using Winnovative.WnvHtmlConvert;

    public class PdfManager
    {
        public Stream GetPdf(string guid)
        {
            var certificateFileName = this.GetPdfFileName(guid);
            var certificateDirectory = HttpContext.Current.Server.MapPath(ConfigurationManager.AppSettings["PdfCacheDirectory"]);
            var certificatePath = Path.Combine(certificateDirectory, certificateFileName);

            return new FileStream(certificatePath, FileMode.Open, FileAccess.Read);
        }

        public void CreatePdf(string guid)
        {
            var certificateFileName = this.GetPdfFileName(guid);
            var certificateDirectory = HttpContext.Current.Server.MapPath(ConfigurationManager.AppSettings["PdfCacheDirectory"]);
            var certificatePath = Path.Combine(certificateDirectory, certificateFileName);

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
            var generateCertificateUrlPath = ConfigurationManager.AppSettings["GenerateCertificateUrlPath"] + "?g="
                                                + guid;
            var generateCertificateUrl = currenthost + generateCertificateUrlPath;
            pdfConverter.SavePdfFromUrlToFile(generateCertificateUrl, certificatePath);
        }

        private string GetPdfFileName(string guid)
        {
            return string.Format("RiskAssessmentReport" + "-{0}.pdf", guid);
        }
    }
}