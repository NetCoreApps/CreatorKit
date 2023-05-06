/* Options:
Date: 2023-05-07 01:16:10
Version: 6.81
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//AddServiceStackTypes: True
//AddDocAnnotations: True
//AddDescriptionAsComments: True
IncludeTypes: {Posts}
//ExcludeTypes: 
//DefaultImports: 
*/

"use strict";
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

