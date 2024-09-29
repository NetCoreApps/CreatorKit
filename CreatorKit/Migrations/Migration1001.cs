using CreatorKit.ServiceInterface;
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

    public enum Source
    {
        UI,
    }

    [Flags]
    public enum MailingList { None = 0 }

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
            VerifiedDate = DateTime.UtcNow,
            Source = Source.UI,
        };
    }
    
    public enum InvalidEmailStatus {}
    public class InvalidEmail
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string Email { get; set; }
        public string EmailLower { get; set; }
        public InvalidEmailStatus Status { get; set; }
    }

    public override void Up()
    {
        Db.CreateTable<Contact>();
        Db.CreateTable<InvalidEmail>();

        // Only run during development
        EmailRenderer.SaveMailingListEnum(seedPath: "Migrations/seed/mailinglists.csv",
            savePath: "../CreatorKit.ServiceModel/Types/MailingList.cs");

        var seedContacts = File.ReadAllText("Migrations/seed/subscribers.csv").FromCsv<List<SeedContact>>();
        foreach (var contact in seedContacts)
        {
            Db.Insert(CreateContact(contact.Email, contact.FirstName, contact.LastName, (MailingList)(int)contact.MailingLists));
        }
    }

    public override void Down()
    {
        Db.DropTable<Contact>();
        Db.DropTable<InvalidEmail>();
    }
}
