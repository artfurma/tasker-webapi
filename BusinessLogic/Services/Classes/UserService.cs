using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using BusinessLogic.BusinessModels;
using BusinessLogic.Helpers;
using BusinessLogic.Services.Interfaces;
using DataBase.DbModels;
using DataBase.UnitOfWork;

namespace BusinessLogic.Services.Classes
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        public UserService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }

        public void AssignTaskToUser(int taskId, int userId)
        {
            var task = unitOfWork.TaskRepository.GetByID(taskId);
            var user = unitOfWork.UserRepository.GetByID(userId);
            var taskPerformer = new TaskPerformer() {Task = task, User = user};

            unitOfWork.TaskPerformerRepository.Insert(taskPerformer);
            unitOfWork.Save();
        }

        public IEnumerable<TaskModel> GetUsersTasks(int userId)
        {
            //nie wiem czy to bedzie dzialac
            var result = unitOfWork.TaskPerformerRepository.Get(x => x.User.ID == userId, null, "x=>x.Task").Select(x => x.Task);

            return mapper.Map<List<TaskModel>>(result);
        }

        public IEnumerable<UserFront> GetAllUsers(int projectId)
        {
            var result = unitOfWork.GetUserRepository().GetAllUsers(projectId);

            return mapper.Map<List<UserFront>>(result);
        }


        public User Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            // var user = _context.Users.SingleOrDefault(x => x.Username == username);
            var user = unitOfWork.UserRepository.Get(x => x.Username == username).SingleOrDefault();
            
            // check if username exists
            if (user == null)
                return null;

            // check if password is correct
            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            // authentication successful
            return user;
        }

        public UserFront GetById(int id)
        {
            var user = unitOfWork.UserRepository.GetByID(id);
            return mapper.Map<UserFront>(user);
        }

        public User Create(UserAdd userAdd, string password)
        {
            // map dto to entity
            var user = mapper.Map<User>(userAdd);

            // validation
            if (string.IsNullOrWhiteSpace(password))
                throw new AppException("Password is required");

            // if (_context.Users.Any(x => x.Username == user.Username))
            if(unitOfWork.GetUserRepository().CheckIfUserExists(user.Username))
                throw new AppException("Username " + user.Username + " is already taken");

            CreatePasswordHash(password, out var passwordHash, out var passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

//            _context.Users.Add(user);
//            _context.SaveChanges();
            unitOfWork.UserRepository.Insert(user);
            unitOfWork.Save();


            return user;
        }

        public void Update(UserEdit userParam, string password = null)
        {
            // var user = _context.Users.Find(userParam.Id);
            var user = unitOfWork.UserRepository.GetByID(userParam.ID);
            if (user == null)
                throw new AppException("User not found");

            if (userParam.Username != user.Username)
            {
                // username has changed so check if the new username is already taken
                //if (_context.Users.Any(x => x.Username == userParam.Username))
                if(unitOfWork.GetUserRepository().CheckIfUserExists(userParam.Username))
                    throw new AppException("Username " + userParam.Username + " is already taken");
            }

            // update user properties
            user.Name = userParam.Name;
            user.Surname = userParam.Surname;
            user.Username = userParam.Username;

            // update password if it was entered
            if (!string.IsNullOrWhiteSpace(password))
            {
                CreatePasswordHash(password, out var passwordHash, out var passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
            }

//            _context.Users.Update(user);
//            _context.SaveChanges();
            unitOfWork.UserRepository.Insert(user);
            unitOfWork.Save();
        }

        public void Delete(int id)
        {
            var user = unitOfWork.UserRepository.GetByID(id);
            // var user = _context.Users.Find(id);
            if (user != null)
            {
                unitOfWork.UserRepository.Delete(user);
                unitOfWork.Save();
            }
        }

        // private helper methods

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password))
                throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password))
                throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64)
                throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128)
                throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }
    }
}