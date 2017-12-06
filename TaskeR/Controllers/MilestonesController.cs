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
    [Route("api/Milestones")]
    public class MilestonesController : Controller
    {
        private readonly IMilestoneService _milestoneService;
        public MilestonesController(IMilestoneService milestoneService)
        {
            _milestoneService = milestoneService;
        }

        [HttpGet("GetAll/{projectId}")]
        public IEnumerable<MilestoneModel> GetAll(int projectId)
        {
            var milestones = _milestoneService.GetAllMilestones(projectId);

            return milestones;
        }

        [HttpPost]
        public IActionResult Create([FromBody] MilestoneAdd milestoneAdd)
        {
            var newId = _milestoneService.AddMilestone(milestoneAdd);

            return Ok(newId);
        }

        [HttpDelete("{milestoneId}")]
        public IActionResult Delete(int milestoneId)
        {
            _milestoneService.DeleteMilestone(milestoneId);

            return NoContent();
        }

        [HttpPut]
        public IActionResult Update([FromBody] MilestoneModel milestone)
        {
            _milestoneService.EditMilestone(milestone);

            return NoContent();
        }

    }
}