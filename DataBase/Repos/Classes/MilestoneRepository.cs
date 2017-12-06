using System.Linq;
using AutoMapper;
using DataBase.DAL;
using DataBase.DbModels;
using DataBase.Repos.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DataBase.Repos.Classes
{
    public class MilestoneRepository : IMilestoneRepository
    {
        private readonly TaskerContext _taskerContext;
        private readonly IMapper _mapper;
        internal DbSet<Milestone> dbSet;

        public MilestoneRepository(TaskerContext taskerContext, IMapper mapper)
        {
            _taskerContext = taskerContext;
            dbSet = _taskerContext.Set<Milestone>();
            _mapper = mapper;
        }

//        public GetMilestonesFromTask(int taskId)
//        {
//            IQueryable<Milestone> query = dbSet;
//
//            query.Where(z => z.)Select(x=>x.TaskInControlPoints)
//        }
    }
}