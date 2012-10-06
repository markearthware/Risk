using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerSide.Models
{
    [Serializable()]    
    public class Assessment
    {
        public string Hazard { get; set; }

        public int  Likelihood { get; set; }

        public int Severity { get; set; }

        public int LikelihoodB { get; set; }

        public int SeverityB { get; set; }

        public string How { get; set; }

        public string Who { get; set; }

        public string FurtherDetails { get; set; }

        public string Controls { get; set; }

        public string ExistingControls { get; set; }
    }
}