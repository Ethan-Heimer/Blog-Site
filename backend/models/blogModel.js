const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    Header: String,
    Content: String,
    UserId: String,
},
{
    collection: "Blog"
})

module.exports = mongoose.model("Blogs", blogSchema);