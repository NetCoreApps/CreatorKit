/* Options:
Date: 2023-05-10 17:45:41
Version: 6.81
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//AddServiceStackTypes: True
//AddDocAnnotations: True
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/

"use strict";
/** @typedef {'Offensive'|'Spam'|'Nudity'|'Illegal'|'Other'} */
export var PostReport;
(function (PostReport) {
    PostReport["Offensive"] = "Offensive"
    PostReport["Spam"] = "Spam"
    PostReport["Nudity"] = "Nudity"
    PostReport["Illegal"] = "Illegal"
    PostReport["Other"] = "Other"
})(PostReport || (PostReport = {}));
/** @typedef {'None'|'Allow'|'Flag'|'Delete'|'Ban1Day'|'Ban1Week'|'Ban1Month'|'PermanentBan'} */
export var ModerationDecision;
(function (ModerationDecision) {
    ModerationDecision["None"] = "None"
    ModerationDecision["Allow"] = "Allow"
    ModerationDecision["Flag"] = "Flag"
    ModerationDecision["Delete"] = "Delete"
    ModerationDecision["Ban1Day"] = "Ban1Day"
    ModerationDecision["Ban1Week"] = "Ban1Week"
    ModerationDecision["Ban1Month"] = "Ban1Month"
    ModerationDecision["PermanentBan"] = "PermanentBan"
})(ModerationDecision || (ModerationDecision = {}));
export class AuditBase {
    /** @param {{createdDate?:string,createdBy?:string,modifiedDate?:string,modifiedBy?:string,deletedDate?:string,deletedBy?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    createdDate;
    /** @type {string} */
    createdBy;
    /** @type {string} */
    modifiedDate;
    /** @type {string} */
    modifiedBy;
    /** @type {?string} */
    deletedDate;
    /** @type {string} */
    deletedBy;
}
export class Comment extends AuditBase {
    /** @param {{id?:number,threadId?:number,replyId?:number,content?:string,upVotes?:number,downVotes?:number,votes?:number,flagReason?:string,notes?:string,appUserId?:number,createdDate?:string,createdBy?:string,modifiedDate?:string,modifiedBy?:string,deletedDate?:string,deletedBy?:string}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    threadId;
    /** @type {?number} */
    replyId;
    /** @type {string} */
    content;
    /** @type {number} */
    upVotes;
    /** @type {number} */
    downVotes;
    /** @type {number} */
    votes;
    /** @type {?string} */
    flagReason;
    /** @type {?string} */
    notes;
    /** @type {number} */
    appUserId;
}
export class CommentReport {
    /** @param {{id?:number,commentId?:number,comment?:Comment,appUserId?:number,postReport?:PostReport,description?:string,createdDate?:string,moderation?:ModerationDecision,notes?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    commentId;
    /** @type {Comment} */
    comment;
    /** @type {number} */
    appUserId;
    /** @type {PostReport} */
    postReport;
    /** @type {string} */
    description;
    /** @type {string} */
    createdDate;
    /** @type {ModerationDecision} */
    moderation;
    /** @type {?string} */
    notes;
}
/** @typedef {number} */
export var MailingList;
(function (MailingList) {
    MailingList[MailingList["None"] = 0] = "None"
    MailingList[MailingList["TestGroup"] = 1] = "TestGroup"
    MailingList[MailingList["MonthlyNewsletter"] = 2] = "MonthlyNewsletter"
    MailingList[MailingList["BlogPostReleases"] = 4] = "BlogPostReleases"
    MailingList[MailingList["VideoReleases"] = 8] = "VideoReleases"
    MailingList[MailingList["ProductReleases"] = 16] = "ProductReleases"
    MailingList[MailingList["YearlyUpdates"] = 32] = "YearlyUpdates"
})(MailingList || (MailingList = {}));
export class MailRunBase {
    /** @param {{mailingList?:MailingList}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {MailingList} */
    mailingList;
}
export class CreateEmailBase {
    /** @param {{email?:string,firstName?:string,lastName?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    email;
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
}
/** @typedef {'Unknown'|'UI'|'Website'} */
export var Source;
(function (Source) {
    Source["Unknown"] = "Unknown"
    Source["UI"] = "UI"
    Source["Website"] = "Website"
})(Source || (Source = {}));
export class Contact {
    /** @param {{id?:number,email?:string,firstName?:string,lastName?:string,source?:Source,mailingLists?:MailingList,token?:string,emailLower?:string,nameLower?:string,externalRef?:string,appUserId?:number,createdDate?:string,verifiedDate?:string,deletedDate?:string,unsubscribedDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    email;
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
    /** @type {Source} */
    source;
    /** @type {MailingList} */
    mailingLists;
    /** @type {string} */
    token;
    /** @type {string} */
    emailLower;
    /** @type {string} */
    nameLower;
    /** @type {string} */
    externalRef;
    /** @type {?number} */
    appUserId;
    /** @type {string} */
    createdDate;
    /** @type {?string} */
    verifiedDate;
    /** @type {?string} */
    deletedDate;
    /** @type {?string} */
    unsubscribedDate;
}
export class ThreadLike {
    /** @param {{id?:number,threadId?:number,appUserId?:number,createdDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    threadId;
    /** @type {number} */
    appUserId;
    /** @type {string} */
    createdDate;
}
export class CommentVote {
    /** @param {{id?:number,commentId?:number,appUserId?:number,vote?:number,createdDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    commentId;
    /** @type {number} */
    appUserId;
    /** @type {number} */
    vote;
    /** @type {string} */
    createdDate;
}
export class QueryBase {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {?number} */
    skip;
    /** @type {?number} */
    take;
    /** @type {string} */
    orderBy;
    /** @type {string} */
    orderByDesc;
    /** @type {string} */
    include;
    /** @type {string} */
    fields;
    /** @type {{ [index: string]: string; }} */
    meta;
}
/** @typedef T {any} */
export class QueryDb_1 extends QueryBase {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
}
export class MailTo {
    /** @param {{email?:string,name?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    email;
    /** @type {string} */
    name;
}
export class EmailMessage {
    /** @param {{to?:MailTo[],cc?:MailTo[],bcc?:MailTo[],from?:MailTo,subject?:string,body?:string,bodyHtml?:string,bodyText?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {MailTo[]} */
    to;
    /** @type {MailTo[]} */
    cc;
    /** @type {MailTo[]} */
    bcc;
    /** @type {?MailTo} */
    from;
    /** @type {string} */
    subject;
    /** @type {?string} */
    body;
    /** @type {?string} */
    bodyHtml;
    /** @type {?string} */
    bodyText;
}
export class ResponseError {
    /** @param {{errorCode?:string,fieldName?:string,message?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    errorCode;
    /** @type {string} */
    fieldName;
    /** @type {string} */
    message;
    /** @type {{ [index: string]: string; }} */
    meta;
}
export class ResponseStatus {
    /** @param {{errorCode?:string,message?:string,stackTrace?:string,errors?:ResponseError[],meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    errorCode;
    /** @type {string} */
    message;
    /** @type {string} */
    stackTrace;
    /** @type {ResponseError[]} */
    errors;
    /** @type {{ [index: string]: string; }} */
    meta;
}
export class MailMessage {
    /** @param {{id?:number,email?:string,layout?:string,template?:string,renderer?:string,rendererArgs?:{ [index: string]: Object; },message?:EmailMessage,draft?:boolean,externalRef?:string,createdDate?:string,startedDate?:string,completedDate?:string,error?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    email;
    /** @type {?string} */
    layout;
    /** @type {?string} */
    template;
    /** @type {string} */
    renderer;
    /** @type {{ [index: string]: Object; }} */
    rendererArgs;
    /** @type {EmailMessage} */
    message;
    /** @type {boolean} */
    draft;
    /** @type {string} */
    externalRef;
    /** @type {string} */
    createdDate;
    /** @type {?string} */
    startedDate;
    /** @type {?string} */
    completedDate;
    /** @type {?ResponseStatus} */
    error;
}
export class ArchiveMessage extends MailMessage {
    /** @param {{id?:number,email?:string,layout?:string,template?:string,renderer?:string,rendererArgs?:{ [index: string]: Object; },message?:EmailMessage,draft?:boolean,externalRef?:string,createdDate?:string,startedDate?:string,completedDate?:string,error?:ResponseStatus}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
}
export class MailRun {
    /** @param {{id?:number,mailingList?:MailingList,generator?:string,generatorArgs?:{ [index: string]: Object; },layout?:string,template?:string,externalRef?:string,createdDate?:string,generatedDate?:string,sentDate?:string,completedDate?:string,emailsCount?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {MailingList} */
    mailingList;
    /** @type {string} */
    generator;
    /** @type {{ [index: string]: Object; }} */
    generatorArgs;
    /** @type {string} */
    layout;
    /** @type {string} */
    template;
    /** @type {string} */
    externalRef;
    /** @type {string} */
    createdDate;
    /** @type {?string} */
    generatedDate;
    /** @type {?string} */
    sentDate;
    /** @type {?string} */
    completedDate;
    /** @type {number} */
    emailsCount;
}
export class ArchiveRun extends MailRun {
    /** @param {{id?:number,mailingList?:MailingList,generator?:string,generatorArgs?:{ [index: string]: Object; },layout?:string,template?:string,externalRef?:string,createdDate?:string,generatedDate?:string,sentDate?:string,completedDate?:string,emailsCount?:number}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
}
export class ArchiveMessageRun {
    /** @param {{id?:number,mailRunId?:number,contactId?:number,renderer?:string,rendererArgs?:{ [index: string]: Object; },externalRef?:string,message?:EmailMessage,createdDate?:string,startedDate?:string,completedDate?:string,error?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    mailRunId;
    /** @type {number} */
    contactId;
    /** @type {string} */
    renderer;
    /** @type {{ [index: string]: Object; }} */
    rendererArgs;
    /** @type {string} */
    externalRef;
    /** @type {EmailMessage} */
    message;
    /** @type {string} */
    createdDate;
    /** @type {?string} */
    startedDate;
    /** @type {?string} */
    completedDate;
    /** @type {?ResponseStatus} */
    error;
}
/** @typedef From {any} */
/** @typedef  Into {any} */
export class QueryDb_2 extends QueryBase {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
}
export class CommentResult {
    /** @param {{id?:number,threadId?:number,replyId?:number,content?:string,upVotes?:number,downVotes?:number,votes?:number,flagReason?:string,notes?:string,appUserId?:number,displayName?:string,handle?:string,profileUrl?:string,avatar?:string,createdDate?:string,modifiedDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    threadId;
    /** @type {?number} */
    replyId;
    /** @type {string} */
    content;
    /** @type {number} */
    upVotes;
    /** @type {number} */
    downVotes;
    /** @type {number} */
    votes;
    /** @type {?string} */
    flagReason;
    /** @type {?string} */
    notes;
    /** @type {number} */
    appUserId;
    /** @type {string} */
    displayName;
    /** @type {?string} */
    handle;
    /** @type {?string} */
    profileUrl;
    /** @type {?string} */
    avatar;
    /** @type {string} */
    createdDate;
    /** @type {string} */
    modifiedDate;
}
export class AppUser {
    /** @param {{id?:number,email?:string,userName?:string,displayName?:string,firstName?:string,lastName?:string,handle?:string,company?:string,profileUrl?:string,avatar?:string,lastLoginIp?:string,isArchived?:boolean,archivedDate?:string,lastLoginDate?:string,phoneNumber?:string,birthDate?:string,birthDateRaw?:string,address?:string,address2?:string,city?:string,state?:string,country?:string,culture?:string,fullName?:string,gender?:string,language?:string,mailAddress?:string,nickname?:string,postalCode?:string,timeZone?:string,meta?:{ [index: string]: string; },primaryEmail?:string,roles?:string[],permissions?:string[],refId?:number,refIdStr?:string,invalidLoginAttempts?:number,lastLoginAttempt?:string,lockedDate?:string,banUntilDate?:string,createdDate?:string,modifiedDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    email;
    /** @type {string} */
    userName;
    /** @type {string} */
    displayName;
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
    /** @type {?string} */
    handle;
    /** @type {string} */
    company;
    /** @type {?string} */
    profileUrl;
    /** @type {?string} */
    avatar;
    /** @type {?string} */
    lastLoginIp;
    /** @type {boolean} */
    isArchived;
    /** @type {?string} */
    archivedDate;
    /** @type {?string} */
    lastLoginDate;
    /** @type {string} */
    phoneNumber;
    /** @type {?string} */
    birthDate;
    /** @type {string} */
    birthDateRaw;
    /** @type {string} */
    address;
    /** @type {string} */
    address2;
    /** @type {string} */
    city;
    /** @type {string} */
    state;
    /** @type {string} */
    country;
    /** @type {string} */
    culture;
    /** @type {string} */
    fullName;
    /** @type {string} */
    gender;
    /** @type {string} */
    language;
    /** @type {string} */
    mailAddress;
    /** @type {string} */
    nickname;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    timeZone;
    /** @type {{ [index: string]: string; }} */
    meta;
    /** @type {string} */
    primaryEmail;
    /** @type {string[]} */
    roles;
    /** @type {string[]} */
    permissions;
    /** @type {?number} */
    refId;
    /** @type {string} */
    refIdStr;
    /** @type {number} */
    invalidLoginAttempts;
    /** @type {?string} */
    lastLoginAttempt;
    /** @type {?string} */
    lockedDate;
    /** @type {?string} */
    banUntilDate;
    /** @type {string} */
    createdDate;
    /** @type {string} */
    modifiedDate;
}
export class MailMessageRun {
    /** @param {{id?:number,mailRunId?:number,contactId?:number,contact?:Contact,renderer?:string,rendererArgs?:{ [index: string]: Object; },externalRef?:string,message?:EmailMessage,createdDate?:string,startedDate?:string,completedDate?:string,error?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    mailRunId;
    /** @type {number} */
    contactId;
    /** @type {Contact} */
    contact;
    /** @type {string} */
    renderer;
    /** @type {{ [index: string]: Object; }} */
    rendererArgs;
    /** @type {string} */
    externalRef;
    /** @type {EmailMessage} */
    message;
    /** @type {string} */
    createdDate;
    /** @type {?string} */
    startedDate;
    /** @type {?string} */
    completedDate;
    /** @type {?ResponseStatus} */
    error;
}
export class Thread {
    /** @param {{id?:number,url?:string,description?:string,externalRef?:string,viewCount?:number,likesCount?:number,commentsCount?:number,refId?:number,refIdStr?:string,createdDate?:string,closedDate?:string,deletedDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    url;
    /** @type {string} */
    description;
    /** @type {string} */
    externalRef;
    /** @type {number} */
    viewCount;
    /** @type {number} */
    likesCount;
    /** @type {number} */
    commentsCount;
    /** @type {?number} */
    refId;
    /** @type {string} */
    refIdStr;
    /** @type {string} */
    createdDate;
    /** @type {?string} */
    closedDate;
    /** @type {?string} */
    deletedDate;
}
export class ViewMqMessagesResponse {
    /** @param {{messages?:{ [index: string]: IMessage[]; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {{ [index: string]: IMessage[]; }} */
    messages;
}
export class MailRunResponse {
    /** @param {{id?:number,startedAt?:string,timeTaken?:string,createdIds?:number[],responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    startedAt;
    /** @type {string} */
    timeTaken;
    /** @type {number[]} */
    createdIds;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class FindContactResponse {
    /** @param {{result?:Contact,responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {Contact} */
    result;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class ViewMailRunInfoResponse {
    /** @param {{messagesSent?:number,totalMessages?:number,timeTaken?:string,responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    messagesSent;
    /** @type {number} */
    totalMessages;
    /** @type {string} */
    timeTaken;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class ViewAppDataResponse {
    /** @param {{baseUrl?:string,appBaseUrl?:string,vars?:{ [index: string]: { [index:string]: string; }; },bannedUserIds?:number[],responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    baseUrl;
    /** @type {string} */
    appBaseUrl;
    /** @type {{ [index: string]: { [index:string]: string; }; }} */
    vars;
    /** @type {number[]} */
    bannedUserIds;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class ViewAppStatsResponse {
    /** @param {{totals?:{ [index: string]: number; },before30DayTotals?:{ [index: string]: number; },last30DayTotals?:{ [index: string]: number; },archivedTotals?:{ [index: string]: number; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {{ [index: string]: number; }} */
    totals;
    /** @type {{ [index: string]: number; }} */
    before30DayTotals;
    /** @type {{ [index: string]: number; }} */
    last30DayTotals;
    /** @type {{ [index: string]: number; }} */
    archivedTotals;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class ArchiveMailResponse {
    /** @param {{archivedMessageIds?:number[],archivedMailRunIds?:number[],responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number[]} */
    archivedMessageIds;
    /** @type {number[]} */
    archivedMailRunIds;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class HelloResponse {
    /** @param {{result?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    result;
}
export class GetThreadUserDataResponse {
    /** @param {{threadId?:number,liked?:boolean,upVoted?:number[],downVoted?:number[],responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    threadId;
    /** @type {boolean} */
    liked;
    /** @type {number[]} */
    upVoted;
    /** @type {number[]} */
    downVoted;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class GetThreadResponse {
    /** @param {{result?:Thread,responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {Thread} */
    result;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class AuthenticateResponse {
    /** @param {{userId?:string,sessionId?:string,userName?:string,displayName?:string,referrerUrl?:string,bearerToken?:string,refreshToken?:string,profileUrl?:string,roles?:string[],permissions?:string[],responseStatus?:ResponseStatus,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userId;
    /** @type {string} */
    sessionId;
    /** @type {string} */
    userName;
    /** @type {string} */
    displayName;
    /** @type {string} */
    referrerUrl;
    /** @type {string} */
    bearerToken;
    /** @type {string} */
    refreshToken;
    /** @type {string} */
    profileUrl;
    /** @type {string[]} */
    roles;
    /** @type {string[]} */
    permissions;
    /** @type {ResponseStatus} */
    responseStatus;
    /** @type {{ [index: string]: string; }} */
    meta;
}
export class AssignRolesResponse {
    /** @param {{allRoles?:string[],allPermissions?:string[],meta?:{ [index: string]: string; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string[]} */
    allRoles;
    /** @type {string[]} */
    allPermissions;
    /** @type {{ [index: string]: string; }} */
    meta;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class UnAssignRolesResponse {
    /** @param {{allRoles?:string[],allPermissions?:string[],meta?:{ [index: string]: string; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string[]} */
    allRoles;
    /** @type {string[]} */
    allPermissions;
    /** @type {{ [index: string]: string; }} */
    meta;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class RegisterResponse {
    /** @param {{userId?:string,sessionId?:string,userName?:string,referrerUrl?:string,bearerToken?:string,refreshToken?:string,roles?:string[],permissions?:string[],responseStatus?:ResponseStatus,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userId;
    /** @type {string} */
    sessionId;
    /** @type {string} */
    userName;
    /** @type {string} */
    referrerUrl;
    /** @type {string} */
    bearerToken;
    /** @type {string} */
    refreshToken;
    /** @type {string[]} */
    roles;
    /** @type {string[]} */
    permissions;
    /** @type {ResponseStatus} */
    responseStatus;
    /** @type {{ [index: string]: string; }} */
    meta;
}
/** @typedef T {any} */
export class QueryResponse {
    /** @param {{offset?:number,total?:number,results?:T[],meta?:{ [index: string]: string; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    offset;
    /** @type {number} */
    total;
    /** @type {T[]} */
    results;
    /** @type {{ [index: string]: string; }} */
    meta;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class AdminUpdateCommentReport {
    /** @param {{id?:number,appUserId?:number,postReport?:PostReport,description?:string,moderation?:ModerationDecision,notes?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?number} */
    appUserId;
    /** @type {?PostReport} */
    postReport;
    /** @type {?string} */
    description;
    /** @type {?ModerationDecision} */
    moderation;
    /** @type {?string} */
    notes;
    getTypeName() { return 'AdminUpdateCommentReport' }
    getMethod() { return 'PATCH' }
    createResponse() { return new CommentReport() }
}
export class ViewMqMessages {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'ViewMqMessages' }
    getMethod() { return 'GET' }
    createResponse() { return new ViewMqMessagesResponse() }
}
export class PreviewEmail {
    /** @param {{request?:string,renderer?:string,requestArgs?:{ [index: string]: Object; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {?string} */
    request;
    /** @type {?string} */
    renderer;
    /** @type {{ [index: string]: Object; }} */
    requestArgs;
    getTypeName() { return 'PreviewEmail' }
    getMethod() { return 'POST' }
    createResponse() { return '' }
}
export class SimpleTextMailRun extends MailRunBase {
    /** @param {{subject?:string,body?:string,mailingList?:MailingList}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    subject;
    /** @type {string} */
    body;
    getTypeName() { return 'SimpleTextMailRun' }
    getMethod() { return 'POST' }
    createResponse() { return new MailRunResponse() }
}
export class MarkdownMailRun extends MailRunBase {
    /** @param {{subject?:string,body?:string,mailingList?:MailingList}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    subject;
    /** @type {string} */
    body;
    getTypeName() { return 'MarkdownMailRun' }
    getMethod() { return 'POST' }
    createResponse() { return new MailRunResponse() }
}
export class CustomHtmlMailRun extends MailRunBase {
    /** @param {{layout?:string,template?:string,subject?:string,body?:string,mailingList?:MailingList}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    layout;
    /** @type {string} */
    template;
    /** @type {string} */
    subject;
    /** @type {string} */
    body;
    getTypeName() { return 'CustomHtmlMailRun' }
    getMethod() { return 'POST' }
    createResponse() { return new MailRunResponse() }
}
export class NewsletterMailRun extends MailRunBase {
    /** @param {{month?:number,year?:number,mailingList?:MailingList}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    month;
    /** @type {?number} */
    year;
    getTypeName() { return 'NewsletterMailRun' }
    getMethod() { return 'POST' }
    createResponse() { return new MailRunResponse() }
}
export class UpdateMailMessageDraft {
    /** @param {{id?:number,email?:string,renderer?:string,layout?:string,template?:string,subject?:string,body?:string,send?:boolean}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    email;
    /** @type {string} */
    renderer;
    /** @type {?string} */
    layout;
    /** @type {?string} */
    template;
    /** @type {string} */
    subject;
    /** @type {?string} */
    body;
    /** @type {?boolean} */
    send;
    getTypeName() { return 'UpdateMailMessageDraft' }
    getMethod() { return 'POST' }
    createResponse() { return new MailMessage() }
}
export class SimpleTextEmail extends CreateEmailBase {
    /** @param {{subject?:string,body?:string,draft?:boolean,email?:string,firstName?:string,lastName?:string}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    subject;
    /** @type {string} */
    body;
    /** @type {?boolean} */
    draft;
    getTypeName() { return 'SimpleTextEmail' }
    getMethod() { return 'POST' }
    createResponse() { return new MailMessage() }
}
export class MarkdownEmail extends CreateEmailBase {
    /** @param {{subject?:string,body?:string,draft?:boolean,email?:string,firstName?:string,lastName?:string}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    subject;
    /** @type {string} */
    body;
    /** @type {?boolean} */
    draft;
    getTypeName() { return 'MarkdownEmail' }
    getMethod() { return 'POST' }
    createResponse() { return new MailMessage() }
}
export class CustomHtmlEmail extends CreateEmailBase {
    /** @param {{layout?:string,template?:string,subject?:string,body?:string,draft?:boolean,email?:string,firstName?:string,lastName?:string}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    layout;
    /** @type {string} */
    template;
    /** @type {string} */
    subject;
    /** @type {?string} */
    body;
    /** @type {?boolean} */
    draft;
    getTypeName() { return 'CustomHtmlEmail' }
    getMethod() { return 'POST' }
    createResponse() { return new MailMessage() }
}
export class SubscribeToMailingList {
    /** @param {{email?:string,firstName?:string,lastName?:string,source?:Source,mailingLists?:string[]}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    email;
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
    /** @type {Source} */
    source;
    /** @type {?string[]} */
    mailingLists;
    getTypeName() { return 'SubscribeToMailingList' }
    getMethod() { return 'POST' }
    createResponse() { }
}
export class CreateContact {
    /** @param {{email?:string,firstName?:string,lastName?:string,source?:Source,mailingLists?:string[]}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    email;
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
    /** @type {Source} */
    source;
    /** @type {?string[]} */
    mailingLists;
    getTypeName() { return 'CreateContact' }
    getMethod() { return 'POST' }
    createResponse() { return new Contact() }
}
export class UpdateContactMailingLists {
    /** @param {{ref?:string,mailingLists?:string[],unsubscribeAll?:boolean}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    ref;
    /** @type {string[]} */
    mailingLists;
    /** @type {?boolean} */
    unsubscribeAll;
    getTypeName() { return 'UpdateContactMailingLists' }
    getMethod() { return 'POST' }
    createResponse() { }
}
export class FindContact {
    /** @param {{email?:string,ref?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {?string} */
    email;
    /** @type {?string} */
    ref;
    getTypeName() { return 'FindContact' }
    getMethod() { return 'GET' }
    createResponse() { return new FindContactResponse() }
}
export class SendMailMessage {
    /** @param {{id?:number,force?:boolean}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?boolean} */
    force;
    getTypeName() { return 'SendMailMessage' }
    getMethod() { return 'GET' }
    createResponse() { return new MailMessage() }
}
export class SendMailMessageRun {
    /** @param {{id?:number,force?:boolean}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?boolean} */
    force;
    getTypeName() { return 'SendMailMessageRun' }
    getMethod() { return 'GET' }
    createResponse() { return new MailMessage() }
}
export class ViewMailData {
    /** @param {{load?:boolean}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {?boolean} */
    load;
    getTypeName() { return 'ViewMailData' }
    getMethod() { return 'POST' }
    createResponse () { };
}
export class VerifyEmailAddress {
    /** @param {{externalRef?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    externalRef;
    getTypeName() { return 'VerifyEmailAddress' }
    getMethod() { return 'POST' }
    createResponse() { }
}
export class SendMailRun {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'SendMailRun' }
    getMethod() { return 'POST' }
    createResponse() { }
}
export class ViewMailRunInfo {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'ViewMailRunInfo' }
    getMethod() { return 'GET' }
    createResponse() { return new ViewMailRunInfoResponse() }
}
export class ViewAppData {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'ViewAppData' }
    getMethod() { return 'GET' }
    createResponse() { return new ViewAppDataResponse() }
}
export class ViewAppStats {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'ViewAppStats' }
    getMethod() { return 'GET' }
    createResponse() { return new ViewAppStatsResponse() }
}
export class ArchiveMail {
    /** @param {{messages?:boolean,mailRuns?:boolean,olderThanDays?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {?boolean} */
    messages;
    /** @type {?boolean} */
    mailRuns;
    /** @type {number} */
    olderThanDays;
    getTypeName() { return 'ArchiveMail' }
    getMethod() { return 'POST' }
    createResponse() { return new ArchiveMailResponse() }
}
export class Hello {
    /** @param {{name?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    name;
    getTypeName() { return 'Hello' }
    getMethod() { return 'POST' }
    createResponse() { return new HelloResponse() }
}
export class GetThreadUserData {
    /** @param {{threadId?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    threadId;
    getTypeName() { return 'GetThreadUserData' }
    getMethod() { return 'GET' }
    createResponse() { return new GetThreadUserDataResponse() }
}
export class GetThread {
    /** @param {{id?:number,url?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {?number} */
    id;
    /** @type {?string} */
    url;
    getTypeName() { return 'GetThread' }
    getMethod() { return 'GET' }
    createResponse() { return new GetThreadResponse() }
}
export class CreateThreadLike {
    /** @param {{threadId?:number,vote?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    threadId;
    /** @type {number} */
    vote;
    getTypeName() { return 'CreateThreadLike' }
    getMethod() { return 'POST' }
    createResponse() { }
}
export class DeleteThreadLike {
    /** @param {{threadId?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    threadId;
    getTypeName() { return 'DeleteThreadLike' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class CreateCommentVote {
    /** @param {{commentId?:number,vote?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    commentId;
    /** @type {number} */
    vote;
    getTypeName() { return 'CreateCommentVote' }
    getMethod() { return 'POST' }
    createResponse() { }
}
export class DeleteCommentVote {
    /** @param {{commentId?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    commentId;
    getTypeName() { return 'DeleteCommentVote' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class Authenticate {
    /** @param {{provider?:string,state?:string,oauth_token?:string,oauth_verifier?:string,userName?:string,password?:string,rememberMe?:boolean,errorView?:string,nonce?:string,uri?:string,response?:string,qop?:string,nc?:string,cnonce?:string,accessToken?:string,accessTokenSecret?:string,scope?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /**
     * @type {string}
     * @description AuthProvider, e.g. credentials */
    provider;
    /** @type {string} */
    state;
    /** @type {string} */
    oauth_token;
    /** @type {string} */
    oauth_verifier;
    /** @type {string} */
    userName;
    /** @type {string} */
    password;
    /** @type {?boolean} */
    rememberMe;
    /** @type {string} */
    errorView;
    /** @type {string} */
    nonce;
    /** @type {string} */
    uri;
    /** @type {string} */
    response;
    /** @type {string} */
    qop;
    /** @type {string} */
    nc;
    /** @type {string} */
    cnonce;
    /** @type {string} */
    accessToken;
    /** @type {string} */
    accessTokenSecret;
    /** @type {string} */
    scope;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'Authenticate' }
    getMethod() { return 'POST' }
    createResponse() { return new AuthenticateResponse() }
}
export class AssignRoles {
    /** @param {{userName?:string,permissions?:string[],roles?:string[],meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userName;
    /** @type {string[]} */
    permissions;
    /** @type {string[]} */
    roles;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'AssignRoles' }
    getMethod() { return 'POST' }
    createResponse() { return new AssignRolesResponse() }
}
export class UnAssignRoles {
    /** @param {{userName?:string,permissions?:string[],roles?:string[],meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userName;
    /** @type {string[]} */
    permissions;
    /** @type {string[]} */
    roles;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'UnAssignRoles' }
    getMethod() { return 'POST' }
    createResponse() { return new UnAssignRolesResponse() }
}
export class Register {
    /** @param {{userName?:string,firstName?:string,lastName?:string,displayName?:string,email?:string,password?:string,confirmPassword?:string,autoLogin?:boolean,errorView?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userName;
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
    /** @type {string} */
    displayName;
    /** @type {string} */
    email;
    /** @type {string} */
    password;
    /** @type {string} */
    confirmPassword;
    /** @type {?boolean} */
    autoLogin;
    /** @type {string} */
    errorView;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'Register' }
    getMethod() { return 'POST' }
    createResponse() { return new RegisterResponse() }
}
export class QueryContacts extends QueryDb_1 {
    /** @param {{search?:string,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?string} */
    search;
    getTypeName() { return 'QueryContacts' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryMailMessages extends QueryDb_1 {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryMailMessages' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryMailRuns extends QueryDb_1 {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QueryMailRuns' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryMailRunMessages extends QueryDb_1 {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryMailRunMessages' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryArchiveMessages extends QueryDb_1 {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryArchiveMessages' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryArchiveRuns extends QueryDb_1 {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryArchiveRuns' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryArchiveMessageRuns extends QueryDb_1 {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryArchiveMessageRuns' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryComments extends QueryDb_2 {
    /** @param {{threadId?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    threadId;
    getTypeName() { return 'QueryComments' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryCommentVotes extends QueryDb_1 {
    /** @param {{threadId?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {number} */
    threadId;
    getTypeName() { return 'QueryCommentVotes' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class AdminQueryAppUsers extends QueryDb_1 {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'AdminQueryAppUsers' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class AdminQueryThreads extends QueryDb_1 {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'AdminQueryThreads' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class AdminQueryComments extends QueryDb_1 {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'AdminQueryComments' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class AdminQueryCommentVotes extends QueryDb_1 {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'AdminQueryCommentVotes' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class AdminQueryCommentReports extends QueryDb_1 {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'AdminQueryCommentReports' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class UpdateContact {
    /** @param {{id?:number,email?:string,firstName?:string,lastName?:string,source?:Source,mailingLists?:string[],externalRef?:string,appUserId?:number,createdDate?:string,verifiedDate?:string,deletedDate?:string,unsubscribedDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?string} */
    email;
    /** @type {?string} */
    firstName;
    /** @type {?string} */
    lastName;
    /** @type {?Source} */
    source;
    /** @type {?string[]} */
    mailingLists;
    /** @type {?string} */
    externalRef;
    /** @type {?number} */
    appUserId;
    /** @type {?string} */
    createdDate;
    /** @type {?string} */
    verifiedDate;
    /** @type {?string} */
    deletedDate;
    /** @type {?string} */
    unsubscribedDate;
    getTypeName() { return 'UpdateContact' }
    getMethod() { return 'PATCH' }
    createResponse() { return new Contact() }
}
export class DeleteContact {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteContact' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class UpdateMailMessage {
    /** @param {{id?:number,email?:string,layout?:string,template?:string,renderer?:string,rendererArgs?:{ [index: string]: Object; },message?:EmailMessage,completedDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?string} */
    email;
    /** @type {?string} */
    layout;
    /** @type {?string} */
    template;
    /** @type {?string} */
    renderer;
    /** @type {?{ [index: string]: Object; }} */
    rendererArgs;
    /** @type {?EmailMessage} */
    message;
    /** @type {?string} */
    completedDate;
    getTypeName() { return 'UpdateMailMessage' }
    getMethod() { return 'PATCH' }
    createResponse() { return new MailMessage() }
}
export class DeleteMailMessages {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteMailMessages' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class CreateMailRun {
    /** @param {{mailingList?:MailingList,layout?:string,template?:string,generator?:string,generatorArgs?:{ [index: string]: Object; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {MailingList} */
    mailingList;
    /** @type {string} */
    layout;
    /** @type {string} */
    template;
    /** @type {string} */
    generator;
    /** @type {{ [index: string]: Object; }} */
    generatorArgs;
    getTypeName() { return 'CreateMailRun' }
    getMethod() { return 'POST' }
    createResponse() { return new MailRun() }
}
export class UpdateMailRun {
    /** @param {{id?:number,mailingList?:MailingList,layout?:string,template?:string,generator?:string,generatorArgs?:{ [index: string]: Object; },createdDate?:string,generatedDate?:string,sentDate?:string,completedDate?:string,emailsCount?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?MailingList} */
    mailingList;
    /** @type {?string} */
    layout;
    /** @type {?string} */
    template;
    /** @type {?string} */
    generator;
    /** @type {?{ [index: string]: Object; }} */
    generatorArgs;
    /** @type {string} */
    createdDate;
    /** @type {?string} */
    generatedDate;
    /** @type {?string} */
    sentDate;
    /** @type {?string} */
    completedDate;
    /** @type {?number} */
    emailsCount;
    getTypeName() { return 'UpdateMailRun' }
    getMethod() { return 'PUT' }
    createResponse() { return new MailRun() }
}
export class DeleteMailRun {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteMailRun' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class UpdateMailRunMessage {
    /** @param {{id?:number,mailRunId?:number,contactId?:number,renderer?:string,rendererArgs?:{ [index: string]: Object; },message?:EmailMessage,startedDate?:string,completedDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    mailRunId;
    /** @type {number} */
    contactId;
    /** @type {string} */
    renderer;
    /** @type {{ [index: string]: Object; }} */
    rendererArgs;
    /** @type {?EmailMessage} */
    message;
    /** @type {?string} */
    startedDate;
    /** @type {?string} */
    completedDate;
    getTypeName() { return 'UpdateMailRunMessage' }
    getMethod() { return 'PATCH' }
    createResponse() { return new MailMessageRun() }
}
export class DeleteMailRunMessage {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteMailRunMessage' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class CreateComment {
    /** @param {{threadId?:number,replyId?:number,content?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    threadId;
    /** @type {?number} */
    replyId;
    /** @type {string} */
    content;
    getTypeName() { return 'CreateComment' }
    getMethod() { return 'POST' }
    createResponse() { return new Comment() }
}
export class UpdateComment {
    /** @param {{id?:number,content?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?string} */
    content;
    getTypeName() { return 'UpdateComment' }
    getMethod() { return 'PATCH' }
    createResponse() { return new Comment() }
}
export class DeleteComment {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteComment' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class CreateCommentReport {
    /** @param {{commentId?:number,postReport?:PostReport,description?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    commentId;
    /** @type {PostReport} */
    postReport;
    /** @type {?string} */
    description;
    getTypeName() { return 'CreateCommentReport' }
    getMethod() { return 'POST' }
    createResponse() { }
}
export class AdminUpdateThread {
    /** @param {{id?:number,url?:string,description?:string,externalRef?:string,refId?:number,refIdStr?:string,createdDate?:string,closedDate?:string,deletedDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    url;
    /** @type {string} */
    description;
    /** @type {string} */
    externalRef;
    /** @type {?number} */
    refId;
    /** @type {string} */
    refIdStr;
    /** @type {string} */
    createdDate;
    /** @type {?string} */
    closedDate;
    /** @type {?string} */
    deletedDate;
    getTypeName() { return 'AdminUpdateThread' }
    getMethod() { return 'PATCH' }
    createResponse() { return new Thread() }
}
export class AdminDeleteThread {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'AdminDeleteThread' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class AdminUpdateComment {
    /** @param {{id?:number,threadId?:number,replyId?:number,upVotes?:number,downVotes?:number,votes?:number,flagReason?:string,notes?:string,appUserId?:number,content?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?number} */
    threadId;
    /** @type {?number} */
    replyId;
    /** @type {?number} */
    upVotes;
    /** @type {?number} */
    downVotes;
    /** @type {?number} */
    votes;
    /** @type {?string} */
    flagReason;
    /** @type {?string} */
    notes;
    /** @type {?number} */
    appUserId;
    /** @type {string} */
    content;
    getTypeName() { return 'AdminUpdateComment' }
    getMethod() { return 'PATCH' }
    createResponse() { return new Comment() }
}
export class AdminDeleteComment {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'AdminDeleteComment' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class AdminUpdateCommentVote {
    /** @param {{id?:number,commentId?:number,appUserId?:number,vote?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    commentId;
    /** @type {number} */
    appUserId;
    /** @type {number} */
    vote;
    getTypeName() { return 'AdminUpdateCommentVote' }
    getMethod() { return 'PATCH' }
    createResponse() { return new CommentVote() }
}
export class AdminDeleteCommentVote {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'AdminDeleteCommentVote' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class AdminDeleteCommentReport {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'AdminDeleteCommentReport' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}

