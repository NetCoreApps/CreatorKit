/* Options:
Date: 2023-05-03 00:35:07
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
/** @typedef {'Unknown'|'UI'|'Website'} */
export var MailSource;
(function (MailSource) {
    MailSource["Unknown"] = "Unknown"
    MailSource["UI"] = "UI"
    MailSource["Website"] = "Website"
})(MailSource || (MailSource = {}));
export class Subscription {
    /** @param {{id?:number,email?:string,firstName?:string,lastName?:string,mailingLists?:MailingList,source?:MailSource,token?:string,emailLower?:string,nameLower?:string,externalRef?:string,appUserId?:number,createdDate?:string,verifiedDate?:string,deletedDate?:string,unsubscribedDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    email;
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
    /** @type {MailingList} */
    mailingLists;
    /** @type {MailSource} */
    source;
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
export class MailTo {
    /** @param {{email?:string,name?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    email;
    /** @type {string} */
    name;
}
export class EmailMessage {
    /** @param {{to?:MailTo[],cc?:MailTo[],bcc?:MailTo[],from?:MailTo,subject?:string,bodyHtml?:string,bodyText?:string}} [init] */
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
    bodyHtml;
    /** @type {?string} */
    bodyText;
}
export class MailMessage {
    /** @param {{id?:number,email?:string,layout?:string,page?:string,renderer?:string,rendererArgs?:{ [index: string]: Object; },message?:EmailMessage,startedDate?:string,completedDate?:string,errorCode?:string,errorMessage?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    email;
    /** @type {string} */
    layout;
    /** @type {string} */
    page;
    /** @type {string} */
    renderer;
    /** @type {{ [index: string]: Object; }} */
    rendererArgs;
    /** @type {EmailMessage} */
    message;
    /** @type {?string} */
    startedDate;
    /** @type {?string} */
    completedDate;
    /** @type {?string} */
    errorCode;
    /** @type {?string} */
    errorMessage;
}
export class MailRun {
    /** @param {{id?:number,mailingList?:MailingList,layout?:string,page?:string,generator?:string,generatorArgs?:{ [index: string]: Object; },createdDate?:string,generatedDate?:string,sentDate?:string,completedDate?:string,emailsCount?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {MailingList} */
    mailingList;
    /** @type {string} */
    layout;
    /** @type {string} */
    page;
    /** @type {string} */
    generator;
    /** @type {{ [index: string]: Object; }} */
    generatorArgs;
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
export class MailMessageRun {
    /** @param {{id?:number,mailRunId?:number,subscriptionId?:number,subscription?:Subscription,renderer?:string,rendererArgs?:{ [index: string]: Object; },message?:EmailMessage,startedDate?:string,completedDate?:string,errorCode?:string,errorMessage?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    mailRunId;
    /** @type {number} */
    subscriptionId;
    /** @type {Subscription} */
    subscription;
    /** @type {string} */
    renderer;
    /** @type {{ [index: string]: Object; }} */
    rendererArgs;
    /** @type {EmailMessage} */
    message;
    /** @type {?string} */
    startedDate;
    /** @type {?string} */
    completedDate;
    /** @type {?string} */
    errorCode;
    /** @type {?string} */
    errorMessage;
}
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
/** @typedef {'Offensive'|'Spam'|'Nudity'|'Illegal'|'Other'} */
export var PostReport;
(function (PostReport) {
    PostReport["Offensive"] = "Offensive"
    PostReport["Spam"] = "Spam"
    PostReport["Nudity"] = "Nudity"
    PostReport["Illegal"] = "Illegal"
    PostReport["Other"] = "Other"
})(PostReport || (PostReport = {}));
export class CommentReport {
    /** @param {{id?:number,commentId?:number,appUserId?:number,postReport?:PostReport,description?:string,createdDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    commentId;
    /** @type {number} */
    appUserId;
    /** @type {PostReport} */
    postReport;
    /** @type {string} */
    description;
    /** @type {string} */
    createdDate;
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
export class ViewMqMessagesResponse {
    /** @param {{messages?:{ [index: string]: IMessage[]; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {{ [index: string]: IMessage[]; }} */
    messages;
}
export class MailResponse {
    /** @param {{to?:MailTo,subject?:string,sendUrl?:string,viewUrl?:string,responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {MailTo} */
    to;
    /** @type {string} */
    subject;
    /** @type {string} */
    sendUrl;
    /** @type {string} */
    viewUrl;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class CreateNewsletterMailRunResponse {
    /** @param {{startedAt?:string,timeTaken?:string,createdIds?:number[],responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    startedAt;
    /** @type {string} */
    timeTaken;
    /** @type {number[]} */
    createdIds;
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
export class ViewMqMessages {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'ViewMqMessages' }
    getMethod() { return 'GET' }
    createResponse() { return new ViewMqMessagesResponse() }
}
export class MailNewsletter {
    /** @param {{email?:string,subject?:string,month?:number,year?:number,send?:boolean}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    email;
    /** @type {?string} */
    subject;
    /** @type {?number} */
    month;
    /** @type {?number} */
    year;
    /** @type {?boolean} */
    send;
    getTypeName() { return 'MailNewsletter' }
    getMethod() { return 'GET' }
    createResponse() { return new MailResponse() }
}
export class MailTestMail {
    /** @param {{email?:string,firstName?:string,lastName?:string,subject?:string,layout?:string,page?:string,title?:string,body?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    email;
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
    /** @type {?string} */
    subject;
    /** @type {?string} */
    layout;
    /** @type {?string} */
    page;
    /** @type {?string} */
    title;
    /** @type {?string} */
    body;
    getTypeName() { return 'MailTestMail' }
    getMethod() { return 'POST' }
    createResponse() { return new MailResponse() }
}
export class CreateNewsletterMailRun extends MailRunBase {
    /** @param {{month?:number,year?:number,mailingList?:MailingList}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    month;
    /** @type {?number} */
    year;
    getTypeName() { return 'CreateNewsletterMailRun' }
    getMethod() { return 'POST' }
    createResponse() { return new CreateNewsletterMailRunResponse() }
}
export class CreateSubscription {
    /** @param {{email?:string,firstName?:string,lastName?:string,mailingLists?:string[],source?:MailSource}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    email;
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
    /** @type {?string[]} */
    mailingLists;
    /** @type {MailSource} */
    source;
    getTypeName() { return 'CreateSubscription' }
    getMethod() { return 'POST' }
    createResponse() { return new Subscription() }
}
export class UnsubscribeFromMailingList {
    /** @param {{email?:string,externalRef?:string,mailingLists?:string[]}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {?string} */
    email;
    /** @type {?string} */
    externalRef;
    /** @type {string[]} */
    mailingLists;
    getTypeName() { return 'UnsubscribeFromMailingList' }
    getMethod() { return 'POST' }
    createResponse() { }
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
export class CreateSimpleTextEmail extends CreateEmailBase {
    /** @param {{subject?:string,body?:string,send?:boolean,email?:string,firstName?:string,lastName?:string}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    subject;
    /** @type {string} */
    body;
    /** @type {?boolean} */
    send;
    getTypeName() { return 'CreateSimpleTextEmail' }
    getMethod() { return 'POST' }
    createResponse() { return new MailMessage() }
}
export class CreateMarkdownHtmlEmail extends CreateEmailBase {
    /** @param {{layout?:string,page?:string,title?:string,subject?:string,body?:string,send?:boolean,email?:string,firstName?:string,lastName?:string}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    layout;
    /** @type {string} */
    page;
    /** @type {string} */
    title;
    /** @type {string} */
    subject;
    /** @type {?string} */
    body;
    /** @type {?boolean} */
    send;
    getTypeName() { return 'CreateMarkdownHtmlEmail' }
    getMethod() { return 'POST' }
    createResponse() { return new MailMessage() }
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
export class QuerySubscriptions extends QueryDb_1 {
    /** @param {{search?:string,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?string} */
    search;
    getTypeName() { return 'QuerySubscriptions' }
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
export class QueryComments extends QueryDb_2 {
    /** @param {{threadId?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {number} */
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
export class QueryThreads extends QueryDb_1 {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QueryThreads' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class UpdateSubscription {
    /** @param {{id?:number,email?:string,firstName?:string,lastName?:string,source?:MailSource,mailingLists?:string[],externalRef?:string,appUserId?:number,createdDate?:string,verifiedDate?:string,deletedDate?:string,unsubscribedDate?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?string} */
    email;
    /** @type {?string} */
    firstName;
    /** @type {?string} */
    lastName;
    /** @type {?MailSource} */
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
    getTypeName() { return 'UpdateSubscription' }
    getMethod() { return 'PATCH' }
    createResponse() { return new Subscription() }
}
export class DeleteSubscription {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteSubscription' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class UpdateMailMessage {
    /** @param {{id?:number,email?:string,layout?:string,page?:string,renderer?:string,rendererArgs?:{ [index: string]: Object; },message?:EmailMessage,completedDate?:string,errorCode?:string,errorMessage?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?string} */
    email;
    /** @type {?string} */
    layout;
    /** @type {?string} */
    page;
    /** @type {?string} */
    renderer;
    /** @type {?{ [index: string]: Object; }} */
    rendererArgs;
    /** @type {?EmailMessage} */
    message;
    /** @type {?string} */
    completedDate;
    /** @type {?string} */
    errorCode;
    /** @type {?string} */
    errorMessage;
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
    /** @param {{mailingList?:MailingList,layout?:string,page?:string,generator?:string,generatorArgs?:{ [index: string]: Object; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {MailingList} */
    mailingList;
    /** @type {string} */
    layout;
    /** @type {string} */
    page;
    /** @type {string} */
    generator;
    /** @type {{ [index: string]: Object; }} */
    generatorArgs;
    getTypeName() { return 'CreateMailRun' }
    getMethod() { return 'POST' }
    createResponse() { return new MailRun() }
}
export class UpdateMailRun {
    /** @param {{id?:number,mailingList?:MailingList,layout?:string,page?:string,generator?:string,generatorArgs?:{ [index: string]: Object; },createdDate?:string,generatedDate?:string,sentDate?:string,completedDate?:string,emailsCount?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?MailingList} */
    mailingList;
    /** @type {?string} */
    layout;
    /** @type {?string} */
    page;
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
    /** @param {{id?:number,mailRunId?:number,subscriptionId?:number,renderer?:string,rendererArgs?:{ [index: string]: Object; },message?:EmailMessage,startedDate?:string,completedDate?:string,errorCode?:string,errorMessage?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    mailRunId;
    /** @type {number} */
    subscriptionId;
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
    /** @type {?string} */
    errorCode;
    /** @type {?string} */
    errorMessage;
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
export class DeleteCommentReport {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteCommentReport' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class UpdateThread {
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
    getTypeName() { return 'UpdateThread' }
    getMethod() { return 'PATCH' }
    createResponse() { return new Thread() }
}
export class DeleteThread {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteThread' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}

