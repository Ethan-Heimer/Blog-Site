const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const {Server} = require("socket.io");

require("dotenv").config();
const blogController = require("./controllers/blogController");

const app = express();

const server = require('http').createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

const PORT = process.env.PORT;

const blogRouter = require("./routes/blogRoutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use(bodyParser.json());

app.use("/blog", blogRouter);
app.use("/user", userRouter);

mongoose.connect(`mongodb+srv://Ethan:${process.env.PASSWORD}@database.iqvpvxu.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`)
.then(() => {
    console.log("Connected to Database 🎉")
}).catch(error => {
    console.log("error in database: " + error);
})

//put in different file
//clean up code

io.on("connection", (socket) => {
    console.log("new connection");

    socket.on("post_comment",async (data) => {
        console.log(data.BlogId);
        await blogController.PostComment(data.BlogId, data.UserId, data.Comment);

        io.sockets.emit("comment_posted_"+data.BlogId);
    })
})


server.listen(PORT, () => {
    console.log("Sever Up");
})
