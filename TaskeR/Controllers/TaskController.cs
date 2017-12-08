using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLogic.BusinessModels;
using BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TaskeR.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/Task")]
    public class TaskController : Controller
    {
        private readonly ITaskService taskService;
        private readonly IMilestoneService milestoneService;
        private readonly ITaskPerformerService taskPerformerService;

        public TaskController(ITaskService taskService, IMilestoneService milestoneService, ITaskPerformerService taskPerformerService)
        {
            this.taskService = taskService;
            this.milestoneService = milestoneService;
            this.taskPerformerService = taskPerformerService;
        }

        [HttpGet("GetTasks/{projectId}")]
        public IEnumerable<TaskModelRecursive> GetTasks(int projectId)
        {
            var list = taskService.GetAllTasksRecursive(projectId);
            return list;
        }

        [HttpGet("{id}")]
        public TaskModel GetById(int id)
        {
            var task = taskService.GetTaskById(id);
            return task;
        }

        [HttpPost]
        public IActionResult Create([FromBody] AddTask taskToAdd)
        {
            if (taskToAdd == null)
            {
                return BadRequest();
            }

            var task = taskService.AddTask(taskToAdd);

            foreach (var milestoneModel in taskToAdd.ControlPointIds)
            {
                milestoneService.AssignTaskToMilestone(milestoneModel.ID, task.ID);
            }

            foreach (var taskPerformer in taskToAdd.TaskPerformers)
            {
                taskPerformerService.AssignUserToTask(taskPerformer.Id, task.ID);
            }


            return Ok(task);
        }

        [HttpPut]
        public IActionResult Update([FromBody] EditTask item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            taskService.EditTask(item);

            milestoneService.RemoveAllMilestonesFromTask(item.Id);
            foreach (var milestoneModel in item.ControlPointIds)
            {
                milestoneService.AssignTaskToMilestone(milestoneModel.ID, item.Id);
            }

            taskPerformerService.RemoveAllUsersFromTask(item.Id);
            foreach (var taskPerformer in item.TaskPerformers)
            {
                taskPerformerService.AssignUserToTask(taskPerformer.Id, item.Id);
            }

            return new NoContentResult();
        }

        [HttpPut("changeparent")]
        public IActionResult ChangeParent([FromBody] ChangeParentModel model)
        {
            
            taskService.ChangeTaskParent(model.TaskId, model.NewParentId);

            return Ok("Zmieniony parent");
        }

        [HttpGet]
        [Route("ToParent/{taskId}/{parentId}")]
        public IActionResult ToParent(int taskId, int parentId)
        {
            taskService.AssignTaskToParent(taskId, parentId);
            return Ok();
        }

        [HttpPost]
        [Route("status")]
        public IActionResult ChangeTaskStatus([FromBody] TaskStatusModel taskStatusModel)
        {
            taskService.ChangeTaskStatus(taskStatusModel.TaskId,taskStatusModel.Status);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            taskService.DeleteTask(id);
            return new NoContentResult();
        }
    }
}