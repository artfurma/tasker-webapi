using System;
using System.Collections.Generic;
using System.Text;

namespace DataBase.DbModels
{
    public class TaskStatus
    {
        public int ID { get; set; }
        public StatusForTask Name { get; set; }

        public ICollection<Task> Tasks { get; set; }
    }

    public enum StatusForTask
    {
        New = 1,
        InProgress = 2,
        Done = 3
    }
}
