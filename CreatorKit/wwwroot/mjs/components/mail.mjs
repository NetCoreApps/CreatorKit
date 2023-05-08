import { computed, onMounted, ref } from "vue"
import { $$, appendQueryString, combinePaths, queryString, rightPart } from "@servicestack/client"
import ServiceStackVue, { useClient } from "@servicestack/vue"
import { SubscribeToMailingList, QueryContacts, UpdateContact } from "../Mail.dtos.mjs"
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
            <div class="grid grid-cols-2 items-end gap-4">
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
      <div v-if="saved" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        <div class="flex justify-center">
          <svg class="my-4 w-16 h-16 text-green-600" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"/></svg>
        </div>
        <h2 class="mb-3 inline sm:block lg:inline xl:block">Updated!</h2>
        <p class="inline sm:block lg:inline xl:block">Your email preferences have been saved.</p>
      </div>
      <div v-else-if="contact">
        <p class="mb-3">
          Managing mail preferences for <b>{{contact.email}}</b>:
        </p>
        <form @submit.prevent="submit">
          <div class="mx-auto max-w-xs">
            <div v-for="(value,index) in mailingListType.enumValues">
              <div v-if="parseInt(value) > 1">
                <input v-model="contactMailingLists" type="checkbox" :id="'chk-'+value" class="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-indigo-600 dark:text-indigo-300 focus:ring-indigo-600" :value="mailingListType.enumDescriptions[index] || mailingListType.enumNames[index]">
                <label class="select-none ml-3 text-sm font-medium leading-6 text-gray-900 dark:text-gray-50" :for="'chk-'+value">{{mailingListType.enumDescriptions[index] || mailingListType.enumNames[index]}}</label>
              </div>
            </div>
            <PrimaryButton class="mt-8">Save Changes</PrimaryButton>
          </div>
        </form>
      </div>
      <div v-else>
        <p>
          Enter your email to manage your email preferences:
        </p>
        <ErrorSummary class="my-3" />
        <form @submit.prevent="findContact" class="space-x-4 flex items-end">
          <div><TextInput id="email" v-model="email" label="" placeholder="Enter your email" /></div>
          <div><PrimaryButton>Submit</PrimaryButton></div>
        </form>
      </div>
    </div>`,
    setup(props) {
        const client = useClient()
        const contact = ref()
        const email = ref()
        const metadata = ref()
        const mailingListType = computed(() => metadata.value?.api.types.find(x => x.name === 'MailingList'))
        const contactMailingLists = ref([])
        const saved = ref(false) 
        
        async function findContact(e) {
            if (!email.value) return
            const api = await client.api(new QueryContacts({
                email: email.value,
            }))
            if (api.succeeded) {
                contact.value = api.response.results[0]
                if (contact.value) {
                    contactMailingLists.value = enumFlags(contact.value.mailingLists)
                } else {
                    client.setError({ message: 'No existing email subscription was found' })
                }
            }
        }

        async function submit(e) {
            const api = await client.api(new UpdateContact({ 
                id: contact.value.id,
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
                const api = await client.api(new QueryContacts({ 
                    email: qs.email,
                    externalRef: qs.ref
                }))
                if (api.succeeded) {
                    contact.value = api.response.results[0]
                    if (contact.value) {
                        contactMailingLists.value = enumFlags(contact.value.mailingLists)
                    }
                }
            }
        })
        
      return { contact, email, findContact, submit, enumFlags, mailingListType, contactMailingLists, saved }  
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
