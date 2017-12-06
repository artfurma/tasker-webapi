using System;
using DataBase.DbModels;
using DataBase.Repos.Interfaces;

namespace DataBase.UnitOfWork
{
    public interface IUnitOfWork
    {
        IGenericRepository<Task> TaskRepository { get; }
        IGenericRepository<Project> ProjectRepository { get; }
        IGenericRepository<TaskStatus> TaskStatusRepository { get; }
        IGenericRepository<Milestone> MilestoneRepository { get; }
        IGenericRepository<User> UserRepository { get; }
        IGenericRepository<TaskPerformer> TaskPerformerRepository { get; }
        IGenericRepository<TaskInControlPoint> TaskInControlPointRepository { get; }
        IGenericRepository<ProjectUser> ProjectUserRepository { get; }
        IGenericRepository<Comment> CommentRepository { get; }




        ITaskRepository GetTaskRepository();
        IUserRepository GetUserRepository();


        void Save();
    }
}