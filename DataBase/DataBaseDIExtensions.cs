using DataBase.Repos.Classes;
using DataBase.Repos.Interfaces;
using DataBase.UnitOfWork;
using Microsoft.Extensions.DependencyInjection;

namespace DataBase
{
    public static class DataBaseDIExtensions
    {
        public static IServiceCollection AddDatabaseServices(this IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, UnitOfWork.UnitOfWork>();
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddTransient<ITaskRepository,TaskRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IMilestoneRepository, MilestoneRepository>();




            return services;
        }
    }
}