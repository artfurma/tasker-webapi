using System;

namespace BusinessLogic.BusinessModels
{
    public class CommentAdd
    {
        public DateTime Date { get; set; }
        public string Content { get; set; }
        public int UserId { get; set; }
        public int? MilestoneID { get; set; }
        public int TaskId { get; set; }

    }
}