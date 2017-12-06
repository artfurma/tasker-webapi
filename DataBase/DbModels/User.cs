using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DataBase.DbModels
{
    public class User
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        // my projects as owner
        [InverseProperty("Owner")]
        public ICollection<Project> MyProjects { get; set; }
        public ICollection<ProjectUser> ProjectUsers { get; set; }
        public ICollection<TaskPerformer> TaskPerformers { get; set; }
        public ICollection<Comment> Comments { get; set; }

    }
}
