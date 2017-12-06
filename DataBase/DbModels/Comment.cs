using System;

namespace DataBase.DbModels
{
    public class Comment
    {
        public int ID { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; }

        public User User { get; set; }
        public Milestone Milestone { get; set; }
        public Task Task { get; set; }

    }
}