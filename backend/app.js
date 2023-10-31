const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const blogRouter = require("./routes/blogRoutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use("/blog", blogRouter);
app.use("/user", userRouter);

mongoose.connect(`mongodb+srv://Ethan:${process.env.PASSWORD}@database.iqvpvxu.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`)
.then(() => {
    console.log("Connected to Database 🎉")
}).catch(error => {
    console.log("error in database: " + error);
})

app.listen(PORT, () => {
    console.log("Listening to Server");
})