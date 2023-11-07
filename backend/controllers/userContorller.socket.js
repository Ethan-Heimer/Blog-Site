const userModel = require("../models/userModel");

const addFollowingSocket = async(io, socket, data) => {
    const uuid = data.UUID; 
    const followingUUID = data.followingUUID;

    console.log(data);

    await userModel.findOneAndUpdate({UUID: followingUUID}, {$push: {Followers: uuid}});
    await userModel.findOne({UUID: followingUUID}).then(result => {
        emitFollowers(io, result.Followers.length, followingUUID);
        //console.log(result.Following.length)
    })

    await userModel.findOneAndUpdate({UUID: uuid}, {$push: {Following: followingUUID}});
    await userModel.findOne({UUID: uuid}).then(result => {
        emitFollowing(io, result.Following.length, uuid);
        console.log(result.Following.length)
    })
}

const removeFollowingSocket = async(io, socket, data) => {
    const uuid = data.UUID; 
    const followingUUID = data.followingUUID;
    
    await userModel.findOneAndUpdate({UUID: followingUUID}, {$pull: {Followers: uuid}});

    await userModel.findOne({UUID: followingUUID}).then(result => {
        emitFollowers(io, result.Followers.length, followingUUID);
        //console.log(result.Following.length)
    })

    await userModel.findOneAndUpdate({UUID: uuid}, {$pull: {Following: followingUUID}});

    await userModel.findOne({UUID: uuid}).then(result => {
        emitFollowing(io, result.Following.length, uuid);
        console.log(result.Following.length)
    })
    /*
    await userModel.findOne({UUID: followingUUID}).then(async (result) => {
        const id = result.Followers.indexOf(followingUUID);

        result.Followers.splice(id, 1);
        await result.save();

        emitFollowers(io, result.Followers.length, followingUUID);
    })

    await userModel.findOne({UUID: uuid}).then( async (result) => {
        const id = result.Following.indexOf(followingUUID);

        result.Following.splice(id, 1);
        result.save();

        emitFollowing(io, result.Followers.length, uuid);

    }).catch(error => {
        console.log(error)
    })
    */
}

const emitFollowing = (io, Count, id) => io.sockets.emit("following_updated_"+id, {Count});
const emitFollowers = (io, Count, id) => io.sockets.emit("follower_updated_"+id, {Count});

module.exports = {
    addFollowingSocket,
    removeFollowingSocket
}