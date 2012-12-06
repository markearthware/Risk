namespace ServerSide.Infrastructure
{
    using System;
    using System.Collections.Generic;

    using ServerSide.Models;

    [Serializable]
    public class PdfGenerationRequest
    {
        private readonly Task task;

        private readonly List<Assessment> assessments;

        public PdfGenerationRequest(Task task, List<Assessment> assessments)
        {
            this.task = task;
            this.assessments = assessments;
        }

        public Task Task
        {
            get
            {
                return this.task;
            }
        }

        public List<Assessment> Assessments
        {
            get
            {
                return this.assessments;
            }
        }
    }
}