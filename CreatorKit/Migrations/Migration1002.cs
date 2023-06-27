using ServiceStack.DataAnnotations;
using ServiceStack.OrmLite;

namespace CreatorKit.Migrations;

public class Migration1002 : MigrationBase
{
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
        Db.CreateTable<InvalidEmail>();
    }

    public override void Down()
    {
        Db.DropTable<InvalidEmail>();
    }
}
