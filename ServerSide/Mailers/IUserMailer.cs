using ServerSide.Models;

namespace ServerSide.Mailers
{
    using ActionMailer.Net.Standalone;

    public interface IUserMailer
    {
        RazorEmailResult Report(string attachmentPath, Task task);
	}
}