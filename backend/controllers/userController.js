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

    await userModel.findOne({Username: Username})
    .then(result => {
        if(result != null && bcrypt.compare(Password, result.Password)){
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
        else
        {
            res.json({
                message: "Username or Password is Not Correct",
                statusCode: 403
            })
        }
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

function GetUserData(data){
    return [data.Username, data.Email, data.Password];
}


module.exports = { 
    Add,
    SignIn,
    getUserData,
    updateUserData
}