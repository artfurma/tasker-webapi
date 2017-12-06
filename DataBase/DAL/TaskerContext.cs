using DataBase.DbModels;
using Microsoft.EntityFrameworkCore;

namespace DataBase.DAL
{
    public class TaskerContext : DbContext
    {



        //dotnet ef migrations add InitialMigration -s ../TaskeR/
        //dotnet ef database update -s ../TaskeR/

        public TaskerContext(DbContextOptions<TaskerContext> options) : base(options)
        {
        }

        public DbSet<Milestone> Milestones { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<TaskPerformer> TaskPerformers { get; set; }
        public DbSet<TaskStatus> TaskStatuses { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Comment> Comments { get; set; }
        // public DbSet<TaskInControlPoint> TaskInControlPoints { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TaskPerformer>()
                .HasOne(p => p.Task)
                .WithMany(b => b.TaskPerformers)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<TaskInControlPoint>()
                .HasOne(p => p.Task)
                .WithMany(b => b.TaskInControlPoints)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<TaskInControlPoint>()
                .HasOne(p => p.Milestone)
                .WithMany(b => b.TaskInControlPoints)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Comment>()
                .HasOne(p => p.Milestone)
                .WithMany(b => b.Comments)
                .OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<ProjectUser>()
                .HasOne(p => p.Project)
                .WithMany(b => b.ProjectUsers)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Task>()
                .HasOne(p => p.Project)
                .WithMany(b => b.Tasks)
                .OnDelete(DeleteBehavior.Cascade);
        }


    }
}