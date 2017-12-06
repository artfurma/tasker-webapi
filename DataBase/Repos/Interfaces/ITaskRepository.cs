using System.Collections.Generic;
using DataBase.DTO;

namespace DataBase.Repos.Interfaces
{
    public interface ITaskRepository
    {
        IEnumerable<TaskTreeDTO> GetAllTasks(int projectId);
        TaskDetails GetTaskById(int taskId);


    }
}