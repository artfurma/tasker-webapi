namespace DataBase.DbModels
{
    public class TaskPerformer
    {
        public int ID { get; set; }
        public User User { get; set; }
        public Task Task { get; set; }

    }
}