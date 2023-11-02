const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    Header: String,
    Content: String,
    UserId: String,

    ThumbnailURL: String
},
{
    collection: "Blog"
})

module.exports = mongoose.model("Blogs", blogSchema);