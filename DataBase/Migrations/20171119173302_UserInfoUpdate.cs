using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DataBase.Migrations
{
    public partial class UserInfoUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MainPerformerID",
                table: "Tasks",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_MainPerformerID",
                table: "Tasks",
                column: "MainPerformerID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Users_MainPerformerID",
                table: "Tasks",
                column: "MainPerformerID",
                principalTable: "Users",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Users_MainPerformerID",
                table: "Tasks");

            migrationBuilder.DropIndex(
                name: "IX_Tasks_MainPerformerID",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "MainPerformerID",
                table: "Tasks");
        }
    }
}
