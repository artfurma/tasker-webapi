using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DataBase.Migrations
{
    public partial class ProjectMilestoneRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProjectID",
                table: "Milestones",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Milestones_ProjectID",
                table: "Milestones",
                column: "ProjectID");

            migrationBuilder.AddForeignKey(
                name: "FK_Milestones_Projects_ProjectID",
                table: "Milestones",
                column: "ProjectID",
                principalTable: "Projects",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Milestones_Projects_ProjectID",
                table: "Milestones");

            migrationBuilder.DropIndex(
                name: "IX_Milestones_ProjectID",
                table: "Milestones");

            migrationBuilder.DropColumn(
                name: "ProjectID",
                table: "Milestones");
        }
    }
}
