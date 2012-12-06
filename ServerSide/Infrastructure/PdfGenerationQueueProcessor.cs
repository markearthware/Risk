namespace ServerSide.Infrastructure
{
    using System;
    using System.Diagnostics;
    using System.Threading;
    using System.Web.Hosting;

    public class PdfGenerationQueueProcessor : IRegisteredObject
    {
        private readonly IPdfGenerationQueue pdfGenerationQueue;

        private bool stopped;

        private readonly PdfGenerationRequestProcessor pdfGenerationRequestProcessor;

        public PdfGenerationQueueProcessor(IPdfGenerationQueue pdfGenerationQueue)
        {
            HostingEnvironment.RegisterObject(this);
            this.pdfGenerationQueue = pdfGenerationQueue;
            this.pdfGenerationRequestProcessor = new PdfGenerationRequestProcessor();
        }

        public void Run()
        {
            this.stopped = false;

            while (!this.stopped)
            {
                try
                {
                    this.ProcessQueue();
                }
                catch (Exception ex)
                {
                    Trace.WriteLine("InputImportBatchQueueProcessor.Run: Unexpected exception, " + ex.StackTrace);
                }

                Thread.Sleep(1000);
            }

            HostingEnvironment.UnregisterObject(this);
        }

        private void ProcessQueue()
        {
            var current = this.pdfGenerationQueue.Dequeue();

            // TODO: Handle exceptions and requeue/log
            while (current != null)
            {
                this.pdfGenerationRequestProcessor.Process(current);

                // If a request has been received to stop, then drop out of the loop
                if (this.stopped)
                {
                    return;
                }

                current = this.pdfGenerationQueue.Dequeue();
            }
        }

        public void Stop(bool immediate)
        {
            this.stopped = true;
        }
    }
}