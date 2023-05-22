import { computed, onMounted, ref } from "vue"
import { $$, appendQueryString, combinePaths, queryString, rightPart } from "@servicestack/client"
import ServiceStackVue, { useClient } from "@servicestack/vue"
import { SubscribeToMailingList, UpdateContactMailingLists, FindContact } from "../Mail.dtos.mjs"
import { BaseUrl, mount } from "./init.mjs"

export const JoinMailingList = {
    template:`<div>
      <form v-if="!submitted" v-on:submit.prevent="submit" class="w-full">
        <input type="hidden" name="source" value="Website">
        <input type="hidden" name="mailingLists" :value="mailingLists ? asStrings(mailingLists).join(',') : 'MonthlyNewsletter'">
        <ErrorSummary class="mb-3" except="email,firstName,lastName" />
        <div class="space-y-4">
          <label for="email-address" class="sr-only">Email address</label>
          <div :class="[expand ? 'w-full' : 'w-auto']" style="transition:width 1s ease-in-out, visibility 1s linear">
            <div class="grid grid-cols-2 items-end gap-3">
              <div :class="[expand ? 'col-span-2' : '']">
                  <TextInput class="" v-on:focus="expand=true" id="email" name="email" type="email" autocomplete="email" required label="" :placeholder="placeholder || 'Enter your email'" />
              </div>
              <div v-if="expand" class="">
                  <TextInput class="w-full" id="firstName" required label="" placeholder="First Name" autocomplete="given_name" />
              </div>
              <div v-if="expand" class="">
                  <TextInput class="w-full" id="lastName" required label="" placeholder="Last Name" autocomplete="family_name" />
              </div>
              <div :class="[expand ? 'col-span-2 flex justify-center' : '']">
                  <PrimaryButton>{{ submitLabel || 'Subscribe' }}</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div v-else>
         <h3 class="mb-3 flex text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Icon v-if="thanksIcon" class="w-6 h-6 mr-2" :image="thanksIcon" /> 
            <svg v-else class="w-6 h-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"/></svg>
            {{thanksHeading || 'Thanks for signing up!'}}
         </h3>
         <p class="text-sm leading-6">
            {{thanksMessage || 'To complete sign up, look for the verification email in your inbox and click the link in that email.'}}
         </p>
      </div>
    </div>
    `,
    props:['mailingLists','placeholder','submitLabel','thanksIcon','thanksHeading','thanksMessage'],
    setup(props) {
        const client = useClient()
        const expand = ref(false)
        const submitted = ref(false)
        
        /** @param {SubmitEvent} e */
        async function submit(e) {
            const api = await client.apiFormVoid(new SubscribeToMailingList(), new FormData(e.target))
            if (api.succeeded) {
                submitted.value = true
            }
        }
        function asStrings(o) { return typeof o == 'string' ? o.split(',') : o || [] }
        
        return { expand, submitted, submit, asStrings }
    }
}

export const MailPreferences = {
    template:`<div>
      <Loading v-if="!loaded">Loading...</Loading>
      <div v-else-if="saved" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        <div class="flex justify-center">
          <svg class="my-4 w-16 h-16 text-green-600" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"/></svg>
        </div>
        <h2 class="mb-3 inline sm:block lg:inline xl:block">{{ updatedHeading || 'Updated!' }}</h2>
        <p class="inline sm:block lg:inline xl:block">{{ updatedMessage || 'Your email preferences have been saved.' }}</p>
      </div>
      <div v-else-if="unsubscribed" class="text-gray-900 sm:text-4xl lg:col-span-7">
        <div class="flex justify-center">
          <svg class="my-4 w-16 h-16 text-indigo-600" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><path d="m35 26.614l-19.854-19.3a2.928 2.928 0 0 0-4.259.188a3.334 3.334 0 0 0 .18 4.544l10.024 9.93"/><path stroke-linejoin="round" d="M21.09 21.976L10.178 11.155a3.486 3.486 0 0 0-4.735-.161a3.032 3.032 0 0 0-.18 4.417l10.993 11.203"/><path d="M16.255 26.614L10 20.5a3.299 3.299 0 0 0-4.633-.08a3.233 3.233 0 0 0-.093 4.588c9.23 9.536 14.02 14.04 15.817 15.545C24 42.99 29.735 44 32.73 42c2.995-2 5.702-4.846 6.987-7.671c.765-1.683 2.25-6.87 4.458-15.561a3.305 3.305 0 0 0-2.46-4.034a3.5 3.5 0 0 0-4.166 2.493L35 26.614m-3.284-13.948a19.597 19.597 0 0 0-8.752-7.187M5.194 33.776a19.599 19.599 0 0 0 8.364 7.635"/></g></svg>
        </div>
        <h2 class="mb-3 text-3xl font-bold tracking-tight inline sm:block lg:inline xl:block">{{ unsubscribeHeading || 'Updated!' }}</h2>
        <p class="text-2xl inline sm:block lg:inline xl:block">
          {{ unsubscribeMessage || "You've been unsubscribed from all email subscriptions, we're sorry to see you go!" }}
        </p>
      </div>
      <div v-else-if="contact">
        <div v-if="unsubscribeView">
          <p class="mb-3">
            {{ unsubscribePrompt || 'Unsubscribe from all future email communications:' }}
          </p>
          <div class="my-8 flex justify-center">
            <PrimaryButton type="button" color="red" @click="submitUnsubscribe">{{ submitUnsubscribeLabel || 'Unsubscribe' }}</PrimaryButton>
          </div>
        </div>
        <p class="mb-3">
          Manage mail preferences for <b>{{contact.email}}</b>:
        </p>
        <form @submit.prevent="submit" class="flex justify-center">
          <div class="">
            <div v-for="(value,index) in mailingListType.enumValues">
              <div v-if="parseInt(value) > 1">
                <input v-model="contactMailingLists" type="checkbox" :id="'chk-'+value" class="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-indigo-600 dark:text-indigo-300 focus:ring-indigo-600" :value="mailingListType.enumDescriptions[index] || mailingListType.enumNames[index]">
                <label class="select-none ml-3 text-sm font-medium leading-6 text-gray-900 dark:text-gray-50" :for="'chk-'+value">{{mailingListType.enumDescriptions[index] || mailingListType.enumNames[index]}}</label>
              </div>
            </div>
            <PrimaryButton class="mt-8">{{ submitLabel || 'Save Changes' }}</PrimaryButton>
          </div>
        </form>
      </div>
      <div v-else>
        <p>
          {{ emailPrompt || 'Enter your email to manage your email preferences:' }}
        </p>
        <ErrorSummary class="my-3" />
        <form @submit.prevent="findContact" class="space-x-4 flex items-end">
          <div><TextInput id="email" v-model="email" label="" placeholder="Enter your email" /></div>
          <div><PrimaryButton>{{ submitEmailLabel || 'Submit' }}</PrimaryButton></div>
        </form>
      </div>
    </div>`,
    props:['emailPrompt','submitEmailPrompt','updatedHeading','updatedMessage','unsubscribePrompt','unsubscribeHeading','unsubscribeMessage','submitLabel','submitUnsubscribeLabel'],
    setup(props) {
        const client = useClient()
        const contact = ref()
        const email = ref()
        const metadata = ref()
        const mailingListType = computed(() => metadata.value?.api.types.find(x => x.name === 'MailingList'))
        const contactMailingLists = ref([])
        const saved = ref(false)
        const unsubscribeView = ref(false)
        const unsubscribed = ref(false)
        const loaded = ref(false)
        
        async function findContact(e) {
            if (!email.value) return
            const api = await client.api(new FindContact({
                email: email.value,
            }))
            if (api.succeeded) {
                contact.value = api.response.result
                if (contact.value) {
                    contactMailingLists.value = enumFlags(contact.value.mailingLists)
                } else {
                    client.setError({ message: 'No existing email subscription was found' })
                }
            }
        }

        async function submitUnsubscribe(e) {
            const api = await client.apiVoid(new UpdateContactMailingLists({
                ref: contact.value.externalRef,
                unsubscribeFromAll: true,
            }))
            if (api.succeeded) {
                unsubscribed.value = true
            }
        }

        async function submit(e) {
            const api = await client.apiVoid(new UpdateContactMailingLists({
                ref: contact.value.externalRef,
                mailingLists: contactMailingLists.value
            }))
            if (api.succeeded) {
                saved.value = true
            }
        }

        function enumFlags(value) {
            const enumType = mailingListType.value
            if (!enumType) throw new Error(`Could not find MailingList`)
            const to = []
            for (let i=0; i<enumType.enumValues.length; i++) {
                const enumValue = parseInt(enumType.enumValues[i])
                if (enumValue > 0 && (enumValue & value) === enumValue) {
                    to.push(enumType.enumDescriptions?.[i] || enumType.enumNames?.[i] || `${value}`)
                }
            }
            return to
        }
        
        onMounted(async () => {
            metadata.value = await (await fetch(appendQueryString(combinePaths(BaseUrl, `/metadata/app.json`), {includeTypes: 'MailingList'}))).json()
            
            const search = location.search ? location.search : location.hash.includes('?') ? '?' + rightPart(location.hash,'?') : ''
            let qs = queryString(search)
            if (qs.email || qs.ref) {
                const api = await client.api(new FindContact({ 
                    email: qs.email,
                    ref: qs.ref
                }))
                if (api.succeeded) {
                    contact.value = api.response.result
                    if (contact.value) {
                        contactMailingLists.value = enumFlags(contact.value.mailingLists)
                    }
                }
            }
            loaded.value = true
            unsubscribeView.value = !!qs.unsubscribe
        })
        
      return { loaded, contact, email, findContact, submit, enumFlags, mailingListType, contactMailingLists, saved,
               unsubscribeView, unsubscribed, submitUnsubscribe }  
    }
}

const components = { JoinMailingList, MailPreferences }
export function mail(selector, args) {
    const mountOptions = {
        mount(app, { client, AppData }) {
            app.component('RouterLink', ServiceStackVue.component('RouterLink'))
        }
    }

    $$(selector).forEach(el => {
        const mail = el.getAttribute('data-mail')
        if (!mail) throw new Error(`Missing data-mail=Component`)
        const component = components[mail]
        if (!component) throw new Error(`Unknown component '${mail}', available components: ${Object.keys(components).join(', ')}`)
        mount(el, component, args, mountOptions)
    })
}
