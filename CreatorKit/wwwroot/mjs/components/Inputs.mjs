import { computed, onMounted, onUnmounted, ref, watch } from "vue"
import { useClient, useUtils } from "@servicestack/vue"
import { QueryContacts, ViewAppData } from "../dtos.mjs"

const SelectEmail = {
    template:`<div v-if="show" class="relative w-full">
        <div class="z-10 mt-1 absolute bg-white border border-gray-200 rounded w-full">
          <ul v-if="results.length" role="list" class="divide-y divide-gray-100">
            <li v-for="(sub,index) in results" @click="selectIndex(index)"
                :class="['pl-3 flex gap-x-2 py-2 hover:bg-gray-50 cursor-pointer overflow-hidden whitespace-nowrap', index === active ? 'bg-sky-50' : '']">
              <div class="min-w-0">
                <p class="text-sm font-semibold leading-6 text-gray-900">{{sub.firstName}} {{sub.lastName}}</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{sub.email}}</p>
              </div>
            </li>
          </ul>
          <Loading v-else-if="loading" class="p-4 text-base" imageClass="w-5 h-5">Loading...</Loading>
        </div>
    </div>`,
    props:['modelValue','inputElement'],
    setup(props) {
        const client = useClient()
        const { focusNextElement } = useUtils()
        const popupStyle = ref('')
        const email = ref()
        const show = ref(false)
        const api = ref()
        const active = ref(-1)
        const results = computed(() => api.value?.response?.results || [])
        const loading = computed(() => client.loading.value)

        async function update() {
            await (async (search) => {
                const apiSearch = await client.api(new QueryContacts({ search, take:8, orderBy:'nameLower' }))
                if (apiSearch.succeeded && search === props.modelValue) {
                    api.value = apiSearch
                    active.value = -1
                }
            })(props.modelValue)
        }

        function selectIndex(index) {
            const contact = index >= 0 ? results.value[index] : null
            if (contact) {
                const setFields = ['email','firstName','lastName']
                setFields.forEach(id => {
                    const el = props.inputElement.form[id]
                    if (el) {
                        el.value = contact[id]
                        el.dispatchEvent(new Event('input', {bubbles:true}));
                    }
                })
                focusNextElement({ after:props.inputElement.form['lastName'] })
            }
        }

        const inputEvents = {
            focus(e) {
                show.value = true
            },
            blur(e) {
                setTimeout(() => show.value = false, 200)
            },
            keydown(e) {
                if (e.key === 'ArrowDown') {
                    if (!show.value) show.value = true
                    if (active.value === -1) {
                        active.value = 0
                    } else {
                        active.value = (active.value + 1) % results.value.length
                    }
                } else if (e.key === 'ArrowUp') {
                    if (active.value >= 0) {
                        active.value = (active.value - 1) % results.value.length
                        if (active.value < 0) active.value = results.value.length - 1
                    }
                } else if (e.key === 'Enter') {
                    show.value = false
                    e.preventDefault()
                    selectIndex(active.value)
                } else if (e.key === 'Escape') {
                    if (show.value) {
                        show.value = false
                        e.stopPropagation()
                    }
                }
            },
        }

        onMounted(() => {
            client.swr(new QueryContacts({ take:8, orderBy:'nameLower' }), r => api.value = r)
            const el = email.value = document.querySelector('#email')
            el.setAttribute('autocomplete','no-autofill')
            Object.keys(inputEvents).forEach(evt => {
                inputEvents[evt] = inputEvents[evt].bind(el)
                el.addEventListener(evt, inputEvents[evt])
            })
            const rect = el.getBoundingClientRect()
            popupStyle.value = `top:${Math.floor(rect.y+rect.height+2)}px;left:26px;width:${Math.floor(rect.width-4)}px`
        })

        onUnmounted(() => {
            Object.keys(inputEvents).forEach(evt => {
                email.value?.removeEventListener(evt, inputEvents[evt])
            })
        })
        
        watch(() => props.modelValue, update)

        return { show, results, loading, active, selectIndex }
    }
}

export const EmailInput = {
    components: { SelectEmail },
    template: `<TextInput v-bind="$attrs" @update:modelValue="$emit('update:modelValue',$event)">
      <template #footer="{ id, inputElement, modelValue }">
        <SelectEmail v-if="inputElement" :inputElement="inputElement" :modelValue="modelValue" />
      </template>
    </TextInput>`,
    emits:['update:modelValue'],
    props: [],
    setup(props) {
        return { }
    }
}

const InsertVariableButton = {
    template:`<div>
        <svg @click="toggle()" class="w-5 h-5 select-none cursor-pointer text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" viewBox="0 0 2048 2048">
            <title>Insert template variable (CTRL+SPACE)</title>
            <path fill="currentColor" d="M2048 128v1664h-640l128-128h384v-384h-768V768H768v512H128v384h256l128 128H0V128h2048zM640 256H128v384h512V256zm640 0H768v384h512V256zm640 0h-512v384h512V256zm-621 1139l90 90l-429 429l-429-429l90-90l275 275V896h128v774l275-275z"/></svg>
        <div :class="['absolute z-10 mt-2 w-56 -ml-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none', transition1]" role="menu"
            aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div v-if="toggleState" class="py-1" role="none">
          <div v-for="(collection,label) in vars">
            <button type="button" @click="toggleVar(label)" class="hover:bg-gray-50 flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700" :aria-controls="'sub-menu-'+label" aria-expanded="false">
              <svg :class="['h-5 w-5 shrink-0', expanded[label] ? 'rotate-90 text-gray-500' : 'text-gray-400']" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
              {{label}}
            </button>
            <ul v-if="expanded[label]" class="mt-1 px-2" :id="'sub-menu-'+label">
              <li v-for="(value,name) in collection">
                <span @click="select(label,name)" :title="value" class="cursor-pointer hover:bg-gray-50 block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700">{{name}}</span>
              </li>
            </ul>
          </div>
          
        </div>
    </div>
  </div>
    `,
    props:['instance'],
    setup(props) {
        const client = useClient()
        const { transition } = useUtils()
        const expanded = ref({})
        const api = ref()

        const vars = computed(() => ({ 
            contact: {
                Email: 'email@example.org',
                FirstName: 'First',
                LastName: 'Last',
                ExternalRef: '0123456789'
            },
            ...api.value?.response?.vars
        }))

        const toggleState = ref(false)
        const transition1 = ref('hidden')
        const rule1 = {
            entering: { cls:'transition ease-out duration-100', from:'transform opacity-0 scale-95',    to:'transform opacity-100 scale-100'},
            leaving:  { cls:'transition ease-in duration-75',   from:'transform opacity-100 scale-100', to:'transform opacity-0 scale-95'}
        }
        function toggle(show) {
            if (show == null) show = !toggleState.value
            transition(rule1, transition1, show)
            if (show)
                toggleState.value = show
            else 
                setTimeout(() => toggleState.value = show, 100)
        }
        
        onMounted(async () => {
            await client.swr(new ViewAppData(), r => api.value = r)
        })

        function toggleVar(label) {
            expanded.value[label] = !expanded.value[label]
        }       
        function select(group,name) {
            if (group === 'contact') {
                props.instance.insert('{{' + name + '}}','')
            }
            else if (group === 'images') {
                props.instance.insert('![]({{' + `${group}.${name}` + '}})','')
            } else {
                props.instance.insert('{{' + `${group}.${name}` + '}}','')
            }
            toggle(false)
        }
        
        /** @param {KeyboardEvent} e */
        function handleKeyDown(e) {
            console.log('handleKeyDown', e)
            if (e.code === 'Space' && e.ctrlKey) {
                toggle(true)
                e.stopPropagation()
            }
        }
        
        onMounted(() => props.instance.textarea.value?.addEventListener('keydown', handleKeyDown))
        onUnmounted(() => props.instance.textarea.value?.removeEventListener('keydown', handleKeyDown))
        
        return { toggle, toggleState, transition1, vars, expanded, select, toggleVar }
    }
}

export const MarkdownEmailInput = {
    components: { InsertVariableButton },
    template: `<MarkdownInput v-bind="$attrs" @update:modelValue="$emit('update:modelValue',$event)">
      <template #toolbarbuttons="{ instance, textarea }">
        <InsertVariableButton :instance="instance" :textarea="textarea" />
      </template>
    </MarkdownInput>`,
    emits:['update:modelValue'],
    props: [],
    setup(props) {
        return { }
    }
}