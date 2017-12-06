using AutoMapper;
using BusinessLogic.Services.Interfaces;
using DataBase.DbModels;
using DataBase.UnitOfWork;

namespace BusinessLogic.Services.Classes
{
    public class TaskPerformerService : ITaskPerformerService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        public TaskPerformerService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }

        public void AssignUserToTask(int userId, int taskId)
        {
            var task = unitOfWork.TaskRepository.GetByID(taskId);
            var user = unitOfWork.UserRepository.GetByID(userId);

            var taskPerformer = new TaskPerformer();
            taskPerformer.Task = task;
            taskPerformer.User = user;

            unitOfWork.TaskPerformerRepository.Insert(taskPerformer);
            unitOfWork.Save();
        }

        public void RemoveAllUsersFromTask(int taskId)
        {
            var taskPerformersToRemove = unitOfWork.TaskPerformerRepository.Get(x => x.Task.ID == taskId, null, "Task");
            foreach (var taskPerformer in taskPerformersToRemove)
            {
                unitOfWork.TaskPerformerRepository.Delete(taskPerformer.ID);
            }
            unitOfWork.Save();
        }
    }
}