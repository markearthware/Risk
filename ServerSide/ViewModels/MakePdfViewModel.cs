using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServerSide.Models;

namespace ServerSide.ViewModels
{
    public class MakePdfViewModel
    {
        public Task Task { get; set; }

        public List<Assessment> Assessments { get; set; }

        public string AssessmentNumber { get; set; }
    }
}