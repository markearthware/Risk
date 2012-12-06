namespace ServerSide.Infrastructure
{
    using System.Configuration;
    using System.IO;
    using System.Runtime.Serialization.Formatters.Binary;

    using Microsoft.WindowsAzure;
    using Microsoft.WindowsAzure.StorageClient;

    public class PdfGenerationQueue : IPdfGenerationQueue
    {
        private static readonly object SyncRoot = new object();

        private static volatile IPdfGenerationQueue instance;

        private readonly CloudQueueClient client;

        private readonly CloudQueue queue;

        public PdfGenerationQueue(string connectionString, string queueName)
        {
            var account = CloudStorageAccount.Parse(connectionString);
            this.client = account.CreateCloudQueueClient();
            this.queue = this.client.GetQueueReference(queueName);

            this.queue.CreateIfNotExist();
        }

        public static IPdfGenerationQueue Instance
        {
            get
            {
                if (instance == null)
                {
                    lock (SyncRoot)
                    {
                        if (instance == null)
                        {
                            var connection = ConfigurationManager.AppSettings["AzureStorageConnectionString"];
                            var queue = ConfigurationManager.AppSettings["PdfGenerationQueueName"];
                            instance = new PdfGenerationQueue(connection, queue);
                        }
                    }
                }

                return instance;
            }
        }

        public PdfGenerationRequest Dequeue()
        {
            var message = this.queue.GetMessage();

            if (message == null)
            {
                return null;
            }

            this.queue.DeleteMessage(message);
            return GetEntityFromBytes(message.AsBytes);
        }

        public void Enqueue(PdfGenerationRequest request)
        {
            var data = GetEntityBytes(request);

            this.queue.AddMessage(new CloudQueueMessage(data));
        }

        private static byte[] GetEntityBytes(PdfGenerationRequest entity)
        {
            var serializer = new BinaryFormatter();
            var stream = new MemoryStream();

            serializer.Serialize(stream, entity);
            stream.Seek(0, SeekOrigin.Begin);

            var buffer = new byte[stream.Length];

            stream.Read(buffer, 0, buffer.Length);

            stream.Close();
            return buffer;
        }

        private static PdfGenerationRequest GetEntityFromBytes(byte[] buffer)
        {
            PdfGenerationRequest entity;
            var serializer = new BinaryFormatter();
            using (var stream = new MemoryStream(buffer))
            {
                entity = serializer.Deserialize(stream) as PdfGenerationRequest;
                stream.Close();
            }

            return entity;
        }
    }
}