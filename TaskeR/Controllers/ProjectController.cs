using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLogic.BusinessModels;
using BusinessLogic.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataBase.DAL;
using DataBase.DbModels;

namespace TaskeR.Controllers
{
    [Produces("application/json")]
    [Route("api/Project")]
    public class ProjectController : Controller
    {
        private readonly IProjectService projectService;
        public ProjectController(IProjectService projectService)
        {
            this.projectService = projectService;
        }


        // GET: api/Project/5
        [HttpGet("{projectId}")]
        public ProjectModel GetProject([FromRoute] int projectId)
        {

            var project = projectService.GetProjectById(projectId);

            return project;
        }

        // GET: api/Project/user/5
        [HttpGet("user/{userId}")]
        public IEnumerable<ProjectModel> GetProjects([FromRoute] int userId)
        {

            var projects = projectService.GetUsersProjects(userId);


            return projects;
        }

        // GET: api/Project/members
        [HttpGet("members")]
        public IEnumerable<UserInProject> GetMembers(int projectId)
        {

            var projects = projectService.GetProjectMembers(projectId);

            return projects;
        }


        // POST: api/Project
        [HttpPost]
        public IActionResult PostProject([FromBody] ProjectAdd project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newProject = projectService.AddProject(project);

            return Ok(newProject);

        }

        // POST: api/Project
        [HttpPost("assign")]
        public IActionResult AssignMember([FromBody] AssignProjectUser projectUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var assignedMember = projectService.AssignUserToProject(projectUser.UserEmail, projectUser.ProjectId);

            return Ok(assignedMember);

        }

        [HttpPut]
        public IActionResult EditProject([FromBody] ProjectModel editProject)
        {
            projectService.EditProject(editProject);

            return Ok(editProject);
        }

        // DELETE: api/Project/5
        [HttpDelete("{id}")]
        public IActionResult DeleteProject([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            this.projectService.DeleteProject(id);

            return NoContent();
        }

        // DELETE: api/Project/unassign/5/6
        [HttpDelete("unassign/{userId}/{projectId}")]
        public IActionResult DeleteProject([FromRoute] int userId, [FromRoute] int projectId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            this.projectService.UnassignUserFromProject(userId, projectId);

            return NoContent();
        }


    }
}