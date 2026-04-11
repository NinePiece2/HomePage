using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.DataProtection.EntityFrameworkCore;
using HomePage_API.Models;

namespace HomePage_API.Data;

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
    public DbSet<PowerSettings> PowerSettings { get; set; } = null!;
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseNpgsql();
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema("dbo");

        modelBuilder.Entity<Application>(entity =>
        {
            entity.ToTable("applications");
            entity.HasKey(e => e.Uid);

            entity.Property(e => e.Uid)
                .HasColumnName("uid")
                .ValueGeneratedOnAdd();
            entity.Property(e => e.ApplicationLink)
                .HasMaxLength(500)
                .HasColumnName("Application Link");
            entity.Property(e => e.GitHubLink)
                .HasMaxLength(500)
                .HasColumnName("GitHub Link");
            entity.Property(e => e.HomePageLink)
                .HasMaxLength(500)
                .HasColumnName("HomePage Link");
            entity.Property(e => e.Name)
                .HasMaxLength(500)
                .HasColumnName("name");
            entity.Property(e => e.GitHubReadMeLink)
                .HasMaxLength(500)
                .HasColumnName("githubreadmelink");
            entity.Property(e => e.GitHubReadMeImagesLink)
                .HasMaxLength(500)
                .HasColumnName("githubreadmeimageslink");
        });

        modelBuilder.Entity<DataProtectionKey>(entity =>
        {
            entity.ToTable("dataprotectionkeys");
            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Xml).HasColumnName("xml");
            entity.Property(e => e.FriendlyName).HasColumnName("friendlyname");
        });

        modelBuilder.Entity<PowerSettings>(entity =>
        {
            entity.ToTable("powersettings");
            entity.HasKey(e => e.Key);
            entity.Property(e => e.Key)
                .HasColumnName("key")
                .HasMaxLength(255);
            entity.Property(e => e.Value)
                .HasColumnName("value");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
