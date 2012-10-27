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

        public string GetCssClass(int a, int b)
        {
            var c1 = a * b;

            if (c1 < 5)
            {
                return "green";
            }
            else if (c1 < 12)
            {
                return "amber";
            }
            else
            {
                return "red";
            }
        }
    }
}