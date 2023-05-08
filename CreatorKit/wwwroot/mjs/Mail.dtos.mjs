/* Options:
Date: 2023-05-08 18:45:27
Version: 6.81
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//AddServiceStackTypes: True
//AddDocAnnotations: True
//AddDescriptionAsComments: True
IncludeTypes: {Mail}
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
export class QueryDb extends QueryBase {
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
export class QueryContacts extends QueryDb {
    /** @param {{search?:string,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?string} */
    search;
    getTypeName() { return 'QueryContacts' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryMailMessages extends QueryDb {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryMailMessages' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryMailRuns extends QueryDb {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QueryMailRuns' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryMailRunMessages extends QueryDb {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryMailRunMessages' }
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

