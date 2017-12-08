using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using BusinessLogic.BusinessModels;
using BusinessLogic.Services.Interfaces;
using DataBase.DbModels;
using DataBase.DTO;
using DataBase.UnitOfWork;

namespace BusinessLogic.Services.Classes
{
    public class TaskService : ITaskService
    {

        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        public TaskService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }

//        public IEnumerable<TaskModel> GetAllTasks()
//        {
//
//            var dbTasks = unitOfWork.GetTaskRepository().GetAllTasks();
//            var tasks = mapper.Map<List<TaskModel>>(dbTasks);
//            return tasks;
//
//        }

        public IEnumerable<TaskModelRecursive> GetAllTasksRecursive(int projectId)
        {
  
            var dbTasks = unitOfWork.GetTaskRepository().GetAllTasks(projectId).ToList();
            var tasksTree = BuildTreeAndGetRoots(dbTasks);
            var mappedTree = mapper.Map<List<TaskModelRecursive>>(tasksTree);

            return mappedTree;
        }



        public TaskModel GetTaskById(int taskId)
        {
            var dbTask = unitOfWork.GetTaskRepository().GetTaskById(taskId);
            return mapper.Map<TaskModel>(dbTask);
        }

        public TaskModelRecursive AddTask(AddTask taskToAdd)
        {
            var task = mapper.Map<Task>(taskToAdd);
            var taskReturn = mapper.Map<TaskModelRecursive>(taskToAdd);

            if (taskToAdd.MainPerformer != null)
            {
                var mainPerformer = unitOfWork.UserRepository.GetByID(taskToAdd.MainPerformer);
                task.MainPerformer = mainPerformer;

            }
            else
            {
                task.MainPerformer = null;
            }

            var project = unitOfWork.ProjectRepository.GetByID(taskToAdd.ProjectId);
            task.Project = project;

            var taskStatus = unitOfWork.TaskStatusRepository.Get(x => (int)x.Name == taskToAdd.TaskStatusId).SingleOrDefault();
            task.TaskStatus = taskStatus;

            if (taskToAdd.ParentTaskId != null)
            {
                var parentTask = unitOfWork.TaskRepository.GetByID(taskToAdd.ParentTaskId);
                task.ParenTask = parentTask;
            }
            else
            {
                task.ParenTask = null;
            }

            unitOfWork.TaskRepository.Insert(task);

            unitOfWork.Save();

            taskReturn.ID = task.ID;
            taskReturn.Children = new List<TaskModelRecursive>();

            return taskReturn;
        }

        public void DeleteTask(int taksId)
        {
            // var taskToDelete = unitOfWork.TaskRepository.GetByID(taksId);
            var taskToDelete = unitOfWork.TaskRepository.Get(x => x.ID == taksId, null, "ChildrenTasks,ParenTask").SingleOrDefault();
            unitOfWork.TaskRepository.Delete(taskToDelete.ID);

            // ustawienie dzieci
            foreach (var childrenTask in taskToDelete.ChildrenTasks)
            {
                childrenTask.ParenTask = taskToDelete.ParenTask;
            }

            unitOfWork.Save();

        }

        public void EditTask(EditTask editTask)
        {
            var taskToEdit = mapper.Map<Task>(editTask);

            var mainPerformer = unitOfWork.UserRepository.GetByID(editTask.MainPerformer);
            taskToEdit.MainPerformer = mainPerformer;


            var taskStatus = unitOfWork.TaskStatusRepository.Get(x => (int)x.Name == editTask.TaskStatusId).SingleOrDefault();
            taskToEdit.TaskStatus = taskStatus;

            var parentTask = unitOfWork.TaskRepository.GetByID(editTask.ParentTaskId);
            taskToEdit.ParenTask = parentTask;

            unitOfWork.TaskRepository.Update(taskToEdit);
            unitOfWork.Save();
        }

        public void AssignTaskToParent(int taskId, int parentId)
        {
            var child = unitOfWork.TaskRepository.GetByID(taskId);
            var parent = unitOfWork.TaskRepository.GetByID(parentId);

            parent.ChildrenTasks.Add(child);
            child.ParenTask = parent;

            unitOfWork.TaskRepository.Update(child);
            unitOfWork.TaskRepository.Update(parent);
            unitOfWork.Save();
        }

        public void ChangeTaskStatus(int taskId, int newStatus)
        {
            var task = unitOfWork.TaskRepository.GetByID(taskId);
            var status = unitOfWork.TaskStatusRepository.Get(x => (int)x.Name == newStatus).SingleOrDefault();

            task.TaskStatus = status;

            unitOfWork.TaskRepository.Update(task);
            unitOfWork.Save();

        }

        public void ChangeTaskParent(int taskId, int newParentId)
        {
            var task = unitOfWork.TaskRepository.GetByID(taskId);
            var parent = unitOfWork.TaskRepository.GetByID(newParentId);

            task.ParenTask = parent;
            unitOfWork.TaskRepository.Update(task);
            unitOfWork.Save();
        }

        private List<Node> BuildTreeAndGetRoots(List<TaskTreeDTO> actualObjects)
        {
            var lookup = new Dictionary<int, Node>();
            var rootNodes = new List<Node>();

            foreach (var item in actualObjects)
            {
                // add us to lookup
                Node ourNode;
                if (lookup.TryGetValue(item.ID, out ourNode))
                {   // was already found as a parent - register the actual object
                    ourNode.Source = item;
                }
                else
                {
                    ourNode = new Node() { Source = item };
                    lookup.Add(item.ID, ourNode);
                }

                // hook into parent
                if (item.ParenTask == null)
                {   // is a root node
                    rootNodes.Add(ourNode);
                }
                else
                {   // is a child row - so we have a parent
                    Node parentNode;
                    if (!lookup.TryGetValue(item.ParenTask.ID, out parentNode))
                    {   // unknown parent, construct preliminary parent
                        parentNode = new Node();
                        lookup.Add(item.ParenTask.ID, parentNode);
                    }
                    parentNode.Children.Add(ourNode);
                    ourNode.Parent = parentNode;
                }
            }

            return rootNodes;
        }

    }
}