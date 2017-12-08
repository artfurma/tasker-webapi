using System.Collections.Generic;
using AutoMapper;
using BusinessLogic.BusinessModels;
using BusinessLogic.Services.Interfaces;
using DataBase.DbModels;
using DataBase.UnitOfWork;

namespace BusinessLogic.Services.Classes
{
    public class CommentService : ICommentService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        public CommentService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }

        public IEnumerable<CommentModel> GetTaskComments(int taskId)
        {
            var comments = unitOfWork.CommentRepository.Get(x => x.Task.ID == taskId, null, "User,Milestone");
            return mapper.Map<List<CommentModel>>(comments);

        }

        public CommentModel AddComment(CommentAdd commentAdd)
        {
            var comment = mapper.Map<Comment>(commentAdd);

            var task = unitOfWork.TaskRepository.GetByID(commentAdd.TaskId);
            comment.Task = task;
            if (commentAdd.MilestoneID != null)
            {
                var milestone = unitOfWork.MilestoneRepository.GetByID(commentAdd.MilestoneID);
                comment.Milestone = milestone;
            }
            var user = unitOfWork.UserRepository.GetByID(commentAdd.UserId);
            comment.User = user;


            unitOfWork.CommentRepository.Insert(comment);
            unitOfWork.Save();

            return mapper.Map<CommentModel>(comment);
        }
    }
}