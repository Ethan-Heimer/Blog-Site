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
                data: result.UUID,
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

function GetUserData(data){
    return [data.Username, data.Email, data.Password];
}


module.exports = { 
    Add,
    SignIn
}