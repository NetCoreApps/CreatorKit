import { createApp, nextTick, reactive } from "vue"
import { JsonApiClient, $1, $$ } from "@servicestack/client"
import ServiceStackVue, { useAuth } from "@servicestack/vue"
import { Authenticate } from "./dtos.mjs"

let client = null, Apps = []
let AppData = {
    init:false
}
export { client, Apps }

/** Shared Components */
const Components = {
}

const alreadyMounted = el => el.__vue_app__

/** Mount Vue3 Component
 * @param sel {string|Element} - Element or Selector where component should be mounted
 * @param component
 * @param [props] {any} */
export function mount(sel, component, props) {
    if (!AppData.init) {
        init(globalThis)
    }
    const el = $1(sel)
    if (alreadyMounted(el)) return
    const app = createApp(component, props)
    app.provide('client', client)
    Object.keys(Components).forEach(name => {
        app.component(name, Components[name])
    })
    app.use(ServiceStackVue)
    app.component('RouterLink', ServiceStackVue.component('RouterLink'))
    app.mount(el)
    Apps.push(app)
    return app
}

export function mountAll() {
    $$('[data-component]').forEach(el => {
        if (alreadyMounted(el)) return
        let componentName = el.getAttribute('data-component')
        if (!componentName) return
        let component = Components[componentName] || ServiceStackVue.component(componentName)
        if (!component) {
            console.error(`Could not create component ${componentName}`)
            return
        }

        let propsStr = el.getAttribute('data-props')
        let props = propsStr && new Function(`return (${propsStr})`)() || {}
        mount(el, component, props)
    })
}

/** @param {any} [exports] */
export function init(exports) {
    if (AppData.init) return
    client = JsonApiClient.create()
    AppData = reactive(AppData)
    AppData.init = true
    mountAll()
    
    nextTick(async () => {
        const { signIn, signOut } = useAuth()
        const api = await client.api(new Authenticate())
        if (api.succeeded) {
            signIn(api.response)
        } else {
            signOut()
        }
    })

    if (exports) {
        exports.client = client
        exports.Apps = Apps
    }
}
