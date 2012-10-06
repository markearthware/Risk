using System.Net.Mail;
using Mvc.Mailer;

namespace ServerSide.Mailers
{ 
    public class UserMailer : MailerBase, IUserMailer 	
	{
		public UserMailer()
		{
			MasterName="_Layout";
		}
		
		public virtual MvcMailMessage Report(string attachmentPath)
		{
			//ViewBag.Data = someObject;
			return Populate(x =>
			{
				x.Subject = "Welcome";
				x.ViewName = "Welcome";
				x.To.Add("some-email@example.com");
                x.Attachments.Add(new Attachment(attachmentPath));
			});
		}
 	}
}