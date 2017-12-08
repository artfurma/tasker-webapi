using System.Collections.Generic;
using BusinessLogic.BusinessModels;

namespace BusinessLogic.Services.Interfaces
{
    public interface ITaskService
    {
        TaskModel GetTaskById(int taskId);
        // IEnumerable<TaskModel> GetAllTasks();
        TaskModelRecursive AddTask(AddTask taskToAdd);
        void EditTask(EditTask editTask);
        void AssignTaskToParent(int taskId, int parentId);
        void ChangeTaskStatus(int taskId, int newStatusId);
        IEnumerable<TaskModelRecursive> GetAllTasksRecursive(int projectId);
        void DeleteTask(int taksId);
        void ChangeTaskParent(int taskId, int newParentId);


    }
}