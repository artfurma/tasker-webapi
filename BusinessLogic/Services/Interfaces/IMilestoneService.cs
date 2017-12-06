using System.Collections.Generic;
using BusinessLogic.BusinessModels;

namespace BusinessLogic.Services.Interfaces
{
    public interface IMilestoneService
    {
        void AssignTaskToMilestone(int milestoneId, int taskId);
        void RemoveTaskFromMilestone(int milestoneId, int taskId);
        IEnumerable<MilestoneModel> GetAllMilestones(int projectId);
        void RemoveAllMilestonesFromTask(int taskId);
        int AddMilestone(MilestoneAdd milestoneAdd);
        void DeleteMilestone(int milestoneId);
        void EditMilestone(MilestoneModel milestone);




    }
}