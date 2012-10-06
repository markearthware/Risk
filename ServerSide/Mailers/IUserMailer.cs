using Mvc.Mailer;

namespace ServerSide.Mailers
{ 
    public interface IUserMailer
    {
			MvcMailMessage Report(string attachmentPath);
	}
}