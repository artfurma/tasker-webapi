using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataBase.DbModels
{
    public class Project
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public User Owner { get; set; }

        public ICollection<Milestone> Milestones { get; set; }
        public ICollection<ProjectUser> ProjectUsers { get; set; }
        public ICollection<Task> Tasks { get; set; }

    }
}