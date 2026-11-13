using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace HomePage_API.Migrations
{
    /// <inheritdoc />
    public partial class AddOssContributions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.CreateTable(
                name: "oss_contributions",
                schema: "dbo",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    title = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    description = table.Column<string>(type: "character varying(2000)", maxLength: 2000, nullable: false),
                    repository_name = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    repository_url = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    commit_url = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    contribution_type = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    technologies = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: true),
                    contributed_at = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_oss_contributions", x => x.id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_oss_contributions_contributed_at",
                schema: "dbo",
                table: "oss_contributions",
                column: "contributed_at");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "oss_contributions",
                schema: "dbo");
        }
    }
}
