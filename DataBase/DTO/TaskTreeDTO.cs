using System.Collections.Generic;

namespace DataBase.DTO
{
    public class TaskTreeDTO
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int StatusId { get; set; }
        public DbTask ParenTask { get; set; }
        public int? MainPerformerId { get; set; }
        public IEnumerable<UserDTO> TaskPerformers { get; set; }
        public IEnumerable<MilestoneDTO> ControlPointIds { get; set; }
    }
}