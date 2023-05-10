using System;
using System.Collections.Generic;
using ServiceStack;
using CreatorKit.ServiceModel.Types;

namespace CreatorKit.ServiceModel;

[Tag(Tag.Mail)]
public class CreateContact : ICreateDb<Contact>, IReturn<Contact>
{
    [ValidateNotEmpty]
    public string Email { get; set; }
    [ValidateNotEmpty]
    public string FirstName { get; set; }
    [ValidateNotEmpty]
    public string LastName { get; set; }
    public Source Source { get; set; }

    [Input(Type = "tag", EvalAllowableValues = "AppData.MailingListValues"), FieldCss(Field = "col-span-12")]
    public List<string>? MailingLists { get; set; }
}

[Tag(Tag.Mail)]
public class SubscribeToMailingList : IPost, IReturnVoid
{
    [ValidateNotEmpty]
    public string Email { get; set; }
    [ValidateNotEmpty]
    public string FirstName { get; set; }
    [ValidateNotEmpty]
    public string LastName { get; set; }
    public Source Source { get; set; }
    [Input(Type = "tag", EvalAllowableValues = "AppData.MailingListValues"), FieldCss(Field = "col-span-12")]
    public List<string>? MailingLists { get; set; }
}

[Tag(Tag.Mail)]
public class UpdateContactMailingLists : IPost, IReturnVoid
{
    [ValidateNotEmpty]
    public string? Ref { get; set; }
    [Input(Type = "tag", EvalAllowableValues = "AppData.MailingListValues"), FieldCss(Field = "col-span-12")]
    public List<string> MailingLists { get; set; }
    public bool? UnsubscribeAll { get; set; }
}

[Tag(Tag.Mail)]
public class FindContact : IGet, IReturn<FindContactResponse>
{
    public string? Email { get; set; }
    public string? Ref { get; set; }
}
public class FindContactResponse
{
    public Contact Result { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

[Tag(Tag.Mail)]
[ValidateIsAdmin]
public class QueryContacts : QueryDb<Contact>
{
    [QueryDbField(Template = "EmailLower LIKE {Value} OR NameLower LIKE {Value}", ValueFormat = "%{0}%", Field = "EmailLower")]
    public string? Search { get; set; }
}

[Tag(Tag.Mail)]
[ValidateIsAdmin]
[AutoPopulate(nameof(Contact.MailingLists), Eval = "dto.MailingLists.fromEnumFlagsList(typeof('MailingList'))")]
public class UpdateContact : IPatchDb<Contact>, IReturn<Contact>
{
    public int Id { get; set; }
    public string? Email { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public Source? Source { get; set; }
    [Input(Type = "tag", EvalAllowableValues = "AppData.MailingListValues", Options = "{ converter:enumFlagsConverter('MailingList') }"), FieldCss(Field = "col-span-12")]
    public List<string>? MailingLists { get; set; }
    
    public string? ExternalRef { get; set; }
    public int? AppUserId { get; set; }
    public DateTime? CreatedDate { get; set; }
    public DateTime? VerifiedDate { get; set; }
    public DateTime? DeletedDate { get; set; }
    public DateTime? UnsubscribedDate { get; set; }
}

[Tag(Tag.Mail)]
[ValidateIsAdmin]
public class DeleteContact : IDeleteDb<Contact>, IReturnVoid
{
    public int Id { get; set; }
}
