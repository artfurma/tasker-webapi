using System.Collections.Generic;
using BusinessLogic.BusinessModels;

namespace BusinessLogic.Services.Interfaces
{
    public interface ICommentService
    {
        IEnumerable<CommentModel> GetTaskComments(int taskId);
        CommentModel AddComment(CommentAdd commentAdd);

    }
}