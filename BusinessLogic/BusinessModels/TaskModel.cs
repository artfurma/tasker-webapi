using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.BusinessModels
{
    public class TaskModel
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description  { get; set; }
        public int StatusId { get; set; }
        public List<UserFront> TaskPerformers { get; set; }
        public int MainPerformer { get; set; }
        public List<MilestoneModel> ControlPointIds { get; set; }

    }
}
