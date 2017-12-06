using System.Linq;
using AutoMapper;
using DataBase.DbModels;
using DataBase.DTO;

namespace DataBase
{
    public class DataBaseAutomapperProfile : Profile
    {
        public DataBaseAutomapperProfile()
        {
            CreateMap<Task, DbTask>();
            CreateMap<User, UserDTO>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.ID))
                .ForMember(dest => dest.FirstName, opts => opts.MapFrom(src => src.Name))
                .ForMember(dest => dest.LastName, opts => opts.MapFrom(src => src.Surname))
                .ForMember(dest => dest.Password, opts => opts.MapFrom(src => src.Password))
                .ForMember(dest => dest.Username, opts => opts.MapFrom(src => src.Username));

            CreateMap<Milestone, MilestoneDTO>();
            CreateMap<User, UserDTO>()
                .ForMember(dest => dest.FirstName, opts => opts.MapFrom(src => src.Name))
                .ForMember(dest => dest.LastName, opts => opts.MapFrom(src => src.Surname));


            CreateMap<Task, TaskDetails>()
                .ForMember(dest => dest.ID, opts => opts.MapFrom(src => src.ID))
                .ForMember(dest => dest.Description, opts => opts.MapFrom(src => src.Description))
                .ForMember(dest => dest.Title, opts => opts.MapFrom(src => src.Title))
                .ForMember(dest => dest.StatusId, opts => opts.MapFrom(src => src.TaskStatus.ID))
                .ForMember(dest => dest.TaskPerformers,
                    opts => opts.MapFrom(src => src.TaskPerformers.Select(x => x.User)))
                .ForMember(dest => dest.ControlPointIds,
                    opts => opts.MapFrom(src => src.TaskInControlPoints.Select(x => x.Milestone)))
                .ForMember(dest => dest.MainPerformer, opts => opts.MapFrom(src => src.MainPerformer.ID));

            CreateMap<Task, TaskTreeDTO>()
                .ForMember(dest => dest.ID, opts => opts.MapFrom(src => src.ID))
                .ForMember(dest => dest.Description, opts => opts.MapFrom(src => src.Description))
                .ForMember(dest => dest.Title, opts => opts.MapFrom(src => src.Title))
                .ForMember(dest => dest.StatusId, opts => opts.MapFrom(src => (int)src.TaskStatus.Name))
                .ForMember(dest => dest.TaskPerformers,
                    opts => opts.MapFrom(src => src.TaskPerformers.Select(x => x.User)))
                .ForMember(dest => dest.ControlPointIds,
                    opts => opts.MapFrom(src => src.TaskInControlPoints.Select(x => x.Milestone)))
                .ForMember(dest => dest.ParenTask, opts => opts.MapFrom(src => src.ParenTask))
                .ForMember(dest => dest.MainPerformerId, opts => opts.MapFrom(src => src.MainPerformer.ID));




            CreateMap<Project, ProjectDTO>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.ID))
                .ForMember(dest => dest.Name, opts => opts.MapFrom(src => src.Name))
                .ForMember(dest => dest.Description, opts => opts.MapFrom(src => src.Description));










        }
    }
}