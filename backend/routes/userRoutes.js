const express = require("express");
const userController = require("../controllers/userController");
const userModel = require("../models/userModel");

const router = express.Router();

router.post("/signup", userController.Add);
router.post("/signin", userController.SignIn)

router.get("/get/:id", userController.getUserData);
router.post("/update/:id", userController.updateUserData);

router.post("/favorite/add/:id", userController.addFavorite);
router.post("/favorite/remove/:id", userController.removeFavorite);

router.get("/favorite/:id/has/:blogId", userController.hasFavorite);
router.get("/favorite/get/:id", userController.getFavorites);

router.get("/getbysearch/:keyword?", userController.getUsersByKeyWords);

router.post("/following/add/:id", userController.addFollowing);
router.post("/following/remove/:id", userController.removeFollow);

router.get("/following/:id/is/:followingId", userController.isFollowing);
router.get("/following/get/:id", userController.getFollowing);
router.get("/following/count/:id", userController.getFollowingCount);

router.get("/followers/get/:id", userController.getFollowers);
router.get("/followers/count/:id", userController.getFollowerCount);


module.exports = router;