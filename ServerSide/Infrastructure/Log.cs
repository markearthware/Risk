using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerSide.Infrastructure
{
    using System.Net;
    using System.Net.Mail;

    public static class Log
    {
        public static void SendExceptionEmail(Exception exception)
        {
            MailAddress to = new MailAddress("info@eriskapp.co.uk");

            MailAddress from = new MailAddress("info@eriskapp.co.uk");

            MailMessage mail = new MailMessage(@from, to);

            mail.Subject = "eRisk Service Fail";

            mail.Body = "Error: " + exception.Message + "Stack trace: " + exception.StackTrace;

            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.postmarkapp.com";
            smtp.Port = 25;

            var usernameAndPassword = "cbe37b71-f585-4509-9648-8a58147bf04f";
            smtp.Credentials = new NetworkCredential(
                usernameAndPassword, usernameAndPassword);

            smtp.Send(mail);
        }
    }
}