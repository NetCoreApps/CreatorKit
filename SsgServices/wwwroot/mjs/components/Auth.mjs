import { computed, ref, inject } from "vue"
import { useClient } from "@servicestack/vue"
import { appendQueryString, combinePaths } from "@servicestack/client"

export const SignInDialog = {
    template:/*html*/`<ModalDialog @done="done" sizeClass="sm:max-w-prose sm:w-full">
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-50">
                Sign In
            </h2>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <ErrorSummary class="mb-3" except="userName,password" />
            <form @submit.prevent="submit">
                <div class="flex flex-col gap-y-4">
                    <TextInput id="userName" label="Email" help="Email you signed up with" v-model="request.userName" placeholder="" />
                    <TextInput id="password" type="password" help="6 characters or more" v-model="request.password" placeholder="" />
                </div>
                <div class="mt-8">
                    <PrimaryButton class="w-full mb-4">Sign In</PrimaryButton>
                </div>
            </form>
    
            <div v-if="oauthProviders.length" class="mt-6">
                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-600"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 bg-white dark:bg-black text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>
                <div class="mt-6 grid grid-cols-3 gap-3">
                    <div v-for="provider in oauthProviders">
                        <a :href="providerUrl(provider)" :title="providerLabel(provider)" 
                            class="group w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-sm font-medium text-gray-500">
                            <Icon v-if="provider.icon" :image="provider.icon" class="h-5 w-5 text-gray-500 dark:text-gray-700 group-hover:text-black dark:group-hover:text-white" />
                            <svg v-else class="h-5 w-5 text-gray-300 dark:text-gray-700 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z" fill="currentColor"/>
                                <path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z" fill="currentColor"/>
                            </svg>
                        </a>
                    </div>                    
                </div>
            </div>
        </div>
        <TextLink class="mt-4 block text-center" @click="$emit('signup')">Sign Up &rarr;</TextLink>
    </div> 
    </ModalDialog>`,
    emits:['done','signup'],
    setup(props, { emit }) {
        /** @type {Store} */
        const store = inject('store')
        const client = useClient()

        /** @type {Ref<Authenticate>} */
        const request = ref(new Authenticate({ provider:'credentials' }))

        const signInHref = computed(() =>
            appendQueryString(combinePaths(store.BaseUrl, 'auth/google'), { redirect:location.origin }))
        const errorSummary = computed(() => '')
        const oauthProviders = [
            {
                name:'Facebook',
                href:'/auth/facebook',
                icon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'><path fill-rule='evenodd' d='M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z' clip-rule='evenodd' /></svg>" }
            },
            {
                name:'Google',
                href:'/auth/google',
                icon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'><path d='M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05c0 5.71-3.83 9.77-9.6 9.77c-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48c-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51v-.01z' fill='currentColor' /></svg>" }
            },
            {
                name:'Microsoft',
                href:'/auth/microsoftgraph',
                icon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'><path d='M11.55 21H3v-8.55h8.55V21zM21 21h-8.55v-8.55H21V21zm-9.45-9.45H3V3h8.55v8.55zm9.45 0h-8.55V3H21v8.55z' fill='currentColor'/></svg>" }
            },
        ]
        function providerUrl(provider) {
            return appendQueryString(combinePaths(store.BaseUrl, provider.href), { 'continue': location.href })
        }
        function providerLabel(provider) {
            return `Sign In with ${provider.name}`
        }
        function done() {
            emit('done')
        }
        async function submit() {
            const api = await client.api(request.value)
            if (api.succeeded) {
                await store.signIn(api.response)
                await store.loadUserData()
                done()
            }
        }

        return { request, signInHref, done, errorSummary, submit, oauthProviders, providerUrl, providerLabel, }
    }
}

export const SignUpDialog = {
    template:/*html*/`<ModalDialog @done="done" sizeClass="sm:max-w-prose sm:w-full">
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-50">
                Sign Up
            </h2>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <ErrorSummary class="mb-3" except="userName,password" />
            <form @submit.prevent="submit">
                <div class="flex flex-col gap-y-4">
                    <TextInput id="email" v-model="request.email" placeholder="" />
                    <TextInput id="displayName" v-model="request.displayName" placeholder="" />
                    <TextInput id="password" type="password" help="6 characters or more" v-model="request.password" placeholder="" />
                    <TextInput id="confirmPassword" type="password" v-model="request.confirmPassword" placeholder="" />
                </div>
                <div class="mt-8">
                    <PrimaryButton class="w-full mb-4">Sign Up</PrimaryButton>
                </div>
            </form>
        </div>
        <TextLink class="block text-center pr-4" @click="$emit('signin')">&larr; Sign In</TextLink>
    </div> 
    </ModalDialog>`,
    emits:['done','signin'],
    setup(props, { emit }) {
        /** @type {Store} */
        const store = inject('store')

        /** @type {Ref<Register>} */
        const request = ref(new Register({ autoLogin:true }))
        const client = useClient()

        function done() {
            emit('done')
        }
        async function submit() {
            if (request.value.password !== request.value.confirmPassword) {
                client.setError({ fieldName:'confirmPassword', message:'Passwords do not match' })
                return
            }
            if (request.value.password.length < 6) {
                client.setError({ fieldName:'password', message:'Minimum of 6 characters' })
                return
            }
            const api = await client.api(request.value)
            if (api.succeeded) {
                await store.signIn(api.response)
                await store.loadUserData()
                done()
            }
        }
        return { request, submit, done }
    }
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
