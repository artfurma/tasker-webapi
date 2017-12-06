﻿// <auto-generated />
using DataBase.DAL;
using DataBase.DbModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace DataBase.Migrations
{
    [DbContext(typeof(TaskerContext))]
    [Migration("20171122160217_AddedProjectTable")]
    partial class AddedProjectTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DataBase.DbModels.Milestone", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CreatorID");

                    b.Property<DateTime>("EndDate");

                    b.Property<string>("Name");

                    b.HasKey("ID");

                    b.HasIndex("CreatorID");

                    b.ToTable("Milestones");
                });

            modelBuilder.Entity("DataBase.DbModels.Task", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CreatorID");

                    b.Property<string>("Description");

                    b.Property<int?>("MainPerformerID");

                    b.Property<int?>("ParenTaskID");

                    b.Property<int?>("TaskStatusID");

                    b.Property<string>("Title");

                    b.HasKey("ID");

                    b.HasIndex("CreatorID");

                    b.HasIndex("MainPerformerID");

                    b.HasIndex("ParenTaskID");

                    b.HasIndex("TaskStatusID");

                    b.ToTable("Tasks");
                });

            modelBuilder.Entity("DataBase.DbModels.TaskInControlPoint", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("MilestoneID");

                    b.Property<int?>("TaskID");

                    b.HasKey("ID");

                    b.HasIndex("MilestoneID");

                    b.HasIndex("TaskID");

                    b.ToTable("TaskInControlPoint");
                });

            modelBuilder.Entity("DataBase.DbModels.TaskPerformer", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("TaskID");

                    b.Property<int?>("UserID");

                    b.HasKey("ID");

                    b.HasIndex("TaskID");

                    b.HasIndex("UserID");

                    b.ToTable("TaskPerformers");
                });

            modelBuilder.Entity("DataBase.DbModels.TaskStatus", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Name");

                    b.HasKey("ID");

                    b.ToTable("TaskStatuses");
                });

            modelBuilder.Entity("DataBase.DbModels.User", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("Name");

                    b.Property<string>("Password");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Surname");

                    b.Property<string>("Username");

                    b.HasKey("ID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DataBase.DbModels.Milestone", b =>
                {
                    b.HasOne("DataBase.DbModels.User", "Creator")
                        .WithMany()
                        .HasForeignKey("CreatorID");
                });

            modelBuilder.Entity("DataBase.DbModels.Task", b =>
                {
                    b.HasOne("DataBase.DbModels.User", "Creator")
                        .WithMany()
                        .HasForeignKey("CreatorID");

                    b.HasOne("DataBase.DbModels.User", "MainPerformer")
                        .WithMany()
                        .HasForeignKey("MainPerformerID");

                    b.HasOne("DataBase.DbModels.Task", "ParenTask")
                        .WithMany("ChildrenTasks")
                        .HasForeignKey("ParenTaskID");

                    b.HasOne("DataBase.DbModels.TaskStatus", "TaskStatus")
                        .WithMany("Tasks")
                        .HasForeignKey("TaskStatusID");
                });

            modelBuilder.Entity("DataBase.DbModels.TaskInControlPoint", b =>
                {
                    b.HasOne("DataBase.DbModels.Milestone", "Milestone")
                        .WithMany("TaskInControlPoints")
                        .HasForeignKey("MilestoneID");

                    b.HasOne("DataBase.DbModels.Task", "Task")
                        .WithMany("TaskInControlPoints")
                        .HasForeignKey("TaskID");
                });

            modelBuilder.Entity("DataBase.DbModels.TaskPerformer", b =>
                {
                    b.HasOne("DataBase.DbModels.Task", "Task")
                        .WithMany("TaskPerformers")
                        .HasForeignKey("TaskID");

                    b.HasOne("DataBase.DbModels.User", "User")
                        .WithMany("TaskPerformers")
                        .HasForeignKey("UserID");
                });
#pragma warning restore 612, 618
        }
    }
}
