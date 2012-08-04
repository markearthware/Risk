using System;
using System.IO;
using System.Net;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Net.Http;

namespace Westwind.Web.WebApi
{
    public class JsonpFormatter : JsonMediaTypeFormatter
    {

        public JsonpFormatter()
        {
            SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/json"));
            SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/javascript"));
            //MediaTypeMappings.Add(new UriPathExtensionMapping("jsonp", "application/json"));

            JsonpParameterName = "callback";
        }

        public string JsonpParameterName { get; set; }


        private string JsonpCallbackFunction;


        public override bool CanWriteType(Type type)
        {
            return true;
        }

        public override MediaTypeFormatter GetPerRequestFormatterInstance(Type type,
                                                HttpRequestMessage request,
                                                MediaTypeHeaderValue mediaType)
        {
            var formatter = new JsonpFormatter()
            {
                JsonpCallbackFunction = GetJsonCallbackFunction(request)
            };

            return formatter;
        }

        public override Task WriteToStreamAsync(Type type, object value, Stream stream,
                                                     HttpContentHeaders contentHeaders,
                                                    TransportContext transportContext)
        {
            if (!string.IsNullOrEmpty(JsonpCallbackFunction))
            {
                return Task.Factory.StartNew(() =>
                {
                    var writer = new StreamWriter(stream);
                    writer.Write(JsonpCallbackFunction + "(");
                    writer.Flush();

                    base.WriteToStreamAsync(type, value, stream, contentHeaders,
                                            transportContext).Wait();

                    writer.Write(")");
                    writer.Flush();
                });
            }
            else
            {
                return base.WriteToStreamAsync(type, value, stream, contentHeaders, transportContext);
            }
        }

        private string GetJsonCallbackFunction(HttpRequestMessage request)
        {
            if (request.Method != HttpMethod.Get)
                return null;

            var query = HttpUtility.ParseQueryString(request.RequestUri.Query);
            var queryVal = query[this.JsonpParameterName];

            if (string.IsNullOrEmpty(queryVal))
                return null;

            return queryVal;
        }
    }
}