using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Configuration;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace HomePage.Models;

public partial class EmailServiceContext : DbContext
{
    public EmailServiceContext()
    {
    }

    public EmailServiceContext(DbContextOptions<EmailServiceContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Credential> Credentials { get; set; }

    public virtual DbSet<IncomingMessageRecepient> IncomingMessageRecepients { get; set; }

    public virtual DbSet<IncomingMessageText> IncomingMessageTexts { get; set; }

    public virtual DbSet<VwIncomingMessage> VwIncomingMessages { get; set; }

    public virtual DbSet<VwMessageQueue> VwMessageQueues { get; set; }

    public virtual DbSet<EnqueueIncomingMessage> EnqueueIncomingMessages { get; set; }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

            IConfigurationRoot configuration = builder.Build();
            string connectionString = configuration.GetConnectionString("EmailServiceEntities");

            optionsBuilder.UseSqlServer(connectionString);
        }
    }
    //=> optionsBuilder.UseSqlServer(configuration.GetConnectionString("EmailServiceEntities"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Credential>(entity =>
        {
            entity.HasKey(e => e.Uid).HasName("PK__Credenti__C5B19602CC1516BE");

            entity.Property(e => e.Uid).HasColumnName("UID");
            entity.Property(e => e.Password).IsUnicode(false);
            entity.Property(e => e.UserName)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<IncomingMessageRecepient>(entity =>
        {
            entity.HasKey(e => e.Uid).HasName("PK__Incoming__C5B196028AB4035E");

            entity.Property(e => e.Uid).HasColumnName("UID");
            entity.Property(e => e.EmailSentDateTime).HasColumnType("datetime");
            entity.Property(e => e.IncomingMessageId).HasColumnName("IncomingMessageID");
            entity.Property(e => e.IsBcc).HasColumnName("isBCC");
            entity.Property(e => e.IsCc).HasColumnName("isCC");
            entity.Property(e => e.NotifiedDateTime).HasColumnType("datetime");
            entity.Property(e => e.ReadDateTime).HasColumnType("datetime");
            entity.Property(e => e.RecepientEmail)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<IncomingMessageText>(entity =>
        {
            entity.HasKey(e => e.Uid).HasName("PK__Incoming__C5B1960204776D18");

            entity.ToTable("IncomingMessageText");

            entity.Property(e => e.Uid).HasColumnName("UID");
            entity.Property(e => e.CreatedEmail)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CreatedName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Creation).HasColumnType("datetime");
            entity.Property(e => e.MessageType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Parameters)
                .HasMaxLength(5000)
                .IsUnicode(false);
            entity.Property(e => e.Title)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<VwIncomingMessage>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("vw_IncomingMessages");

            entity.Property(e => e.CreatedDate)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.CreatedEmail)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CreatedName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Creation).HasColumnType("datetime");
            entity.Property(e => e.IncomingMessageId).HasColumnName("IncomingMessageID");
            entity.Property(e => e.IsBcc).HasColumnName("isBCC");
            entity.Property(e => e.IsCc).HasColumnName("isCC");
            entity.Property(e => e.MessageType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.NotifiedDateTime).HasColumnType("datetime");
            entity.Property(e => e.ReadDateTime).HasColumnType("datetime");
            entity.Property(e => e.RecepientEmail)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Title)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.Uid).HasColumnName("UID");
        });

        modelBuilder.Entity<VwMessageQueue>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("vw_MessageQueue");

            entity.Property(e => e.CreatedEmail)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.CreatedName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Creation).HasColumnType("datetime");
            entity.Property(e => e.IncomingMessageId).HasColumnName("IncomingMessageID");
            entity.Property(e => e.IsBcc).HasColumnName("isBCC");
            entity.Property(e => e.IsCc).HasColumnName("isCC");
            entity.Property(e => e.NotifiedDateTime).HasColumnType("datetime");
            entity.Property(e => e.Priority)
                .HasMaxLength(4)
                .IsUnicode(false);
            entity.Property(e => e.ReadDateTime).HasColumnType("datetime");
            entity.Property(e => e.RecepientEmail)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Title)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.Uid).HasColumnName("UID");
        });

        modelBuilder.Entity<EnqueueIncomingMessage>().HasNoKey();


        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    public int EnqueueIncomingMessagesRun(string userName, string title, string? CreatedEmail, string? CreatedName, bool? isSecure, string bodyHtml, string? messageType, bool? isImportantTag, string? ccEmail, string? bccEmail)
    {
        var parameters = new List<Microsoft.Data.SqlClient.SqlParameter>
    {
        new Microsoft.Data.SqlClient.SqlParameter("@UserName", userName),
        new Microsoft.Data.SqlClient.SqlParameter("@Title", title),
        new Microsoft.Data.SqlClient.SqlParameter("@BodyHtml", bodyHtml),
    };

        // Handle nullable parameters
        AddNullableParameter(parameters, "@CreatedEmail", CreatedEmail);
        AddNullableParameter(parameters, "@CreatedName", CreatedName);
        AddNullableParameter(parameters, "@MessageType", messageType);
        AddNullableParameter(parameters, "@CCEmail", ccEmail);
        AddNullableParameter(parameters, "@BCCEmail", bccEmail);

        // Add isSecure parameter
        parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@IsSecure", (object)isSecure ?? DBNull.Value));
        parameters.Add(new Microsoft.Data.SqlClient.SqlParameter("@IsImportantTag", (object)isImportantTag ?? DBNull.Value));

        // Execute the stored procedure
        var sqlParameters = parameters.ToArray();
        try
        {
            EnqueueIncomingMessages.FromSqlRaw("EXEC EnqueueIncomingMessages @UserName, @Title, @CreatedEmail, @CreatedName, @IsSecure, @BodyHtml, @MessageType, @IsImportantTag, @CCEmail, @BCCEmail", sqlParameters).ToList();
            return 1;
        }
        catch(InvalidOperationException ex)
        {
            return 1;
        }
        catch (Exception e)
        {
            return -1;
        }
    }

    private void AddNullableParameter(List<Microsoft.Data.SqlClient.SqlParameter> parameters, string parameterName, string? parameterValue)
    {
        if (parameterValue != null)
        {
            parameters.Add(new Microsoft.Data.SqlClient.SqlParameter(parameterName, parameterValue));
        }
        else
        {
            // Add a parameter with DBNull.Value if parameterValue is null
            parameters.Add(new Microsoft.Data.SqlClient.SqlParameter(parameterName, DBNull.Value));
        }
    }




}