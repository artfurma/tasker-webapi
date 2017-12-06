using System.Text;
using BusinessLogic;
using DataBase;
using DataBase.DAL;
using DataBase.Repos.Classes;
using DataBase.Repos.Interfaces;
using DataBase.UnitOfWork;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using TaskeR.Helpers;

namespace TaskeR
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{

		    //CORS---------
		    services.AddCors(options =>
		    {
		        options.AddPolicy("CorsPolicy",
		            builder => builder.AllowAnyOrigin()
		                .AllowAnyMethod()
		                .AllowAnyHeader()
		                .AllowCredentials());
		    });


            var config = new AutoMapper.MapperConfiguration(cfg =>
		    {
		        cfg.AddProfile(new BusinessLogicAutomapperProfile());
		        cfg.AddProfile(new DataBaseAutomapperProfile());
            });

		    var mapper = config.CreateMapper();
		    services.AddSingleton(mapper);

            services.AddDbContext<TaskerContext>(options =>
	            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

		    services.AddDatabaseServices();
		    services.AddBusinessLogicServices();


		    services.AddMvc();

            var appSettingsSection = Configuration.GetSection("AppSettings");
		    services.Configure<AppSettings>(appSettingsSection);

		    // configure jwt authentication
		    var appSettings = appSettingsSection.Get<AppSettings>();
		    var key = Encoding.ASCII.GetBytes(appSettings.Secret);
		    services.AddAuthentication(x =>
		        {
		            x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
		            x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
		        })
		        .AddJwtBearer(x =>
		        {
		            x.RequireHttpsMetadata = false;
		            x.SaveToken = true;
		            x.TokenValidationParameters = new TokenValidationParameters
		            {
		                ValidateIssuerSigningKey = true,
		                IssuerSigningKey = new SymmetricSecurityKey(key),
		                ValidateIssuer = false,
		                ValidateAudience = false
		            };
		        });



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
		    //CORS---------
		    app.UseCors("CorsPolicy");

            if (env.IsDevelopment())
			{
			    app.UseDeveloperExceptionPage();
            }

			app.UseStaticFiles();
		    app.UseAuthentication();

            app.UseMvc();
		}
	}
}