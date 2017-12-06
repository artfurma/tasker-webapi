using System.Collections.Generic;
using DataBase.DTO;

namespace DataBase.Repos.Interfaces
{
    public interface IUserRepository
    {
        IEnumerable<UserDTO> GetAllUsers(int projectId);
        bool CheckIfUserExists(string username);


    }
}