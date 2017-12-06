using System;
using System.Collections.Generic;
using System.Text;

namespace DataBase.DbModels
{
    public class Task
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public Task ParenTask { get; set; }
        public User Creator { get; set; }
        public TaskStatus TaskStatus { get; set; }
        public User MainPerformer { get; set; }
        public Project Project { get; set; }

        public ICollection<TaskPerformer> TaskPerformers { get; set; }
        public ICollection<Task> ChildrenTasks { get; set; }
        public ICollection<TaskInControlPoint> TaskInControlPoints { get; set; }
        public ICollection<Comment> Comments { get; set; }


    }
}
