using Mvc.Mailer;
using ServerSide.Models;

namespace ServerSide.Mailers
{ 
    public interface IUserMailer
    {
        MvcMailMessage Report(string attachmentPath, Task task);
	}
}