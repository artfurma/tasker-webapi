namespace DataBase.DbModels
{
    public class TaskInControlPoint
    {
        public int ID { get; set; }
        public Task Task { get; set; }
        public Milestone Milestone { get; set; }
    }
}