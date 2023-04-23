using System.Runtime.Serialization;
using ServiceStack.Auth;
using ServiceStack.DataAnnotations;
using ServiceStack.OrmLite;
using SsgServices.ServiceModel;

namespace SsgServices.Migrations;

public class Migration1000 : MigrationBase
{
    public class AppUser : IUserAuth
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Index(Unique = true)]
        public string? Handle { get; set; }
        public string Company { get; set; }
        [Index]
        public string Email { get; set; }
        public string? ProfileUrl { get; set; }
        [Input(Type="file"), UploadTo("avatars")]
        public string? Avatar { get; set; } //overrides ProfileUrl
        public string? LastLoginIp { get; set; }
        public bool IsArchived { get; set; }
        public DateTime? ArchivedDate { get; set; }
        public DateTime? LastLoginDate { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? BirthDate { get; set; }
        public string BirthDateRaw { get; set; }
        public string Address { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Culture { get; set; }
        public string FullName { get; set; }
        public string Gender { get; set; }
        public string Language { get; set; }
        public string MailAddress { get; set; }
        public string Nickname { get; set; }
        public string PostalCode { get; set; }
        public string TimeZone { get; set; }
        public Dictionary<string, string> Meta { get; set; }
        public string PrimaryEmail { get; set; }
        [IgnoreDataMember] public string Salt { get; set; }
        [IgnoreDataMember] public string PasswordHash { get; set; }
        [IgnoreDataMember] public string DigestHa1Hash { get; set; }
        public List<string> Roles { get; set; }
        public List<string> Permissions { get; set; }
        public int? RefId { get; set; }
        public string RefIdStr { get; set; }
        public int InvalidLoginAttempts { get; set; }
        public DateTime? LastLoginAttempt { get; set; }
        public DateTime? LockedDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
    
    [AutoPopulate(nameof(ExternalRef), Eval = "nguid")]
    public class Thread
    {
        [AutoIncrement]
        public int Id { get; set; }
        [Index(Unique = true)]
        public string Url { get; set; }
        public string Description { get; set; }
        public string ExternalRef { get; set; }
        public int ViewCount { get; set; }
        public long LikesCount { get; set; }
        public long CommentsCount { get; set; }
        public long? RefId { get; set; }
        public string RefIdStr { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ClosedDate { get; set; }
        public DateTime? DeletedDate { get; set; }
    }

    public class Comment : AuditBase
    {
        [AutoIncrement]
        public int Id { get; set; }
        public int ThreadId { get; set; }
        public int? ReplyId { get; set; }
        public string Content { get; set; }
        [Default(0)]
        public int UpVotes { get; set; }
        [Default(0)]
        public int DownVotes { get; set; }
        [Default(0)]
        public int Votes { get; set; }
        public string? FlagReason { get; set; }
        public string? Notes { get; set; }
        public int AppUserId { get; set; }
    }

    [UniqueConstraint(nameof(ThreadId), nameof(AppUserId))]
    public class ThreadLike
    {
        [AutoIncrement]
        public long Id { get; set; }

        [References(typeof(Thread))]
        public int ThreadId { get; set; }
        [References(typeof(AppUser))]
        public int AppUserId { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    [UniqueConstraint(nameof(CommentId), nameof(AppUserId))]
    public class CommentVote
    {
        [AutoIncrement]
        public long Id { get; set; }

        [References(typeof(Comment))]
        public int CommentId { get; set; }
        [References(typeof(AppUser))]
        public int AppUserId { get; set; }
        public int Vote { get; set; } // -1 / 1
        public DateTime CreatedDate { get; set; }
    }

    public class CommentReport
    {
        [AutoIncrement]
        public long Id { get; set; }

        [References(typeof(Comment))]
        public int CommentId { get; set; }
        [References(typeof(AppUser))]
        public int AppUserId { get; set; }
        public PostReport PostReport { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    public enum PostReport
    {
        Offensive,
        Spam,
        Nudity,
        Illegal,
        Other,
    }


    OrmLiteAuthRepository<AppUser, UserAuthDetails> CreateAuthRepo() => new(DbFactory) { UseDistinctRoleTables = true };

    public override void Up()
    {
        var authRepo = CreateAuthRepo();
        authRepo.InitSchema(Db);

        void CreateUser(string email, string name, string refId, List<string>? roles = null, string? avatar = null,
            string? handle = null)
        {
            var password = "p@55wOrd";
            var newAdmin = new AppUser
                { Email = email, DisplayName = name, RefIdStr = refId, Avatar = avatar, Handle = handle };
            var user = authRepo.CreateUserAuth(Db, newAdmin, password);
            if (roles?.Count > 0)
            {
                authRepo.AssignRoles(Db, user.Id.ToString(), roles);
            }
        }

        CreateUser(Users.Admin.Email, Users.Admin.DisplayName, Users.Admin.RefIdStr, Users.Admin.Roles,
            Users.Admin.Avatar, Users.Admin.Handle);
        CreateUser(Users.System.Email, Users.System.DisplayName, Users.System.RefIdStr, Users.System.Roles,
            Users.System.Avatar, Users.System.Handle);
        CreateUser(Users.Demis.Email, Users.Demis.DisplayName, Users.Demis.RefIdStr, Users.Demis.Roles,
            Users.Demis.Avatar, Users.Demis.Handle);
        CreateUser(Users.Darren.Email, Users.Darren.DisplayName, Users.Darren.RefIdStr, Users.Darren.Roles,
            Users.Darren.Avatar, Users.Darren.Handle);
        CreateUser(Users.Test.Email, Users.Test.DisplayName, Users.Test.RefIdStr, Users.Test.Roles,
            Users.Test.Avatar, Users.Test.Handle);
        
        Db.CreateTable<Thread>();
        Db.CreateTable<ThreadLike>();
        Db.CreateTable<Comment>();
        Db.CreateTable<CommentVote>();
        Db.CreateTable<CommentReport>();
    }

    public override void Down()
    {
        Db.DropTable<CommentReport>();
        Db.DropTable<CommentVote>();
        Db.DropTable<Comment>();
        Db.DropTable<ThreadLike>();
        Db.DropTable<Thread>();

        var authRepo = CreateAuthRepo();
        authRepo.DropSchema(Db);
    }
}
