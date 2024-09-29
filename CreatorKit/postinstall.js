// Usage: npm install

const writeTo = './wwwroot/lib'
const defaultPrefix = 'https://unpkg.com'
const files = {
  mjs: {
      'vue.mjs':                         '/vue@3/dist/vue.esm-browser.js',
      'vue.min.mjs':                     '/vue@3/dist/vue.esm-browser.prod.js',
      'servicestack-client.mjs':         '/@servicestack/client@2/dist/servicestack-client.mjs',
      'servicestack-client.min.mjs':     '/@servicestack/client@2/dist/servicestack-client.min.mjs',
      'servicestack-vue.mjs':            'd',
      'servicestack-vue.min.mjs':        '/@servicestack/vue@3/dist/servicestack-vue.min.mjs',
  },
}

const js = ['servicestack-vue.mjs','servicestack-vue.min.mjs']

const defaultHostPrefix = 'https://raw.githubusercontent.com/NetCoreTemplates/razor-ssg/main/MyApp/'
const hostFiles = [
]

hostFiles.forEach(file => {
    const url = file.includes('://')
        ? file
        : defaultHostPrefix + file

    const toDir = path.dirname(file)
    if (!fs.existsSync(toDir)) {
        fs.mkdirSync(toDir, { recursive: true })
    }
    fetchDownload(url, file, 5)
})

const path = require('path')
const fs = require('fs').promises
const http = require('http')
const https = require('https')

const requests = []
Object.keys(files).forEach(dir => {
    const dirFiles = files[dir]
    Object.keys(dirFiles).forEach(name => {
        let url = dirFiles[name]
        if (url.startsWith('/'))
            url = defaultPrefix + url
        const toFile = path.join(writeTo, dir, name)
        requests.push(fetchDownload(url, toFile, 5))
    })
})

;(async () => {
    await Promise.all(requests)
    js.forEach(file => {
        const fromFile = path.join(writeTo,'mjs', file)
        fs.copyFile(fromFile, path.join('./wwwroot/js', file))
    })
})()

async function fetchDownload(url, toFile, retries) {
    const toDir = path.dirname(toFile)
    await fs.mkdir(toDir, { recursive: true })
    for (let i=retries; i>=0; --i) {
        try {
            let r = await fetch(url)
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            let txt = await r.text()
            console.log(`writing ${url} to ${toFile}`)
            await fs.writeFile(toFile, txt)
            return
        } catch (e) {
            console.log(`get ${url} failed: ${e}${i > 0 ? `, ${i} retries remaining...` : ''}`)
        }
    }
}