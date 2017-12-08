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
    [Migration("20171208194058_CascadeCommentDelete")]
    partial class CascadeCommentDelete
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DataBase.DbModels.Comment", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<DateTime>("Date");

                    b.Property<int?>("MilestoneID");

                    b.Property<int?>("TaskID");

                    b.Property<int?>("UserID");

                    b.HasKey("ID");

                    b.HasIndex("MilestoneID");

                    b.HasIndex("TaskID");

                    b.HasIndex("UserID");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("DataBase.DbModels.Milestone", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CreatorID");

                    b.Property<DateTime>("EndDate");

                    b.Property<string>("Name");

                    b.Property<int?>("ProjectID");

                    b.HasKey("ID");

                    b.HasIndex("CreatorID");

                    b.HasIndex("ProjectID");

                    b.ToTable("Milestones");
                });

            modelBuilder.Entity("DataBase.DbModels.Project", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int?>("OwnerID");

                    b.HasKey("ID");

                    b.HasIndex("OwnerID");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("DataBase.DbModels.ProjectUser", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ProjectId");

                    b.Property<int>("UserId");

                    b.HasKey("ID");

                    b.HasIndex("ProjectId");

                    b.HasIndex("UserId");

                    b.ToTable("ProjectUser");
                });

            modelBuilder.Entity("DataBase.DbModels.Task", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CreatorID");

                    b.Property<string>("Description");

                    b.Property<int?>("MainPerformerID");

                    b.Property<int?>("ParenTaskID");

                    b.Property<int?>("ProjectID");

                    b.Property<int?>("TaskStatusID");

                    b.Property<string>("Title");

                    b.HasKey("ID");

                    b.HasIndex("CreatorID");

                    b.HasIndex("MainPerformerID");

                    b.HasIndex("ParenTaskID");

                    b.HasIndex("ProjectID");

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

            modelBuilder.Entity("DataBase.DbModels.Comment", b =>
                {
                    b.HasOne("DataBase.DbModels.Milestone", "Milestone")
                        .WithMany("Comments")
                        .HasForeignKey("MilestoneID")
                        .OnDelete(DeleteBehavior.SetNull);

                    b.HasOne("DataBase.DbModels.Task", "Task")
                        .WithMany("Comments")
                        .HasForeignKey("TaskID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DataBase.DbModels.User", "User")
                        .WithMany("Comments")
                        .HasForeignKey("UserID");
                });

            modelBuilder.Entity("DataBase.DbModels.Milestone", b =>
                {
                    b.HasOne("DataBase.DbModels.User", "Creator")
                        .WithMany()
                        .HasForeignKey("CreatorID");

                    b.HasOne("DataBase.DbModels.Project", "Project")
                        .WithMany("Milestones")
                        .HasForeignKey("ProjectID");
                });

            modelBuilder.Entity("DataBase.DbModels.Project", b =>
                {
                    b.HasOne("DataBase.DbModels.User", "Owner")
                        .WithMany("MyProjects")
                        .HasForeignKey("OwnerID");
                });

            modelBuilder.Entity("DataBase.DbModels.ProjectUser", b =>
                {
                    b.HasOne("DataBase.DbModels.Project", "Project")
                        .WithMany("ProjectUsers")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DataBase.DbModels.User", "User")
                        .WithMany("ProjectUsers")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
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

                    b.HasOne("DataBase.DbModels.Project", "Project")
                        .WithMany("Tasks")
                        .HasForeignKey("ProjectID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DataBase.DbModels.TaskStatus", "TaskStatus")
                        .WithMany("Tasks")
                        .HasForeignKey("TaskStatusID");
                });

            modelBuilder.Entity("DataBase.DbModels.TaskInControlPoint", b =>
                {
                    b.HasOne("DataBase.DbModels.Milestone", "Milestone")
                        .WithMany("TaskInControlPoints")
                        .HasForeignKey("MilestoneID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DataBase.DbModels.Task", "Task")
                        .WithMany("TaskInControlPoints")
                        .HasForeignKey("TaskID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DataBase.DbModels.TaskPerformer", b =>
                {
                    b.HasOne("DataBase.DbModels.Task", "Task")
                        .WithMany("TaskPerformers")
                        .HasForeignKey("TaskID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DataBase.DbModels.User", "User")
                        .WithMany("TaskPerformers")
                        .HasForeignKey("UserID");
                });
#pragma warning restore 612, 618
        }
    }
}
