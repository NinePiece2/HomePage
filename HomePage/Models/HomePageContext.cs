using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.DataProtection.EntityFrameworkCore;

namespace HomePage.Models;

public partial class HomePageContext : DbContext, IDataProtectionKeyContext
{
    public HomePageContext()
    {
    }

    public HomePageContext(DbContextOptions<HomePageContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Application> Applications { get; set; }
    public DbSet<DataProtectionKey> DataProtectionKeys { get; set; } = null!;


    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //    if (!optionsBuilder.IsConfigured)
    //    {
    //        var builder = new ConfigurationBuilder()
    //            .SetBasePath(Directory.GetCurrentDirectory())
    //            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

    //        IConfigurationRoot configuration = builder.Build();
    //        string connectionString = configuration.GetConnectionString("HomePageEntities");

    //        optionsBuilder.UseSqlServer(connectionString);
    //    }
    //}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Application>(entity =>
        {
            entity.HasKey(e => e.Uid);

            entity.Property(e => e.Uid).HasColumnName("UID");
            entity.Property(e => e.ApplicationLink)
                .HasMaxLength(500)
                .HasColumnName("Application Link");
            entity.Property(e => e.GitHubLink)
                .HasMaxLength(500)
                .HasColumnName("GitHub Link");
            entity.Property(e => e.HomePageLink)
                .HasMaxLength(500)
                .HasColumnName("HomePage Link");
            entity.Property(e => e.Name).HasMaxLength(500);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
