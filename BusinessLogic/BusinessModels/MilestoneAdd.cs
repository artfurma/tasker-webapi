using System;
using DataBase.DbModels;

namespace BusinessLogic.BusinessModels
{
    public class MilestoneAdd
    {
        public string Name { get; set; }
        public DateTime EndDate { get; set; }
        public int CreatorId { get; set; }
        public int ProjectId { get; set; }


    }
}