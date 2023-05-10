using System.Runtime.Serialization;
using ServiceStack.Auth;
using ServiceStack.DataAnnotations;
using ServiceStack.OrmLite;
using CreatorKit.ServiceModel;

namespace CreatorKit.Migrations;

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
    
    [Icon(Svg = Icons.Thread)]
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
        [Default(1)]
        public long LikesCount { get; set; }
        public long CommentsCount { get; set; }
        public long? RefId { get; set; }
        public string RefIdStr { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ClosedDate { get; set; }
        public DateTime? DeletedDate { get; set; }
    }

    [Icon(Svg = Icons.Comment)]
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

    [Icon(Svg = Icons.Vote)]
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

    [Icon(Svg = Icons.Report)]
    public class CommentReport
    {
        [AutoIncrement]
        public long Id { get; set; }

        [References(typeof(Comment))]
        public int CommentId { get; set; }
    
        [Reference]
        public Comment Comment { get; set; }
    
        [References(typeof(AppUser))]
        public int AppUserId { get; set; }
    
        public PostReport PostReport { get; set; }
        public string Description { get; set; }

        public DateTime CreatedDate { get; set; }
        public ModerationDecision Moderation { get; set; }
        public string? Notes { get; set; }
    }

    public enum PostReport
    {
        Offensive,
        Spam,
        Nudity,
        Illegal,
        Other,
    }

    public enum ModerationDecision
    {
        [Description("Allow Comment")]
        Allow,
        [Description("Flag Comment")]
        Flag,
        [Description("Delete Comment")]
        Delete,
        [Description("Ban User for a day")]
        Ban1Day,
        [Description("Ban User for a week")]
        Ban1Week,
        [Description("Ban User for a month")]
        Ban1Month,
        [Description("Permanently Ban User")]
        PermanentBan,
    }

    OrmLiteAuthRepository<AppUser, UserAuthDetails> CreateAuthRepo() => new(DbFactory) { UseDistinctRoleTables = true };

    public override void Up()
    {
        var authRepo = CreateAuthRepo();
        authRepo.InitSchema(Db);

        void CreateUser(string email, string firstName, string lastName, List<string>? roles = null)
        {
            var password = "p@55wOrd";
            var name = $"{firstName} {lastName}";
            var newAdmin = new AppUser
            {
                Email = email, FirstName = firstName, LastName = lastName, DisplayName = name, 
                RefIdStr = Guid.NewGuid().ToString("N"),
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
            };
            var user = authRepo.CreateUserAuth(Db, newAdmin, password);
            if (roles?.Count > 0)
            {
                authRepo.AssignRoles(Db, user.Id.ToString(), roles);
            }
        }

        var seedUsers = File.ReadAllText("App_Data/seed/users.txt").FromCsv<List<SeedUser>>();
        foreach (var user in seedUsers)
        {
            CreateUser(user.Email, user.FirstName, user.LastName, user.Roles);
        }
        
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
