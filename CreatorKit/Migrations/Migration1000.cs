using ServiceStack.DataAnnotations;
using ServiceStack.OrmLite;
using CreatorKit.ServiceModel;

namespace CreatorKit.Migrations;

public class Migration1000 : MigrationBase
{
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

    public override void Up()
    {
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
    }
}
