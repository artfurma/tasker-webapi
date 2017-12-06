using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using BusinessLogic.BusinessModels;
using BusinessLogic.Services.Interfaces;
using DataBase.DbModels;
using DataBase.UnitOfWork;

namespace BusinessLogic.Services.Classes
{
    public class ProjectService : IProjectService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        public ProjectService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }

        public ProjectModel GetProjectById(int projectId)
        {
            var project = unitOfWork.ProjectRepository.GetByID(projectId);
            return mapper.Map<ProjectModel>(project);
        }

        public IEnumerable<ProjectModel> GetUsersProjects(int userId)
        {
            var projects = unitOfWork.ProjectUserRepository.Get(null, null, "User,Project").ToList();
                                                            
            var temp1 = projects.Where(x => x.UserId == userId);
                                                            
            var temp2 = temp1.Select(x => x.Project);
            return mapper.Map<List<ProjectModel>>(temp2);
        }

        public IEnumerable<UserInProject> GetProjectMembers(int projectId)
        {
            var users = unitOfWork.ProjectUserRepository.Get(x => x.ProjectId == projectId, null, "User")
                                                        .Select(y => y.User);

            return mapper.Map<List<UserInProject>>(users);
        }
        public ProjectModel AddProject(ProjectAdd projectToAdd)
        {
            var project = mapper.Map<Project>(projectToAdd);
            var owner = unitOfWork.UserRepository.GetByID(projectToAdd.OwnerId);
            project.Owner = owner;
            unitOfWork.ProjectRepository.Insert(project);

            var projectUser = new ProjectUser();
            projectUser.User = owner;
            projectUser.Project = project;

            unitOfWork.ProjectUserRepository.Insert(projectUser);

            unitOfWork.Save();

            return mapper.Map<ProjectModel>(project);

        }

        public void DeleteProject(int id)
        {
            var project = unitOfWork.ProjectRepository.GetByID(id);
            unitOfWork.ProjectRepository.Delete(project.ID);
            unitOfWork.Save();
        }

        public UserInProject AssignUserToProject(string userEmail, int projectId)
        {
            // var user = unitOfWork.UserRepository.GetByID(userId);
            var user = unitOfWork.UserRepository.Get(x => x.Email == userEmail).SingleOrDefault();
            if (user == null)
                return null; //tu jakis exception czy cos
            var project = unitOfWork.ProjectRepository.GetByID(projectId);
            var projectUser = new ProjectUser();
            projectUser.User = user;
            projectUser.Project = project;
            unitOfWork.ProjectUserRepository.Insert(projectUser);
            unitOfWork.Save();

            var assignedUser = new UserInProject();
            assignedUser.Id = projectUser.UserId;
            assignedUser.FirstName = user.Name;
            assignedUser.LastName = user.Surname;
            return assignedUser;
        }

        public void UnassignUserFromProject(int userId, int projectId)
        {
            var projectUser = unitOfWork.ProjectUserRepository.Get(x => x.UserId == userId && x.ProjectId == projectId).SingleOrDefault();
            if (projectUser != null)
            {
                unitOfWork.ProjectUserRepository.Delete(projectUser.ID);
                unitOfWork.Save();
            }
        }

        public void EditProject(ProjectModel projectEdit)
        {
            var project = unitOfWork.ProjectRepository.GetByID(projectEdit.Id);
            project.Name = projectEdit.Name;
            project.Description = projectEdit.Description;

            unitOfWork.ProjectRepository.Update(project);
            unitOfWork.Save();
        }
    }
}