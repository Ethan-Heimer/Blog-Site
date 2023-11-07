const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   Username: String,
   Email: String,
   Password: String,
   UUID: String,

   ProfilePicture: String,

   Favorites: Array,
   
   Following: Array,
   Followers: Array,

   _id: Number
},
{
    collection: "Users"
})

module.exports = mongoose.model("Users", userSchema);