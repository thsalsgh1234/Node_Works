var mongoose = require("mongoose")
var buketVO = mongoose.Schema({

    bGoal: String,
    bYear: String,
    bDeadline: String,
    bSuccess: String
})
module.exports = mongoose.model("tbl_buket", buketVO)