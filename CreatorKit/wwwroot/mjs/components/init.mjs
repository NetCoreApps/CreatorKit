import { $$, enc, JsonApiClient } from "@servicestack/client";
import { createApp, reactive } from "vue";
import ServiceStackVue from "@servicestack/vue"

export const BaseUrl = location.origin === 'https://localhost:5002'
    ? 'https://localhost:5001'
    : 'https://ssg-services.servicestack.net'


let AppData = {
    init: false,
    Auth: null,
    UserData: null,
}
let client = null, store = null, Apps = []
export { client, AppData }


/** @param {any} [exports] */
export function init(exports) {
    if (AppData.init) return
    client = JsonApiClient.create(BaseUrl)
    AppData = reactive(AppData)
    AppData.init = true

    if (exports) {
        exports.client = client
        exports.AppData = AppData
        exports.Apps = Apps
    }
}

const alreadyMounted = el => el.__vue_app__

/** Mount Vue3 Component
 * @param sel {string|Element} - Element or Selector where component should be mounted
 * @param component
 * @param [props] {any} 
 * @param {{ mount?:(app, { client, AppData }) => void }} options= */
export function mount(sel, component, props, options) {
    if (!AppData.init) {
        init(globalThis)
    }
    const els = $$(sel)
    els.forEach(el => {
        if (alreadyMounted(el)) return
        const elProps = el.getAttribute('data-props')
        const useProps = elProps ? { ...props, ...(new Function(`return (${elProps})`)()) } : props
        const app = createApp(component, useProps)
        app.provide('client', client)

        app.use(ServiceStackVue)
        if (options?.mount) {
            options.mount(app, { client, AppData })
        }
        app.mount(el)
        Apps.push(app)
    })

    return Apps.length === 1 ? Apps[0] : Apps
}
