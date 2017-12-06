using System;
using System.Collections.Generic;
using System.Text;

namespace DataBase.DbModels
{
    public class Milestone
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public DateTime EndDate { get; set; }
        public User Creator { get; set; }
        public Project Project { get; set; }

        public ICollection<TaskInControlPoint> TaskInControlPoints { get; set; }
        public ICollection<Comment> Comments { get; set; }

    }
}
