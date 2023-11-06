const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");
const TryDataBaseMethod = require("../utils/DatabaseHelpers");
const sendEmail = require("../utils/emailer");

const Add = async (req, res) => {
    console.log(req.body);
    await TryDataBaseMethod(() => blogModel.create(req.body), res, "Blog Added");

    EmailFollowers();
}

const Edit = async (req, res) => {
    let id = req.params.id;
    console.log(id, "id");

    await TryDataBaseMethod(() => blogModel.findByIdAndUpdate(id, {
        $set: req.body
    }), res, "Blog Edited");
    
}

const Get = async (req, res) => { 
    let id = req.params.id;

    console.log(id, "id get");
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
    console.log("ran");

    await blogModel.findById(id).then(resault => {
        if(resault == undefined)
            throw("Blog not Found"); 
        console.log(resault, "edit");
        Edit(req, res)
    }).catch(error => {
        console.log("add");
        Add(req, res);
    });
}

const PostComment = async(id, uuid, comment) => {
    await blogModel.findById(id).then( async(resault) => {
        if(resault == undefined){
            return;
        }
    
        console.log(resault);
      
        resault.Comments.push({
            PosterId: uuid,
            Message: comment
        })

        await blogModel.findByIdAndUpdate(id, {Comments: resault.Comments})
        
    }).catch(error => console.log(error));
}

const getBlogsByKeyWords = async(req, res) => {
    const keyword = req.params.keyword || "";
    console.log(keyword);

    TryDataBaseMethod(() => blogModel.find({Header : {$regex : keyword}}), res, "Blogs Gotten");
}

async function EmailFollowers(UUID){
    await userModel.findOne({UUID: UUID}).then(resault => {
        const followers = resault.Followers;

        followers.forEach(async(x) => {
            await userModel.findOne({UUID: x}).then(fResult => {
                const email = fResult.Email;

                sendEmail(email, fResult.Username + " Posted!", `<h1>Someone you follow just posted!</h1><p>${fResult.Username} posted a new blog: ${req.body.Header}</p>`);
            })
        })
    }).catch(error => console.log(error));
}

module.exports = {
    Add,
    Edit,
    Get,
    GetAll,
    GetAllByUser,
    Delete, 
    Append,
    PostComment,
    getBlogsByKeyWords
}