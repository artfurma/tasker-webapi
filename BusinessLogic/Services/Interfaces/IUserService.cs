using System.Collections.Generic;
using BusinessLogic.BusinessModels;
using DataBase.DbModels;

namespace BusinessLogic.Services.Interfaces
{
    public interface IUserService
    {
        IEnumerable<TaskModel> GetUsersTasks(int userId);
        void AssignTaskToUser(int taskId, int userId);
        IEnumerable<UserFront> GetAllUsers(int projectId);
        User Authenticate(string username, string password);
        User Create(UserAdd userAdd, string password);
        UserFront GetById(int id);
        void Update(UserEdit userParam, string password = null);
        void Delete(int id);







    }
}