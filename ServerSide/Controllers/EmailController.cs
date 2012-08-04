using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ServerSide.Controllers
{
    using System.IO;

    using ServerSide.Models;

    public class EmailController : ApiController
    {
        [HttpGet]
        public string Send([FromUri]Task task, [FromUri]dynamic assessments )
        {
            string appPath = "C:\\git\\Risk\\ServerSide\\App_Data\\Emails\\";
            string filePath = appPath + "test.txt";
            StreamWriter w;
            w = File.CreateText(filePath);
            w.WriteLine(task.Id);
            w.Flush();
            w.Close();
            return "Success";
        }
    }
}
