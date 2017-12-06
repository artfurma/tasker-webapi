using System;
using System.ComponentModel;
using AutoMapper;
using DataBase.DAL;
using DataBase.DbModels;
using DataBase.Repos.Classes;
using DataBase.Repos.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace DataBase.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly TaskerContext _taskerContext;
        private IGenericRepository<Task> _tasksRepository;
        private IGenericRepository<TaskStatus> _tasksStatusRepository;
        private IGenericRepository<Milestone> _milestoneRepo;
        private IGenericRepository<User> _userRepo;
        private IGenericRepository<TaskPerformer> _taskPerformerRepo;
        private IGenericRepository<TaskInControlPoint> _taskInControlPointRepo;
        private IGenericRepository<ProjectUser> _projectUserRepo;
        private IGenericRepository<Project> _projectRepo;
        private IGenericRepository<Comment> _commentRepo;







        private readonly IMapper _mapper;

        public UnitOfWork(TaskerContext taskerContext, IMapper mapper)
        {
            _taskerContext = taskerContext;
            _mapper = mapper;
        }

        public IGenericRepository<Task> TaskRepository =>
                    _tasksRepository ?? (_tasksRepository = new GenericRepository<Task>(_taskerContext));

        public IGenericRepository<Project> ProjectRepository =>
            _projectRepo ?? (_projectRepo = new GenericRepository<Project>(_taskerContext));

        public IGenericRepository<TaskStatus> TaskStatusRepository =>
            _tasksStatusRepository ?? (_tasksStatusRepository = new GenericRepository<TaskStatus>(_taskerContext));

        public IGenericRepository<Milestone> MilestoneRepository =>
            _milestoneRepo ?? (_milestoneRepo = new GenericRepository<Milestone>(_taskerContext));

        public IGenericRepository<User> UserRepository =>
            _userRepo ?? (_userRepo = new GenericRepository<User>(_taskerContext));

        public IGenericRepository<TaskPerformer> TaskPerformerRepository =>
            _taskPerformerRepo ?? (_taskPerformerRepo = new GenericRepository<TaskPerformer>(_taskerContext));

        public IGenericRepository<TaskInControlPoint> TaskInControlPointRepository =>
            _taskInControlPointRepo ?? (_taskInControlPointRepo = new GenericRepository<TaskInControlPoint>(_taskerContext));

        public IGenericRepository<ProjectUser> ProjectUserRepository =>
            _projectUserRepo ?? (_projectUserRepo = new GenericRepository<ProjectUser>(_taskerContext));

        public IGenericRepository<Comment> CommentRepository =>
            _commentRepo ?? (_commentRepo = new GenericRepository<Comment>(_taskerContext));

        public ITaskRepository GetTaskRepository()
        {
            return new TaskRepository(_taskerContext, _mapper);
        }

        public IUserRepository GetUserRepository()
        {
            return new UserRepository(_taskerContext, _mapper);
        }

        public void Save()
        {
            _taskerContext.SaveChanges();
        }
    }
}