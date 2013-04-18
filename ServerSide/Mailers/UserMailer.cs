using System.Net.Mail;
using ServerSide.Models;
using System;

namespace ServerSide.Mailers
{
    using System.IO;

    using ActionMailer.Net.Standalone;

    public class UserMailer : RazorMailerBase
	{
        public virtual RazorEmailResult Report(string attachmentPath, Task task)
        {
            var email = Email("ForUser", task, null, true);
            email.Mail.Attachments.Add(new Attachment(attachmentPath));
            email.Mail.To.Add(task.AssessorEmail);
            if (task.ManagerEmail != null)
            {
                email.Mail.CC.Add(task.ManagerEmail);
            }
            email.Mail.Subject = string.Format("iRisk Assess - Risk assessment report for '{0}' at '{1}' - {2}", task.Name, task.Site, DateTime.Now.ToString("dd MMM yyyy"));

            return email;
        }

        public virtual RazorEmailResult Problem(Task task)
        {
            var email = Email("Problem", task, null, true);
            email.Mail.To.Add(task.AssessorEmail);
            email.Mail.Subject = string.Format("iRisk Assess - Risk assessment report generation failed");
                
            return email;
        }

        public override string ViewPath
        {
            get
            {
                return Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Views\\UserMailer");
            }
        }
	}
}