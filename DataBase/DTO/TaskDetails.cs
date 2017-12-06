using System.Collections.Generic;
using DataBase.DbModels;

namespace DataBase.DTO
{
    public class TaskDetails
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int  StatusId { get; set; }
        public IEnumerable<UserDTO> TaskPerformers { get; set; }
        public int? MainPerformer { get; set; }
        public IEnumerable<MilestoneDTO> ControlPointIds { get; set; }

    }
}