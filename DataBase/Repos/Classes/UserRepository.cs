using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using DataBase.DAL;
using DataBase.DbModels;
using DataBase.DTO;
using DataBase.Repos.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DataBase.Repos.Classes
{
    public class UserRepository : IUserRepository
    {
        // private readonly IUnitOfWork unitOfWork;
        private readonly TaskerContext _taskerContext;
        private readonly IMapper _mapper;
        internal DbSet<User> dbSet;
        internal DbSet<ProjectUser> dbSetProjectUsers;


        public UserRepository(TaskerContext taskerContext, IMapper mapper)
        {
            _taskerContext = taskerContext;
            dbSet = _taskerContext.Set<User>();
            dbSetProjectUsers = _taskerContext.Set<ProjectUser>();
            _mapper = mapper;
        }

        public IEnumerable<UserDTO> GetAllUsers(int projectId)
        {
//            IQueryable<User> query = dbSet;
//
//            var users = query.ProjectTo<UserDTO>(_mapper.ConfigurationProvider);
//            return users.AsEnumerable();

            IQueryable<ProjectUser> query = dbSetProjectUsers;

            var users = query.Where(x => x.ProjectId == projectId).Select(y => y.User).AsEnumerable();
            var toReturn = _mapper.Map<IEnumerable<UserDTO>>(users);
            return toReturn;

        }

        public bool CheckIfUserExists(string username)
        {

            return dbSet.Any(x => x.Username == username);
        }
    }
}