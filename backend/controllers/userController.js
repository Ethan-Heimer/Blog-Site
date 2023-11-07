const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");
const TryDataBaseMethod = require("../utils/DatabaseHelpers");

const bcrypt = require('bcrypt');

const Add = async (req, res) => {
    await bcrypt.hash(req.body.Password, 10).then(hash => {
        req.body.Password = hash;
        req.body.UUID = new Date().getTime();
    });

    console.log(req.body);
    await TryDataBaseMethod(() => userModel.create(req.body), res, "User Added");
}

const SignIn = async (req, res) => {
    const [Username, Email, Password] = GetUserData(req.body)

    console.log(Password);

    await userModel.findOne({Username: Username})
    .then(result => {
        bcrypt.compare(Password, result.Password, (err, isMatch) => {
            if(isMatch){
                res.json({
                    data: {
                        UUID: result.UUID,
                        Username: result.Username,
                        ProfilePicture: result.ProfilePicture
                    },
                    message: 'Signed In Successfully',
                    statusCode: 200
                })
            }
            else{
                res.json({
                    message: "Username or Password is Not Correct",
                    statusCode: 403
                })
            }
        })
    })
    .catch(error => {
        res.json({
            message: "User Not Found",
            errorMessage: error.message,
            statusCode: 404
        })
    })
}

const getUserData = async (req, res) => {
    const uuid = req.params.id;

    await userModel.findOne({UUID: uuid})
    .then(resault => {
        if(resault != null){
            res.json({
                data: {
                    Username: resault.Username,
                    ProfilePicture: resault.ProfilePicture,
                },
                message: "user data sent",
                statusCode: 200
            })
        }
    })
    .catch(err => {
        res.json({
            message: "user not found",
            errorMessage: err.message,
            statusCode: 404
        })
    })
}

const updateUserData = async (req, res) => {
    const uuid = req.params.id;
    const username = req.body.Username;
    const profilepicture = req.body.ProfilePicture;

    console.log(username, profilepicture);

    await TryDataBaseMethod(() => userModel.findOneAndUpdate({UUID: uuid}, {Username: username, ProfilePicture: profilepicture}), res, "User Updated");
}

const addFavorite = async(req, res) => {
    const uuid = req.params.id; 
    const blogId = req.body.blogId;

    await userModel.findOne({UUID: uuid}).then( async (result) => {
        console.log(result.Favorites);
        
        const favorites = result.Favorites;
        favorites.push(blogId);
        await userModel.findOneAndUpdate({UUID : uuid}, {Favorites: favorites}).then(
            res.json({
                message: "favorite added",
                status: 200
            })
        ).catch(error => {
            console.log(error)
            res.json({
                message: "Favorite Failed To Add",
                error: error.message,
                status: 500
            })
        })
        .catch(error => {
            console.log(error)
            res.json({
                message: "User not found",
                error: error.message,
                status: 404
            })
        })
    })
}

const removeFavorite = async(req, res) => {
    const uuid = req.params.id; 
    const blogId = req.body.blogId;

    await userModel.findOne({UUID: uuid}).then( async (result) => {
        const favorites = result.Favorites;
        const id = favorites.indexOf(blogId);

        favorites.splice(id, 1);

        await userModel.findOneAndUpdate({UUID : uuid}, {Favorites: favorites}).then(
            res.json({
                message: "Removed",
                status: 200
            })
        ).catch(error => {
            console.log(error)
            res.json({
                message: "Favorite Failed To Remove",
                error: error.message,
                status: 500
            })
        })
    }).catch(error => {
        console.log(error)
        res.json({
            message: "User not found",
            error: error.message,
            status: 404
        })
    })
}

const hasFavorite = async(req, res) => {
    const uuid = req.params.id; 
    const blogId = req.params.blogId;

    await userModel.findOne({UUID: uuid}).then(resault => {
        const has = resault.Favorites.includes(blogId);
        console.log(has);

        res.json({
            data: has,
            message: "has favorite receved",
            status: 200
        })
    })
    .catch(error => {
        console.log(error);

        res.json({
            error: error.massage,
            message: "user not found",
            status: 404
        })
    })
}

const getFavorites = async(req, res) => {
    const id = req.params.id
    
    await userModel.findOne({UUID: id}).then( async (result) => {
        let blogs = [];

        for(var i = 0; i < result.Favorites.length; i++){
            await blogModel.findById(result.Favorites[i]).then(result => {
                if(result != null){
                    blogs.push(result);
                }
            }).catch(error => {
                console.log("failed to fetch blog");
            })

            if(i == result.Favorites.length-1){
                console.log(blogs);

                res.json({
                    data: blogs,
                    message: "favorite blogs",
                    status: 200
                })
            }
        }
    })
    .catch(error => {
        res.json({
            error: error.message,
            message: "user not found",
            status: 404
        })
    })
}

const getUsersByKeyWords = async(req, res) => {
    const keyword = req.params.keyword || "";
    console.log(keyword);

    await userModel.find({Username : {$regex : keyword}}).then(result => {
        const data = result.map(x => {
            return x.UUID
        })

        res.json({
            data: data,
            message: "Users Feched",
            status: 200
        })
    })
    .catch(error => {
        console.log(error)

        res.json({
            error: error.message,
            message: "error occured",
            status: 404
        })
    })
}

const addFollowing = async(req, res) => {
    const uuid = req.params.id; 
    const followingUUID = req.body.followingUUID;

    await userModel.findOne({UUID: followingUUID}).then(async (result) => {
        result.Followers.push(uuid);
        result.save();
    })

    await userModel.findOne({UUID: uuid}).then( async (result) => {
        result.Following.push(followingUUID);
        result.save();

        res.json({
            message: "follow added",
            status: 200
        })
    }).catch(error => {
        console.log(error)
        res.json({
            message: "User not found",
            error: error.message,
            status: 404
        })
    })
}

const removeFollow = async(req, res) => {
    const uuid = req.params.id; 
    const followingUUID = req.body.followingUUID;

    await userModel.findOne({UUID: followingUUID}).then(async (result) => {
        const id = result.Followers.indexOf(followingUUID);

        result.Followers.splice(id, 1);
        result.save();
    })

    await userModel.findOne({UUID: uuid}).then( async (result) => {
        const id = result.Following.indexOf(followingUUID);

        result.Following.splice(id, 1);
        result.save();

        res.json({
            message: "Removed",
            status: 200
        })
    }).catch(error => {
        console.log(error)
        res.json({
            message: "User not found",
            error: error.message,
            status: 404
        })
    })
}

const isFollowing = async(req, res) => {
    const uuid = req.params.id; 
    const followingUUID = req.params.followingId;

    userModel.find({Following: followingUUID}).then(result => {
        let has = result.some(x => x.UUID == uuid); 

        res.json({
            data: has,
            message: "has favorite receved",
            status: 200
        })
    })
    .catch(error => {
        console.log(error);

        res.json({
            error: error.massage,
            message: "user not found",
            status: 404
        })
    })

}

const getFollowing = async(req, res) => {
    const id = req.params.id

    await userModel.find({Followers: id}).then(result => {
        const following = result.map(x => x.UUID);

        res.json({
            data: following,
            message: "following",
            status: 200
        })
    })
    .catch(error => {
        res.json({
            error: error.message,
            message: "user not found",
            status: 404
        })
    })
}

const getFollowers = async(req, res) => {
    const id = req.params.id

    await userModel.find({Following: id}).then(result => {
        const following = result.map(x => x.UUID);

        res.json({
            data: following,
            message: "following",
            status: 200
        })
    })
    .catch(error => {
        res.json({
            error: error.message,
            message: "user not found",
            status: 404
        })
    })
}

const getFollowingCount = async (req, res) => {
    const id = req.params.id
    
    await userModel.findOne({UUID: id}).then( async (result) => {
        res.json({
            data: result.Following.length,
            message: "count recieved",
            status: 200
        })
    })
    .catch(error => {
        console.log(error)

        res.json({
            data: error.error,
            message: "count failed",
            status: 404
        })
    })
}

const getFollowerCount = async (req, res) => {
    const id = req.params.id
    
    await userModel.findOne({UUID: id}).then( async (result) => {
        res.json({
            data: result.Followers.length,
            message: "count recieved",
            status: 200
        })
    })
    .catch(error => {
        console.log(error)

        res.json({
            data: error.error,
            message: "count failed",
            status: 404
        })
    })
}

function GetUserData(data){
    return [data.Username, data.Email, data.Password];
}


module.exports = { 
    Add,
    SignIn,
    getUserData,
    updateUserData,
    addFavorite,
    removeFavorite,
    hasFavorite,
    getFavorites,
    getUsersByKeyWords,
    addFollowing,
    removeFollow,
    isFollowing,
    getFollowing,
    getFollowingCount,
    getFollowers,
    getFollowerCount
}