using ServiceStack.DataAnnotations;
using ServiceStack.OrmLite;
using CreatorKit.ServiceModel;

namespace CreatorKit.Migrations;

public class Migration1001 : MigrationBase
{
    [Icon(Svg = Icons.Contact)]
    public class Contact
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Source Source { get; set; }
        [FormatEnumFlags(nameof(MailingList))]
        public MailingList MailingLists { get; set; }
        public string Token { get; set; }
        [Index(Unique = true)]
        public string EmailLower { get; set; }
        [Index]
        public string NameLower { get; set; }
        [Index(Unique = true)]
        public string ExternalRef { get; set; }
        public int? AppUserId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? VerifiedDate { get; set; }
        public DateTime? DeletedDate { get; set; }
        public DateTime? UnsubscribedDate { get; set; }
    }

    [Icon(Svg = Icons.Mail)]
    public class MailMessage
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string Email { get; set; }
        public string? Layout { get; set; }
        public string? Template { get; set; }
        public string Renderer { get; set; }
        public Dictionary<string,object> RendererArgs { get; set; }
        public EmailMessage Message { get; set; }
        public bool Draft { get; set; }
        public string ExternalRef { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? StartedDate { get; set; }
        public DateTime? CompletedDate { get; set; }
        public ResponseStatus? Error { get; set; }
    }

    [Icon(Svg = Icons.MailRun)]
    public class MailRun
    {
        [AutoIncrement]
        public int Id { get; set; }
        [FormatEnumFlags(nameof(MailingList))]
        public MailingList MailingList { get; set; }
        public string Generator { get; set; }
        public Dictionary<string,object> GeneratorArgs { get; set; }
        public string Layout { get; set; }
        public string Template { get; set; }
        public string ExternalRef { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? GeneratedDate { get; set; }
        public DateTime? SentDate { get; set; }
        public DateTime? CompletedDate { get; set; }
        public int EmailsCount { get; set; }
    }

    [Icon(Svg = Icons.Mail)]
    [UniqueConstraint(nameof(MailRunId), nameof(ContactId))]
    public class MailMessageRun
    {
        [AutoIncrement]
        public int Id { get; set; }
        [ForeignKey(typeof(MailRun), OnDelete = "CASCADE")]
        public int MailRunId { get; set; }
        [Ref(Model = nameof(Contact), RefId = "Id", RefLabel = "Email")]
        public int ContactId { get; set; }
        [Reference]
        [Format(FormatMethods.Hidden)]
        public Contact Contact { get; set; }
        public string Renderer { get; set; }
        public Dictionary<string,object> RendererArgs { get; set; }
        public string ExternalRef { get; set; }
        public EmailMessage Message { get; set; }
        public DateTime? StartedDate { get; set; }
        public DateTime? CompletedDate { get; set; }
        public ResponseStatus? Error { get; set; }
    }

    [Icon(Svg = Icons.Mail)]
    [NamedConnection("archive")]
    public class ArchiveMessage : MailMessage {}

    [Icon(Svg = Icons.MailRun)]
    [NamedConnection("archive")]
    public class ArchiveRun : MailRun {}

    [Icon(Svg = Icons.Mail)]
    [NamedConnection("archive")]
    public class ArchiveMessageRun
    {
        [AutoIncrement]
        public int Id { get; set; }
        public int MailRunId { get; set; }
        public int ContactId { get; set; }
        public string Renderer { get; set; }
        public Dictionary<string,object> RendererArgs { get; set; }
        public string ExternalRef { get; set; }
        public EmailMessage Message { get; set; }
        public DateTime? StartedDate { get; set; }
        public DateTime? CompletedDate { get; set; }
        public ResponseStatus? Error { get; set; }
    }

    public enum Source
    {
        Unknown,
        UI,
        Website,
    }

    [Flags]
    public enum MailingList
    {
        None = 0,
        [Description("Test Group")]
        TestGroup = 1 << 0,
        [Description("Monthly Newsletter")]
        MonthlyNewsletter = 1 << 1,
        [Description("New Blog Posts")]
        BlogPostReleases = 1 << 2,
        [Description("New Videos")]
        VideoReleases = 1 << 3,
        [Description("New Product Releases")]
        ProductReleases = 1 << 4,
        [Description("Yearly Updates")]
        YearlyUpdates = 1 << 5,
    }

    public class MailTo
    {
        public string Email { get; set; }
        public string Name { get; set; }
    }
    public class EmailMessage
    {
        public List<MailTo> To { get; set; }
        public List<MailTo> Cc { get; set; }
        public List<MailTo> Bcc { get; set; }
        public MailTo? From { get; set; }
        public string Subject { get; set; }
        public string? Body { get; set; }
        public string? BodyHtml { get; set; }
        public string? BodyText { get; set; }
    }


    Contact CreateContact(string email, string firstName, string lastName, MailingList mailingList)
    {
        return new Contact {
            Email = email,
            FirstName = firstName,
            LastName = lastName,
            EmailLower = email.ToLower(),
            NameLower = $"{firstName} {lastName}".ToLower(),
            MailingLists = mailingList,
            ExternalRef = Guid.NewGuid().ToString("N"),
            CreatedDate = DateTime.UtcNow,
            VerifiedDate = DateTime.UtcNow.AddMinutes(1),
            Source = Source.UI,
        };
    }

    public override void Up()
    {
        Db.CreateTable<Contact>();
        Db.CreateTable<MailMessage>();
        Db.CreateTable<MailRun>();
        Db.CreateTable<MailMessageRun>();
        
        Db.Insert(CreateContact("demis.bellot@gmail.com", "Demis", "Bellot", MailingList.TestGroup | MailingList.MonthlyNewsletter));
        Db.Insert(CreateContact("team@servicestack.net", "Team", "ServiceStack", MailingList.MonthlyNewsletter));
        Db.Insert(CreateContact("demis@servicestack.com", "Ubixar", "Liquidbit", MailingList.TestGroup | MailingList.YearlyUpdates));

        using var dbArchive = DbFactory.Open("archive");
        dbArchive.CreateTable<ArchiveMessage>();
        dbArchive.CreateTable<ArchiveRun>();
        dbArchive.CreateTable<ArchiveMessageRun>();
    }

    public override void Down()
    {
        Db.DropTable<MailMessageRun>();
        Db.DropTable<MailRun>();
        Db.DropTable<MailMessage>();
        Db.DropTable<Contact>();

        using var dbArchive = DbFactory.Open("archive");
        dbArchive.DropTable<ArchiveMessageRun>();
        dbArchive.DropTable<ArchiveRun>();
        dbArchive.DropTable<ArchiveMessage>();
    }
}
