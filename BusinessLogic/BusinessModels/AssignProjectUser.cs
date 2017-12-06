using System.ComponentModel.DataAnnotations;

namespace BusinessLogic.BusinessModels
{
    public class AssignProjectUser
    {
        [Required]
        public string UserEmail { get; set; }
        public int ProjectId { get; set; }

    }
}