namespace ServerSide.PdfGen
{
    using System;
    using System.Configuration;
    using System.IO;
    using System.Web;
    using Winnovative.WnvHtmlConvert;

    public class PdfManager
    {
         public Stream GetCertificate(string userId)
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
                var generateCertificateUrlPath = ConfigurationManager.AppSettings["GeneratePdfUrlPath"] + "?g=" + userId;
                var generateCertificateUrl = currenthost + generateCertificateUrlPath;
                pdfConverter.SavePdfFromUrlToFile(generateCertificateUrl, certificatePath);
            }

            return new FileStream(certificatePath, FileMode.Open, FileAccess.Read);
        }

        private string GetCertificateFileName(string userId)
        {            
            return string.Format("MirenaCertified-{0}.pdf", userId.ToString());
        }
    }
}