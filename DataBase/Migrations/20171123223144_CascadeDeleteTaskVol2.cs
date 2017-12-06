using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DataBase.Migrations
{
    public partial class CascadeDeleteTaskVol2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskInControlPoint_Tasks_TaskID",
                table: "TaskInControlPoint");

            migrationBuilder.AddForeignKey(
                name: "FK_TaskInControlPoint_Tasks_TaskID",
                table: "TaskInControlPoint",
                column: "TaskID",
                principalTable: "Tasks",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskInControlPoint_Tasks_TaskID",
                table: "TaskInControlPoint");

            migrationBuilder.AddForeignKey(
                name: "FK_TaskInControlPoint_Tasks_TaskID",
                table: "TaskInControlPoint",
                column: "TaskID",
                principalTable: "Tasks",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
