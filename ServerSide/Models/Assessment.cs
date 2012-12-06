namespace ServerSide.Models
{
    using System;

    [Serializable]
    public class Assessment
    {
        public string Controls { get; set; }

        public string ExistingControls { get; set; }

        public string FurtherDetails { get; set; }

        public string Hazard { get; set; }

        public string How { get; set; }

        public int Likelihood { get; set; }

        public int LikelihoodB { get; set; }

        public int Severity { get; set; }

        public int SeverityB { get; set; }

        public string Who { get; set; }
    }
}