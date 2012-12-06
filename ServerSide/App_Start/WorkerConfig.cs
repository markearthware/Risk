[assembly: WebActivator.PostApplicationStartMethod(typeof(ServerSide.App_Start.WorkerConfig), "Initialise")]

namespace ServerSide.App_Start
{
    using System.Threading.Tasks;

    using ServerSide.Infrastructure;

    public static class WorkerConfig
    {
         public static void Initialise()
         {
             var queueProcessor = new PdfGenerationQueueProcessor(PdfGenerationQueue.Instance);
             Task.Factory.StartNew(queueProcessor.Run);
         }
    }
}