using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLogic.BusinessModels;
using BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TaskeR.Controllers
{
    [Produces("application/json")]
    [Route("api/Comment")]
    public class CommentController : Controller
    {
        private readonly ICommentService commentService;

        public CommentController(ICommentService commentService)
        {
            this.commentService = commentService;
        }

        [HttpGet("{id}")]
        public IEnumerable<CommentModel> GetTaskComment(int id)
        {
            return commentService.GetTaskComments(id);
        }

        [HttpPost]
        public IActionResult PostComment([FromBody] CommentAdd commentAdd) 
        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

            var comment = commentService.AddComment(commentAdd);

            return Ok(comment);

        }


    }
}