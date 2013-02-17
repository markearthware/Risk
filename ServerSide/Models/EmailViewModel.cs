using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ServerSide.Models
{
    public class EmailViewModel
    {
        public List<Assessment> Assessments { get; set; }

        public Task Task { get; set; }

        public string ReportId { get; set; }
    }
}
