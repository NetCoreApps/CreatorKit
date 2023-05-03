import { computed, onMounted, onUnmounted, ref, watch } from "vue"
import { useClient, useUtils } from "@servicestack/vue"
import { QuerySubscriptions } from "../dtos.mjs"

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
                const apiSearch = await client.api(new QuerySubscriptions({ search, take:8, orderBy:'nameLower' }))
                if (apiSearch.succeeded && search === props.modelValue) {
                    api.value = apiSearch
                    active.value = -1
                }
            })(props.modelValue)
        }

        function selectIndex(index) {
            console.log('selectIndex', index)
            const sub = index >= 0 ? results.value[index] : null
            if (sub) {
                const setFields = ['email','firstName','lastName']
                setFields.forEach(id => {
                    const el = props.inputElement.form[id]
                    if (el) {
                        el.value = sub[id]
                    }
                })
                focusNextElement()
                focusNextElement()
                focusNextElement()
            }
        }

        const inputEvents = {
            focus(e) {
                show.value = true
            },
            blur(e) {
                setTimeout(() => show.value = false, 150)
            },
            keydown(e) {
                if (e.key === 'ArrowDown') {
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
                    show.value = false
                    e.preventDefault()
                    e.stopPropagation()
                }
            },
        }

        onMounted(() => {
            client.swr(new QuerySubscriptions({ take:8, orderBy:'nameLower' }), r => api.value = r)
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
        
        onMounted(() => {
            console.log('SelectEmail.onMounted', props.modelValue, props.inputElement)
        })
        onUnmounted(() => {
            console.log('SelectEmail.onUnmounted', props.modelValue, props.inputElement)
        })

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