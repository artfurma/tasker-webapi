using System.Linq;
using AutoMapper;
using BusinessLogic.BusinessModels;
using DataBase.DbModels;
using DataBase.DTO;

namespace BusinessLogic
{
    public class BusinessLogicAutomapperProfile : Profile
    {
        public BusinessLogicAutomapperProfile()
        {
            CreateMap<DbTask,TaskModel>();
            CreateMap<AddTask, Task>()
                .ForMember(dest => dest.ID, opt => opt.Ignore())
                .ForMember(dest => dest.MainPerformer, opt => opt.Ignore())
                .ForMember(dest => dest.ParenTask, opt => opt.Ignore())
                .ForMember(dest => dest.TaskStatus, opt => opt.Ignore())
                .ForMember(dest => dest.ChildrenTasks, opt => opt.Ignore())
                .ForMember(dest => dest.Creator, opt => opt.Ignore())
                .ForMember(dest => dest.TaskInControlPoints, opt => opt.Ignore())
                .ForMember(dest => dest.Creator, opt => opt.Ignore())
                .ForMember(dest => dest.TaskPerformers, opt => opt.Ignore());


            CreateMap<EditTask, Task>()
                .ForMember(dest => dest.ID, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.MainPerformer, opt => opt.Ignore())
                .ForMember(dest => dest.ParenTask, opt => opt.Ignore())
                .ForMember(dest => dest.TaskStatus, opt => opt.Ignore())
                .ForMember(dest => dest.ChildrenTasks, opt => opt.Ignore())
                .ForMember(dest => dest.Creator, opt => opt.Ignore())
                .ForMember(dest => dest.TaskInControlPoints, opt => opt.Ignore())
                .ForMember(dest => dest.Creator, opt => opt.Ignore())
                .ForMember(dest => dest.TaskPerformers, opt => opt.Ignore());

            CreateMap<Task, TaskModel>();

            CreateMap<Node, TaskModelRecursive>()
                .ForMember(dest => dest.ID, opts => opts.MapFrom(src => src.Source.ID))
                .ForMember(dest => dest.Description, opts => opts.MapFrom(src => src.Source.Description))
                .ForMember(dest => dest.Title, opts => opts.MapFrom(src => src.Source.Title))
                .ForMember(dest => dest.StatusId, opts => opts.MapFrom(src => src.Source.StatusId))
                .ForMember(dest => dest.MainPerformer, opts => opts.MapFrom(src => src.Source.MainPerformerId))
                .ForMember(dest => dest.ShowChildren, opts => opts.MapFrom(src => true))
                .ForMember(dest => dest.ParentTaskId, opts => opts.MapFrom(src => src.Source.ParenTask != null ? src.Source.ParenTask.ID : (int?)null))
                .ForMember(dest => dest.TaskPerformers, opts => opts.MapFrom(src => src.Source.TaskPerformers))
                .ForMember(dest => dest.ControlPointIds, opts => opts.MapFrom(src => src.Source.ControlPointIds))
                .ForMember(dest => dest.Children, opts => opts.MapFrom(src => src.Children));

            CreateMap<UserDTO, UserFront>();
            CreateMap<User, UserFront>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.ID))
                .ForMember(dest => dest.FirstName, opts => opts.MapFrom(src => src.Name))
                .ForMember(dest => dest.LastName, opts => opts.MapFrom(src => src.Surname))
                .ForMember(dest => dest.Username, opts => opts.MapFrom(src => src.Username))
                .ForMember(dest => dest.Password, opts => opts.Ignore());


            CreateMap<Milestone, MilestoneModel>();
            CreateMap<MilestoneDTO, MilestoneModel>();
            CreateMap<UserDTO, UserFront>();
            CreateMap<TaskDetails, TaskModel>();

            CreateMap<UserAdd, User>()
                .ForMember(dest => dest.Username, opts => opts.MapFrom(src => src.Username))
                .ForMember(dest => dest.Name, opts => opts.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.Surname, opts => opts.MapFrom(src => src.LastName))
                .ForMember(dest => dest.Password, opts => opts.MapFrom(src => src.Password))
                .ForMember(dest => dest.Email, opts => opts.MapFrom(src => src.Email));

            CreateMap<Project, ProjectModel>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.ID))
                .ForMember(dest => dest.Name, opts => opts.MapFrom(src => src.Name))
                .ForMember(dest => dest.Description, opts => opts.MapFrom(src => src.Description));

            CreateMap<ProjectAdd, Project>()
                .ForMember(dest => dest.ID, opts => opts.Ignore())
                .ForMember(dest => dest.Owner, opts => opts.Ignore())
                .ForMember(dest => dest.ProjectUsers, opts => opts.Ignore())
                .ForMember(dest => dest.Tasks, opts => opts.Ignore());

            CreateMap<User, UserInProject>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.ID))
                .ForMember(dest => dest.FirstName, opts => opts.MapFrom(src => src.Name))
                .ForMember(dest => dest.LastName, opts => opts.MapFrom(src => src.Surname));


            CreateMap<Comment, CommentModel>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.ID))
                .ForMember(dest => dest.User, opt => opt.MapFrom(src => src.User.Name + " " + src.User.Surname));

            CreateMap<CommentAdd, Comment>()
                .ForMember(dest => dest.Task, opts => opts.Ignore())
                .ForMember(dest => dest.Content, opts => opts.MapFrom(src => src.Content))
                .ForMember(dest => dest.Date, opts => opts.MapFrom(src => src.Date))
                .ForMember(dest => dest.ID, opts => opts.Ignore())
                .ForMember(dest => dest.Milestone, opts => opts.Ignore())
                .ForMember(dest => dest.User, opts => opts.Ignore());


            CreateMap<CommentModel, Comment>()
                .ForMember(dest => dest.ID, opts => opts.Ignore())
                .ForMember(dest => dest.Task, opts => opts.Ignore())
                .ForMember(dest => dest.Milestone, opts => opts.Ignore())
                .ForMember(dest => dest.User, opts => opts.Ignore());

            CreateMap<AddTask, TaskModelRecursive>()
                .ForMember(dest => dest.ID, opts => opts.Ignore())
                .ForMember(dest => dest.Children, opts => opts.Ignore())
                .ForMember(dest => dest.ControlPointIds, opts => opts.MapFrom(src => src.ControlPointIds))
                .ForMember(dest => dest.Description, opts => opts.MapFrom(src => src.Description))
                .ForMember(dest => dest.StatusId, opts => opts.MapFrom(src => src.TaskStatusId))
                .ForMember(dest => dest.TaskPerformers, opts => opts.MapFrom(src => src.TaskPerformers))
                .ForMember(dest => dest.Title, opts => opts.MapFrom(src => src.Title));


        }
    }
}