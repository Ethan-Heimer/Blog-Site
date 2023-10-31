const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    Header: String,
    Content: [],
    UserId: String,
},
{
    collection: "Blog"
})

module.exports = mongoose.model("Blogs", blogSchema);