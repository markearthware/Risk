using System.Net.Mail;
using ServerSide.Models;
using System;

namespace ServerSide.Mailers
{
    using ActionMailer.Net.Standalone;

    public class UserMailer : RazorMailerBase, IUserMailer 	
	{
        private string masterName;

        public UserMailer()
        {
            this.masterName = "_Layout";
        }

        public virtual RazorEmailResult Report(string attachmentPath, Task task)
        {
            var email = Email("ForUser.cshtml", task, this.masterName, true);
            email.Mail.Attachments.Add(new Attachment(attachmentPath));
            email.Mail.To.Add(task.AssessorEmail);
            if (task.ManagerEmail != null)
            {
                email.Mail.CC.Add(task.ManagerEmail);
            }
            email.Mail.Subject = string.Format("eRisk - Risk assessment report for '{0}' at '{1}' - {2}", task.Name, task.Site, DateTime.Now.ToShortDateString());

            return email;
        }

        public override string ViewPath
        {
            get
            {
                return "UserMailer";
            }
        }
	}
}