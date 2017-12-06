namespace BusinessLogic.Services.Interfaces
{
    public interface ITaskPerformerService
    {
        void AssignUserToTask(int userId, int taskId);
        void RemoveAllUsersFromTask(int userId);



    }
}