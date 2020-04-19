﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SDS_Backend.Models;

namespace SDS_Backend.Migrations
{
    [DbContext(typeof(SDS_DBContext))]
    partial class SDS_DBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SDS_Backend.Models.SoftwareDownload", b =>
                {
                    b.Property<string>("ID")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Employee_Code")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Employee_EmailID")
                        .HasColumnType("nvarchar(40)");

                    b.Property<string>("Employee_Request_Time")
                        .HasColumnType("nvarchar(40)");

                    b.Property<string>("Level_Status")
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("NSD_Response_Link")
                        .HasColumnType("nvarchar(300)");

                    b.Property<string>("NSD_Response_Remark")
                        .HasColumnType("nvarchar(300)");

                    b.Property<string>("NSD_Response_Status")
                        .HasColumnType("nvarchar(70)");

                    b.Property<string>("NSD_Response_Time")
                        .HasColumnType("nvarchar(40)");

                    b.Property<string>("Software_License")
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Software_Name")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Software_Version")
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("Tags")
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Team_Lead_ID")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Team_Lead_Remark")
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Team_Lead_Response_Time")
                        .HasColumnType("nvarchar(40)");

                    b.Property<string>("Team_Lead_Status")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Website_Link")
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("ID");

                    b.ToTable("softwareDownloadsystem");
                });
#pragma warning restore 612, 618
        }
    }
}