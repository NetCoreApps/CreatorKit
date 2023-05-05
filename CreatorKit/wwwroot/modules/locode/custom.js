// function expandEnumFlags(value,options) {
//     if (!options.type) {
//         console.error(`enumDescriptions missing {type:EnumType} options`)
//         return value
//     }
//     const enumType = window.Server.api.types.find(x => x.name === options.type)
//     if (!enumType) {
//         console.error(`Could not find metadata for ${options.type}`)
//         return value
//     }
//    
//     const to = []
//     for (let i=0; i<enumType.enumValues.length; i++) {
//         const enumValue = parseInt(enumType.enumValues[i])
//         if (enumValue > 0 && (enumValue & value) === enumValue) {
//             to.push(enumType.enumDescriptions?.[i] || enumType.enumNames?.[i] || `${value}`)
//         }
//     }
//     return to.join(', ')
// }
//
// function enumFlagsConverter(type) {
//     return x => expandEnumFlags(x,{type})
// }