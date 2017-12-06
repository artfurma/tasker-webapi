using System.Collections.Generic;
using DataBase.DbModels;

namespace DataBase.DTO
{
    public class Node
    {
        public List<Node> Children = new List<Node>();
        public Node Parent { get; set; }
        public TaskTreeDTO Source { get; set; }
    }

}