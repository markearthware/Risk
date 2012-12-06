namespace ServerSide.Models
{
    using System;

    [Serializable]
    public class Task
    {
        public string AssessorEmail { get; set; }

        public string AssessorName { get; set; }

        public DateTime DateFinished { get; set; }

        public DateTime DateStarted { get; set; }

        public int Id { get; set; }

        public string ManagerEmail { get; set; }

        public string ManagerName { get; set; }

        public string Name { get; set; }

        public string Site { get; set; }
    }
}