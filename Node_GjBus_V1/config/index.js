const path = require("path")
const configPath = path.join(__dirname,"..","config","datagokr.json")
const config = require(configPath)

module.exports = config