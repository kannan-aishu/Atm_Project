const mongoose = require("mongoose")

const Create_User = mongoose.Schema({
    // name: { type: String, required: true },
    Id:Number,
    Username:String,
    Password:String,
    ConfirmPassword:String,
    Balance:Number,
    Deposit:Number,
    Withdrawal: Number
})
const Usermodel = mongoose.model("users",Create_User)
module.exports = Usermodel;