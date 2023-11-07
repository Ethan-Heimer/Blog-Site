const blogController = require("../controllers/blogController.socket");

const addComent = (io, socket) => {
    socket.on("post_comment", async (data) => blogController.addComment(io, socket, data))
}

module.exports = {
    addComent
}