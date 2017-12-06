using BusinessLogic.Services.Classes;
using BusinessLogic.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace BusinessLogic
{
    public static class BusinessLogicDIExtensions
    {
        public static IServiceCollection AddBusinessLogicServices(this IServiceCollection services)
        {
            services.AddTransient<ITaskService, TaskService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IMilestoneService, MilestoneService>();
            services.AddTransient<ITaskPerformerService, TaskPerformerService>();
            services.AddTransient<IProjectService, ProjectService>();
            services.AddTransient<ICommentService, CommentService>();


            return services;
        }
    }
}