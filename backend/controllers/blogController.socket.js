const blogController = require("../controllers/blogController");

const addComment = async (io, socket, data) => {
    console.log(data.BlogId);
    await blogController.PostComment(data.BlogId, data.UserId, data.Comment);

    io.sockets.emit("comment_posted_"+data.BlogId);
}

module.exports = {
    addComment
}