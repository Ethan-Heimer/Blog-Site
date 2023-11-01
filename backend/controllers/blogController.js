const blogModel = require("../models/blogModel");
const TryDataBaseMethod = require("../utils/DatabaseHelpers");

const Add = async (req, res) => {
    console.log(req.body);
    await TryDataBaseMethod(() => blogModel.create(req.body), res, "Blog Added");
}

const Edit = async (req, res) => {
    let id = req.params.id;
    console.log(id);

    await TryDataBaseMethod(() => blogModel.findByIdAndUpdate(id, {
        $set: req.body
    }), res, "Blog Edited");
    
}

const Get = async (req, res) => { 
    let id = req.params.id;

    console.log(id);
    TryDataBaseMethod(() => blogModel.findById(id), res, "Blog Got")
}

const GetAll = async (req, res) => {
    TryDataBaseMethod(() => blogModel.find(), res, "Blogs Gotten");
}

const GetAllByUser = async(req, res) => {
    TryDataBaseMethod(() => blogModel.find({UserId: req.params.userid}), res, "Blogs Gotten");
}

const Delete = async(req, res) => {
    let id = req.params.id;
   
    console.log(id);
    TryDataBaseMethod(() => blogModel.findByIdAndDelete(id), res, "Blog Deleted");
}

const Append = async(req, res) => {
    let id = req.params.id;

    try{
        await blogModel.findByIdAndUpdate(id, req.body)
        .then(() => {
            res.send({
                data: "Blog Updated",
                status: 200
            })
        })
    }
    catch(error){
       Add(req, res);
    }
}

module.exports = {
    Add,
    Edit,
    Get,
    GetAll,
    GetAllByUser,
    Delete, 
    Append
}