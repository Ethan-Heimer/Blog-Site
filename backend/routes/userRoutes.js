const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userController.Add);
router.post("/signin", userController.SignIn)

router.get("/get/:id", userController.getUserData);
router.post("/update/:id", userController.updateUserData);

module.exports = router;