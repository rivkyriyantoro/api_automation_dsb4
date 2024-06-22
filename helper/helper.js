const fs = require('fs')
function readJsonSchma(schemaName){
    const schemaFolder = "resource/schema"
    return JSON.parse(fs.readFileSync('${schemafolder}/${schemaName}','utf8'))
}

module.exports = readJsonSchma;