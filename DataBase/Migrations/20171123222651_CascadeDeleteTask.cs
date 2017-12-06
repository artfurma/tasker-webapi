using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DataBase.Migrations
{
    public partial class CascadeDeleteTask : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskPerformers_Tasks_TaskID",
                table: "TaskPerformers");

            migrationBuilder.AddForeignKey(
                name: "FK_TaskPerformers_Tasks_TaskID",
                table: "TaskPerformers",
                column: "TaskID",
                principalTable: "Tasks",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskPerformers_Tasks_TaskID",
                table: "TaskPerformers");

            migrationBuilder.AddForeignKey(
                name: "FK_TaskPerformers_Tasks_TaskID",
                table: "TaskPerformers",
                column: "TaskID",
                principalTable: "Tasks",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
