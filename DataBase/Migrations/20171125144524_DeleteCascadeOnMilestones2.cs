using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DataBase.Migrations
{
    public partial class DeleteCascadeOnMilestones2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Milestones_MilestoneID",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_TaskInControlPoint_Milestones_MilestoneID",
                table: "TaskInControlPoint");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Milestones_MilestoneID",
                table: "Comments",
                column: "MilestoneID",
                principalTable: "Milestones",
                principalColumn: "ID",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_TaskInControlPoint_Milestones_MilestoneID",
                table: "TaskInControlPoint",
                column: "MilestoneID",
                principalTable: "Milestones",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Milestones_MilestoneID",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_TaskInControlPoint_Milestones_MilestoneID",
                table: "TaskInControlPoint");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Milestones_MilestoneID",
                table: "Comments",
                column: "MilestoneID",
                principalTable: "Milestones",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TaskInControlPoint_Milestones_MilestoneID",
                table: "TaskInControlPoint",
                column: "MilestoneID",
                principalTable: "Milestones",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
