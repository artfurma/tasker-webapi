using System.Collections.Generic;

namespace BusinessLogic.BusinessModels
{
    public class EditTask
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<MilestoneModel> ControlPointIds { get; set; }
        public int? MainPerformer { get; set; }
        public int TaskStatusId { get; set; }
        public List<UserFront> TaskPerformers { get; set; }
        public int ParentTaskId { get; set; }



    }
}