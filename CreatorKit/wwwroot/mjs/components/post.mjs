import { onMounted, watch, computed, ref, inject, reactive, createApp, nextTick, getCurrentInstance } from "vue"
import ServiceStackVue, { useClient, useAuth, useUtils } from "@servicestack/vue"
import { isDate, toDate, fromXsdDuration, indexOfAny, map, leftPart, $$, enc, EventBus } from "@servicestack/client"
import {
    GetThread,
    GetThreadUserData,
    CreateThreadLike,
    DeleteThreadLike,
    QueryComments,
    CreateComment,
    CreateCommentVote,
    DeleteCommentVote,
    DeleteComment,
    CreateCommentReport,
    PostReport, 
} from '../Posts.dtos.mjs'
import { Authenticate, SignUpDialog, SignInDialog } from "./Auth.mjs"
import { BaseUrl, mount } from "./init.mjs"

export class Store {
    BaseUrl = BaseUrl
    DefaultProfileUrl = 'data:image/svg+xml,%3Csvg style=\'color:rgb(8 145 178);border-radius: 9999px;overflow: hidden;\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cpath fill=\'currentColor\' d=\'M200,100 a100,100 0 1 0 -167.3,73.9 a3.6,3.6 0 0 0 0.9,0.8 a99.9,99.9 0 0 0 132.9,0 l0.8,-0.8 A99.6,99.6 0 0 0 200,100 zm-192,0 a92,92 0 1 1 157.2,64.9 a75.8,75.8 0 0 0 -44.5,-34.1 a44,44 0 1 0 -41.4,0 a75.8,75.8 0 0 0 -44.5,34.1 A92.1,92.1 0 0 1 8,100 zm92,28 a36,36 0 1 1 36,-36 a36,36 0 0 1 -36,36 zm-59.1,42.4 a68,68 0 0 1 118.2,0 a91.7,91.7 0 0 1 -118.2,0 z\' /%3E%3C/svg%3E%0A'
    /** @type {AuthenticateResponse|null} */
    auth = null
    /** @type {string|null} */
    authKey = null
    /** @type {GetThreadUserDataResponse|null} */
    userData = null
    /** @type {Thread|null} */
    thread = null
    /** @type {JsonServiceClient} */
    client = null
    events = new EventBus()
    config = {
        commentLink: null
    }

    constructor(client) {
        this.client = client
        const { swrCacheKey } = useUtils()
        this.authKey = swrCacheKey(new Authenticate())
        this.userDataKey = swrCacheKey(new GetThreadUserData())
    }
    signIn(auth) {
        const { signIn } = useAuth()
        this.auth = auth
        this.userData = {
            upVoted: [],
            downVoted: [],
        }
        signIn(auth)
        auth._date = new Date().valueOf()
        localStorage.setItem(this.authKey, JSON.stringify(auth))
        this.loadCachedUserData()
        this.events.publish('signIn', auth)
    }
    signOut() {
        this.auth = null
        this.userData = null
        this.userAlbumArtifactsKey = this.userLikesKey = null
        const { signOut } = useAuth()
        signOut()
        this.events.publish('signOut')
    }
    loadCachedUserData() {
        const cacheKey = this.userDataKey
        const json = localStorage.getItem(cacheKey)
        if (json) {
            this.userData = JSON.parse(json)
            this.events.publish('userData', this.userData)
        }
    }
    async loadUserData() {
        if (!this.thread) return
        const cacheKey = this.userDataKey
        const api = await this.client.api(new GetThreadUserData({
            threadId: this.thread.id
        }))
        if (api.succeeded) {
            this.userData = api.response
            localStorage.setItem(cacheKey, JSON.stringify(this.userData))
            this.events.publish('userData', this.userData)
        } else {
            this.userData = null
            localStorage.removeItem(cacheKey)
        }
    }    
}

const ModalForm = {
    template: /*html*/`<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>`
}

const NewReport = {
    components: { ModalForm },
    template: /*html*/`<ModalForm class="z-30">
    <form @submit.prevent="submit">
        <div class="shadow overflow-hidden sm:rounded-md bg-white dark:bg-black">
            <div class="relative px-4 py-5 sm:p-6">
                <fieldset>
                    <legend class="text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4">Report Comment</legend>

                    <ErrorSummary :except="visibleFields" />

                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6">
                            <select-input id="type" label="Reason" v-model="postReport" :options="PostReport" />
                        </div>
                        <div class="col-span-6">
                            <textarea-input id="description" v-model="description" placeholder="Please describe the issue for our moderation team to review" />
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 text-right sm:px-6">
                <div class="flex justify-end items-center">
                    <SecondaryButton class="mr-2" @click="$emit('done')">Cancel</SecondaryButton>
                    <PrimaryButton type="submit">Submit</PrimaryButton>
                </div>
            </div>
        </div>
    </form>
</ModalForm>`,
    emits:['done'],
    props: { commentId:Number },
    setup(props, { emit }) {
        const visibleFields = ['PostReport', 'Description']
        const postReport = ref('')
        const description = ref('')
        const client = useClient()

        function submit() {
            const { commentId } = props
            client.apiVoid(new CreateCommentReport({ commentId, postReport:PostReport[postReport.value], description }))
                .then(r => emit('done'))
        }

        return {
            PostReport,
            visibleFields,
            postReport,
            description,
            submit,
        }
    }
}

export const ThreadDialogs = {
    components: { SignInDialog, SignUpDialog, NewReport, },
    template:`<div>
        <SignInDialog v-if="show==='SignInDialog'" @done="$emit('done')"  @signup="$emit('showDialog','SignUpDialog')" />
        <SignUpDialog v-if="show==='SignUpDialog'" @done="$emit('done')"  @signin="$emit('showDialog','SignInDialog')" />
        <NewReport v-if="show==='NewReport'" :commentId="commentId" @done="$emit('done')" />
    </div>`,
    emits:['showDialog','done'],
    props: {
        show:String,
        commentId:Number
    },
    setup(props) {
        return { }
    }
}

export const InputComment = {
    template: /*html*/`
        <div class="w-full">
            <div class="flex flex-col w-full border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900 overflow-hidden">
                <textarea v-model="request.content" class="w-full h-24 m-0 border-none outline-none dark:bg-transparent" placeholder="Write a comment"></textarea>
                <div class="flex justify-between p-2 pl-4 bg-dark-100 dark:bg-black items-center">
                    <div>
                        <a v-if="store.config.commentLink" :href="store.config.commentLink.href" target="_blank" class="text-sm text-gray-400 hover:text-gray-600">{{ store.config.commentLink.label }}</a>
                    </div>
                    <div>
                        <span class="mr-2 text-sm text-gray-400">{{ remainingChars }}</span>
                        <SecondaryButton @click="submit" :disabled="loading">Post</SecondaryButton>
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <ErrorSummary class="mt-1" />
            </div>
        </div>
    `,
    props: ['threadId','replyId'],
    emits: ['updated'],
    setup(props, { attrs, emit }) {
        /** @type {Store} */
        const store = inject('store')
        const client = useClient()
        
        const request = ref(new CreateComment({ 
            threadId: props.threadId, 
            replyId: props.replyId,
            content: ''
        }))
        const remainingChars = computed(() => 280 - request.value.content.length)

        async function submit() {
            const { threadId, replyId } = props
            const api = await client.api(request.value)
            if (api.succeeded) {
                request.value.content = ''
                emit('updated', api.response)
            }
        }

        return {
            store,
            request,
            loading: client.loading,
            remainingChars,
            submit,
        }
    },
}

const Comment = {
    components: { InputComment },
    template: /*html*/`<div class="py-1 border-b border-gray-100 dark:border-gray-800">
        <div class="relative group py-2 px-2 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg">
            <div class="hidden group-hover:block absolute top-2 right-2">
                <svg @click="toggleMenu" class="w-7 h-7 bg-gray-100 dark:bg-gray-800 rounded cursor-pointer hover:bg-white dark:hover:bg-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><circle cx="64" cy="128" r="12" fill="currentColor"/><circle cx="192" cy="128" r="12" fill="currentColor"/><circle cx="128" cy="128" r="12" fill="currentColor"/></svg>
                <div v-if="showMenu" class="absolute -ml-20">
                    <div class="select-none rounded-md whitespace-nowrap bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                            <div @click="showDialog('NewReport')" class="flex cursor-pointer text-gray-700 dark:text-gray-300 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 text-sm" role="menuitem" tabindex="-1">
                                <svg class="mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"/></svg>
                                Report
                            </div>
                            <div @click="deleteComment" class="flex cursor-pointer text-gray-700 dark:text-gray-300 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 text-sm" role="menuitem" tabindex="-1">
                                <svg class="mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"/></svg>
                                Delete
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex select-none">
                <img :src="comment.avatar ? comment.avatar : comment.profileUrl" class="w-6 h-6 rounded-full mr-2" />
                <div class="text-sm text-gray-600 dark:text-gray-300">
                    {{comment.handle || comment.displayName}} <span class="px-1">&#8226;</span> {{ timeAgo }}
                </div>
            </div>
            <div class="py-2 text-gray-900 dark:text-gray-50">
                {{comment.content}}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-300 flex justify-between h-6">
                <div class="flex items-center">
                    <svg v-if="hasUpVoted()" class="w-4 h-4 cursor-pointer" @click="upVote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><title>unvote</title><path fill="currentColor" d="M231.4 123.1a8 8 0 0 1-7.4 4.9h-40v80a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16v-80H32a8 8 0 0 1-7.4-4.9a8.4 8.4 0 0 1 1.7-8.8l96-96a8.1 8.1 0 0 1 11.4 0l96 96a8.4 8.4 0 0 1 1.7 8.8Z"/></svg>
                    <svg v-else class="w-4 h-4 cursor-pointer" @click="upVote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>vote</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 3l9 7h-4.99L16 21H8V10H3l9-7Z"/></svg>
                    <span class="px-2 select-none">{{ comment.votes }}</span>
                    <svg v-if="hasDownVoted()" class="w-4 h-4 cursor-pointer" @click="downVote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><title>unvote</title><path fill="currentColor" d="m229.7 141.7l-96 96a8.1 8.1 0 0 1-11.4 0l-96-96a8.4 8.4 0 0 1-1.7-8.8A8 8 0 0 1 32 128h40V48a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16v80h40a8 8 0 0 1 7.4 4.9a8.4 8.4 0 0 1-1.7 8.8Z"/></svg>
                    <svg v-else class="w-4 h-4 cursor-pointer" @click="downVote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>down vote</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 21l9-7h-4.99L16 3H8v11H3l9 7Z"/></svg>
                </div>
                <div>
                    <button type="button" @click="toggleReply" class="hidden group-hover:inline-flex items-center rounded-full rounded-tl-none border border-transparent bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 dark:ring-offset-black">
                        <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1C3.6 1 0 3.5 0 6.5c0 2 2 3.8 4 4.8c0 2.1-2 2.8-2 2.8c2.8 0 4.4-1.3 5.1-2.1H8c4.4 0 8-2.5 8-5.5S12.4 1 8 1z"/></svg>
                        reply
                    </button>
                </div>
            </div>
        </div>
        <div v-if="showReply">
            <div class="flex p-2">
                <div class="grow-0 flex flex-col">
                    <div class="grow-0">
                        <img :src="comment.avatar ? comment.avatar : comment.profileUrl" class="w-6 h-6 rounded-full mr-2" />
                    </div>
                    <div class="grow relative">
                        <span class="absolute top-1.5 left-2.5 -ml-px h-full w-[1px] bg-gray-200 dark:bg-gray-800" aria-hidden="true"></span>
                    </div>
                </div>
                <div class="grow pl-1 relative">
                    <svg @click="showReply=false" class="absolute top-2 right-2 w-5 h-5 text-gray-300 dark:text-gray-700 hover:text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>close</title>
                        <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"/></svg>
                    <InputComment :thread-id="comment.threadId" :reply-id="comment.id" @updated="replyDone" />
                </div>
            </div>
        </div>
    </div>`,
    props: ['comment', 'nested'],
    emits: ['voted', 'unvoted', 'showDialog', 'refresh'],
    setup(props, { emit }) {
        /** @type {Store} */
        const store = inject('store')
        const { user } = useAuth()
        const instance = getCurrentInstance()

        const timeAgo = computed(() => Relative.from(props.comment.createdDate))
        const client = useClient()
        const showMenu = ref(false)
        const showReply = ref(false)
        const replyDone = () => { showReply.value = false; emit('refresh');  }
        let hasUpVoted = () => store.userData?.upVoted.indexOf(props.comment.id) >= 0
        let hasDownVoted = () => store.userData?.downVoted.indexOf(props.comment.id) >= 0

        function showDialog(dialog) {
            showMenu.value = false
            emit('showDialog', dialog, props.comment)
        }
        
        function toggleMenu() {
            if (!user.value) {
                emit('showDialog', 'SignInDialog')
                return
            }
            showMenu.value =! showMenu.value
        }
        
        function toggleReply() {
            if (!user.value) {
                emit('showDialog', 'SignInDialog')
                return
            }
            showReply.value =! showReply.value
        }

        async function vote(value) {
            if (user.value) {
                if (!hasUpVoted() && !hasDownVoted()) {
                    props.comment.votes += value
                    const api = await client.apiVoid(new CreateCommentVote({
                        commentId: props.comment.id,
                        vote: value,
                    }))
                    if (!api.succeeded) {
                        props.comment.votes -= value
                    } else {
                        emit('voted', props.comment, value, api)
                    }
                } else {
                    if (hasUpVoted()) {
                        props.comment.votes += -1
                    }
                    if (hasDownVoted()) {
                        props.comment.votes += 1
                    }
                    const api = await client.apiVoid(new DeleteCommentVote({ commentId: props.comment.id }))
                    if (!api.succeeded) {
                        if (hasUpVoted.value) {
                            props.comment.votes += 1
                        }
                        if (hasDownVoted.value) {
                            props.comment.votes += -1
                        }
                    } else {
                        emit('unvoted', props.comment, value, api)
                    }
                }
            } else {
                emit('showDialog','SignInDialog')
            }
        }

        async function deleteComment() {
            showMenu.value = false
            const api = await client.apiVoid(new DeleteComment({ id: props.comment.id }))
            if (api.succeeded) {
                emit('refresh')
            }
        }

        const upVote = () => vote(1)
        const downVote = () => vote(-1)
        
        onMounted(() => {
            store.events.subscribe('userData', () => {
                instance?.proxy?.$forceUpdate()
            })
        })

        return {
            showMenu,
            showReply,
            toggleMenu,
            toggleReply,
            showDialog,
            replyDone,
            timeAgo,
            upVote,
            downVote,
            hasUpVoted,
            hasDownVoted,
            deleteComment,
        }
    }
}

const Thread = {
    components: { Comment },
    template: /*html*/`
    <div>
        <div v-for="(comment,index) in comments.filter(x => x.replyId == parentId)">
            <div :class="['flex', nested ? 'pl-1' : '']">
                <div v-if="nested" class="grow-0 flex flex-col">
                    <div class="w-6"></div>
                    <div class="grow relative">
                        <div class="">
                            <span class="absolute top-1 left-4 -ml-px h-full w-[1px] border-gray-200 dark:bg-gray-800" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>
                <div class="grow relative">
                    <Comment :comment="comment" :nested="nested"
                            @voted="refreshUserData" @unvoted="refreshUserData" @showDialog="showDialog" @refresh="refresh" />
                    <div class="">
                        <Thread :comments="comments" :parentId="comment.id" 
                                @refresh="refresh" @refreshUserData="refreshUserData" @showDialog="showDialog" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    props: ['comments','parentId'],
    emits: ['refresh','refreshUserData','showDialog'],
    setup(props, { emit }) {
        /** @type {Store} */
        const store = inject('store')
        const refreshUserData = () => emit('refreshUserData')
        const showDialog = (dialog, comment) => emit('showDialog', dialog, comment)
        const refresh = () => emit('refresh')
        const nested = computed(() => props.parentId != null)
        return {
            store,
            showDialog,
            nested,
            refresh,
            refreshUserData,
        }
    }
}
Thread.components['Thread'] = Thread

export const PostComments = {
    components: { ThreadDialogs, Thread, Comment, InputComment, NewReport },
    template: /*html*/`
    <div class="mt-24 mx-auto flex flex-col w-full max-w-3xl transition-opacity">
        <div class="mb-12 flex">
            <div @click="toggleLike" class="cursor-pointer flex items-center select-none">
                <svg v-if="!store.userData?.liked" class="text-gray-700 w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Recommend Post</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 16.5 4.5c0 1.152-.26 2.243-.723 3.218c-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715c.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.53 4.53 0 0 1-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602c.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665a8.97 8.97 0 0 0 .654 3.375Z"/></svg>
                <svg v-else class="text-gray-700 w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Unrecommend</title><path fill="currentColor" d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.375a7.47 7.47 0 0 1 1.602-4.634c.151-.192.373-.309.6-.397c.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218c-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715c.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23a4.53 4.53 0 0 1-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777Zm-5.162-7.773a11.969 11.969 0 0 0-.831 4.398a12 12 0 0 0 .52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666c.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"/></svg>
                <span class="ml-2">{{ store.thread?.likesCount || ''}}</span>
            </div>
        </div>
        
        <div v-if="user" class="flex justify-center w-full">
            <InputComment :thread-id="threadId" @updated="refresh" />
        </div>
        <div v-else class="flex justify-center w-full">
            <div class="flex justify-between w-full max-w-2xl border border-gray-200 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900 overflow-hidden">
                <div class="p-2 pl-4 flex items-center">
                    <span class="text-gray-600 dark:text-gray-300">Sign in to leave a comment</span>
                </div>
                <div class="m-1">
                    <TextLink @click="show='SignInDialog'" class="mr-4 text-gray-500 font-semibold">Sign In</TextLink>
                    <SecondaryButton @click="show='SignUpDialog'">Sign Up</SecondaryButton>
                </div>
            </div>
        </div>
        <div v-if="comments.length" class="mt-8">
            <h2 class="text-xl border-b border-gray-200 dark:border-gray-800 py-2">{{ comments.length }} Comment{{ comments.length > 1 ? 's' : '' }}</h2>
            <Thread :comments="comments" :parent-id="null"
                    @refresh="refresh" @refreshUserData="refreshUserData" @showDialog="showDialog" />
        </div>
        <ErrorSummary />
        <ThreadDialogs :show="show" :comment-id="showTarget?.id" @done="show=''" @showDialog="show=$event" />
    </div>
    `,
    props: ['commentLink'],
    setup(props) {
        /** @type {Store} */
        const store = inject('store')
        const client = useClient()
        const { user } = useAuth()
        const instance = getCurrentInstance()
        store.config.commentLink = props.commentLink
        
        let comments = ref([])
        let show = ref('')
        let showTarget = ref(null)
        const threadId = computed(() => store.thread?.id || 0)
        
        function showDialog(dialog,comment) {
            show.value = dialog
            showTarget.value = comment
        }

        async function refreshUserData() {
            await store.loadUserData()
        }

        async function refresh() {
            // console.log('refresh', store.thread?.id)
            const threadId = store.thread?.id
            if (!threadId) return
            const api = await client.api(new QueryComments({ threadId }));
            if (api.succeeded) {
                comments.value = api.response.results
            }
            await refreshUserData()
        }
        
        async function toggleLike() {
            if (!user.value) {
                showDialog('SignInDialog')
                return
            }
            
            const threadId = store.thread?.id
            if (!threadId || !store.userData) return

            const liked = store.userData.liked
            
            store.userData.liked = !liked 
            store.thread.likesCount += liked ? -1 : 1
            
            const request = !liked
                ? new CreateThreadLike({ threadId })
                : new DeleteThreadLike({ threadId })
            const api = await client.apiVoid(request)
            if (!api.succeeded) {
                store.userData.liked = liked
                store.thread.likesCount += liked ? 1 : -1
            }
            instance?.proxy.$forceUpdate()
        }

        onMounted(async () => {
            store.events.subscribe('thread', refresh)
            await refresh()
        })
        watch(() => user.value, refresh)

        return {
            store,
            threadId,
            comments,
            toggleLike,
            user,
            loading: client.loading,
            refresh,
            refreshUserData,
            show,
            showDialog,
            showTarget,
        }
    }
}


const defaultFormats = { locale: map(navigator.languages, x => x[0]) || navigator.language || 'en' }
const Relative = (function () {
    let nowMs = () => new Date().getTime()

    let DateChars = ['/', 'T', ':', '-']
    /** @param {string|Date|number} val */
    function toRelativeNumber(val) {
        if (val == null) return NaN
        if (typeof val == 'number')
            return val
        if (isDate(val))
            return val.getTime() - nowMs()
        if (typeof val === 'string') {
            let num = Number(val)
            if (!isNaN(num))
                return num
            if (val[0] === 'P' || val.startsWith('-P'))
                return fromXsdDuration(val) * 1000 * -1
            if (indexOfAny(val, DateChars) >= 0)
                return toDate(val).getTime() - nowMs()
        }
        return NaN
    }
    let defaultRtf = new Intl.RelativeTimeFormat(defaultFormats.locale, {})
    let year = 24 * 60 * 60 * 1000 * 365
    let units = {
        year,
        month: year / 12,
        day: 24 * 60 * 60 * 1000,
        hour: 60 * 60 * 1000,
        minute: 60 * 1000,
        second: 1000
    }
    /** @param {number} elapsedMs
     *  @param {Intl.RelativeTimeFormat} [rtf] */
    function fromMs(elapsedMs, rtf) {
        for (let u in units) {
            if (Math.abs(elapsedMs) > units[u] || u === 'second')
                return (rtf || defaultRtf).format(Math.round(elapsedMs / units[u]), u)
        }
    }
    /** @param {string|Date|number} val
     *  @param {Intl.RelativeTimeFormat} [rtf] */
    function from(val, rtf) {
        let num = toRelativeNumber(val)
        if (!isNaN(num))
            return fromMs(num, rtf)
        console.error(`Cannot convert ${val}:${typeof val} to relativeTime`)
        return ''
    }
    /** @param {Date} d
     *  @param {Date} [from] */
    let fromDate = (d, from) =>
        fromMs(d.getTime() - (from ? from.getTime() : nowMs()))

    return {
        from,
        fromMs,
        fromDate,
    }
})();


const components = { PostComments }

export function post(selector, args) {
    const mountOptions = {
        mount(app, { client, AppData }) {
            const store = new Store(client)
            nextTick(async () => {
                const [api, threadApi] = await Promise.all([
                    client.api(new Authenticate()),
                    client.api(new GetThread({ url: leftPart(location.href.replace('#','?'),'?') }))
                ])
                if (threadApi.succeeded) {
                    store.thread = threadApi.response.result
                    store.events.publish('thread', store.thread)
                }
                if (api.succeeded) {
                    store.signIn(api.response)
                    await store.loadUserData()
                } else {
                    store.signOut()
                }
            })
            
            app.provide('store', store)
            app.component('RouterLink', ServiceStackVue.component('RouterLink'))
            app.directive('highlightjs', (el, binding) => {
                if (binding.value) {
                    el.innerHTML = enc(binding.value)
                    globalThis.hljs.highlightElement(el)
                }
            })
            globalThis.store = store
        }
    }
    
    $$(selector).forEach(el => {
        const post = el.getAttribute('data-post')
        if (!post) throw new Error(`Missing data-post=Component`)
        const component = components[post]
        if (!component) throw new Error(`Unknown component '${post}', available components: ${Object.keys(components).join(', ')}`)
        mount(el, component, args, mountOptions)
    })
}
