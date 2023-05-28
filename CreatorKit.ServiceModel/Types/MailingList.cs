using System;
using ServiceStack.DataAnnotations;

namespace CreatorKit.ServiceModel.Types;

[Flags]
public enum MailingList
{
    [Description("None")]
    None = 0,                            //0
    [Description("Test Group")]
    TestGroup = 1 << 0,                  //1
    [Description("Monthly Newsletter")]
    MonthlyNewsletter = 1 << 1,          //2
    [Description("New Blog Posts")]
    BlogPostReleases = 1 << 2,           //4
    [Description("New Videos")]
    VideoReleases = 1 << 3,              //8
    [Description("New Product Releases")]
    ProductReleases = 1 << 4,            //16
    [Description("Yearly Updates")]
    YearlyUpdates = 1 << 5,              //32
}
