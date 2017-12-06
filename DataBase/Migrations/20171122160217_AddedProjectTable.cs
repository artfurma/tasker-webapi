using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DataBase.Migrations
{
    public partial class AddedProjectTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Milestones_MilestoneID",
                table: "Tasks");

            migrationBuilder.DropIndex(
                name: "IX_Tasks_MilestoneID",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "MilestoneID",
                table: "Tasks");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MilestoneID",
                table: "Tasks",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_MilestoneID",
                table: "Tasks",
                column: "MilestoneID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Milestones_MilestoneID",
                table: "Tasks",
                column: "MilestoneID",
                principalTable: "Milestones",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
