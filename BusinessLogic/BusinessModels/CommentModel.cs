using System;

namespace BusinessLogic.BusinessModels
{
    public class CommentModel
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Content { get; set; }
        public int MilestoneId { get; set; }
        public string User { get; set; }

    }
}