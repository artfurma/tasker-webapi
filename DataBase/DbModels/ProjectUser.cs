namespace DataBase.DbModels
{
    public class ProjectUser
    {
        public int ID { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }

    }
}