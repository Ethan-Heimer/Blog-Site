const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   Username: String,
   Email: String,
   Password: String,
   UUID: String
},
{
    collection: "Users"
})

module.exports = mongoose.model("Users", userSchema);