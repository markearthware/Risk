namespace ServerSide.Infrastructure
{
    public interface IPdfGenerationQueue
    {
        void Enqueue(PdfGenerationRequest request);

        PdfGenerationRequest Dequeue();
    }
}