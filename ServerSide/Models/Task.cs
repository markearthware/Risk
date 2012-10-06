namespace ServerSide.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    [Serializable()]    
    public class Task
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Site { get; set; }

        public DateTime DateStarted { get; set; }

        public DateTime DateFinished { get; set; }

        public string AssessorName { get; set; }
        
        public string AssessorEmail { get; set; }

        public string ManagerName { get; set; }

        public string ManagerEmail { get; set; }
    }
}