using System.Net.Mail;
using Mvc.Mailer;
using ServerSide.Models;
using System;

namespace ServerSide.Mailers
{ 
    public class UserMailer : MailerBase, IUserMailer 	
	{
        public UserMailer()
        {
            MasterName = "_Layout";
        }

        public virtual MvcMailMessage Report(string attachmentPath, Task task)
        {
            ViewData["TaskName"] = task.Name;
            ViewData["Name"] = task.AssessorName;
            ViewData["Site"] = task.Site;
            var date = DateTime.Now.ToShortDateString();
            ViewData["Date"] = date;

            return Populate(x =>
            {
                x.Subject = string.Format("eRisk - Risk assessment report for '{0}' at '{1}' - {2}", task.Name, task.Site, date);
                x.ViewName = "ForUser";
                x.To.Add(task.AssessorEmail);
                x.Attachments.Add(new Attachment(attachmentPath));
                if (task.ManagerEmail != null)
                {
                    x.CC.Add(task.ManagerEmail);
                }
            });
        }
 	}
}