using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using DataBase.DAL;
using DataBase.DbModels;
using DataBase.DTO;
using DataBase.Repos.Interfaces;
using DataBase.UnitOfWork;
using Microsoft.EntityFrameworkCore;

namespace DataBase.Repos.Classes
{
    public class TaskRepository : ITaskRepository
    {

        // private readonly IUnitOfWork unitOfWork;
        private readonly TaskerContext _taskerContext;
        private readonly IMapper _mapper;
        internal DbSet<Task> dbSet;

        public TaskRepository(TaskerContext taskerContext, IMapper mapper)
        {
            _taskerContext = taskerContext;
            dbSet = _taskerContext.Set<Task>();
            _mapper = mapper;
        }

        public IEnumerable<TaskTreeDTO> GetAllTasks(int projectId)
        {
            IQueryable<Task> query = dbSet;

            var tasks = query.Where(x => x.Project.ID == projectId)
                                .ProjectTo<TaskTreeDTO>(_mapper.ConfigurationProvider).ToList();

            return tasks.AsEnumerable();
        }

        public TaskDetails GetTaskById(int taskId)
        {
            IQueryable<Task> query = dbSet;
            
            var tasks = query.Where(x => x.ID == taskId).ProjectTo<TaskDetails>(_mapper.ConfigurationProvider).ToList();
            return tasks.SingleOrDefault();
        }

//        public IEnumerable<DbTask> GetTasksByStatus(int statusId)
//        {
//            IQueryable query = dbSet;
//
//            var tasks = query.ProjectTo<DbTask>(_mapper.ConfigurationProvider);
//            return tasks.AsEnumerable();
//        }

    }
}