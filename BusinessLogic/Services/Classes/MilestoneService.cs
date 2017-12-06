using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using BusinessLogic.BusinessModels;
using BusinessLogic.Services.Interfaces;
using DataBase.DbModels;
using DataBase.UnitOfWork;

namespace BusinessLogic.Services.Classes
{
    public class MilestoneService : IMilestoneService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        public MilestoneService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }

        public int AddMilestone(MilestoneAdd milestoneAdd)
        {
            var milestone = new Milestone();
            milestone.Name = milestoneAdd.Name;
            milestone.EndDate = milestoneAdd.EndDate;

            var project = unitOfWork.ProjectRepository.GetByID(milestoneAdd.ProjectId);
            milestone.Project = project;

            var user = unitOfWork.UserRepository.GetByID(milestoneAdd.CreatorId);
            milestone.Creator = user;
            unitOfWork.MilestoneRepository.Insert(milestone);
            unitOfWork.Save();

            return milestone.ID;

        }

        public void EditMilestone(MilestoneModel milestone)
        {
            var milestoneDb = unitOfWork.MilestoneRepository.GetByID(milestone.ID);
            milestoneDb.Name = milestone.Name;
            milestoneDb.EndDate = milestone.EndDate;

            unitOfWork.MilestoneRepository.Update(milestoneDb);
            unitOfWork.Save();
        }
        public void DeleteMilestone(int milestoneId)
        {
            var milestone = unitOfWork.MilestoneRepository.GetByID(milestoneId);
            unitOfWork.MilestoneRepository.Delete(milestone.ID);
            unitOfWork.Save();
        }

        public IEnumerable<MilestoneModel> GetAllMilestones(int projectId)
        {
            var milestones = unitOfWork.MilestoneRepository.Get(x => x.Project.ID == projectId, null, "Project");
            return mapper.Map<List<MilestoneModel>>(milestones);
        }

        public void AssignTaskToMilestone(int milestoneId, int taskId)
        {
            var milestone = unitOfWork.MilestoneRepository.GetByID(milestoneId);
            var task = unitOfWork.TaskRepository.GetByID(taskId);

            // milestone.Tasks.Add(task);
            var taskInMilestone = new TaskInControlPoint();
            taskInMilestone.Task = task;
            taskInMilestone.Milestone = milestone;

            // unitOfWork.MilestoneRepository.Update(milestone);
            unitOfWork.TaskInControlPointRepository.Insert(taskInMilestone);
            unitOfWork.Save();
        }

        public void RemoveTaskFromMilestone(int milestoneId, int taskId)
        {
            var milestone = unitOfWork.MilestoneRepository.GetByID(milestoneId);
            var task = unitOfWork.TaskRepository.GetByID(taskId);

            //milestone.Tasks.Remove(task);

            var taskInMilestone =
                unitOfWork.TaskInControlPointRepository.Get(x => x.Task == task && x.Milestone == milestone).SingleOrDefault();
            unitOfWork.TaskInControlPointRepository.Delete(taskInMilestone.ID);

            //unitOfWork.MilestoneRepository.Update(milestone);
            unitOfWork.Save();
        }

        public void RemoveAllMilestonesFromTask(int taskId)
        {
            var milestonesToRemove =
                unitOfWork.TaskInControlPointRepository.Get(x => x.Task.ID == taskId, null, "Task");
            foreach (var taskInControlPoint in milestonesToRemove)
            {
                unitOfWork.TaskInControlPointRepository.Delete(taskInControlPoint.ID);
            }
            unitOfWork.Save();
        }
    }
}