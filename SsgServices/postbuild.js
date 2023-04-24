const fs = require('fs')

const writeTo = './wwwroot/tailwind/all.components.txt'
const fromDir = './wwwroot/mjs/components'

if (fs.existsSync(writeTo)) {
    fs.unlinkSync(writeTo)
}
fs.closeSync(fs.openSync(writeTo, 'w'))
fs.readdirSync(fromDir).forEach(f => {
    const file = fromDir + '/' + f
    if (fs.lstatSync(file).isFile()) {
        fs.appendFileSync(writeTo, fs.readFileSync(file).toString())
    } 
})