using System.Collections.Generic;
using BusinessLogic.BusinessModels;
using DataBase.DTO;

namespace BusinessLogic.Services.Interfaces
{
    public interface IProjectService
    {
        IEnumerable<ProjectModel> GetUsersProjects(int userId);
        ProjectModel AddProject(ProjectAdd projectToAdd);
        void DeleteProject(int id);
        UserInProject AssignUserToProject(string userEmail, int projectId);
        void UnassignUserFromProject(int userId, int projectId);
        ProjectModel GetProjectById(int projectId);
        IEnumerable<UserInProject> GetProjectMembers(int projectId);
        void EditProject(ProjectModel projectEdit);


    }
}