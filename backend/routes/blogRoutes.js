const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.post("/add", blogController.Add);
router.put("/edit/:id", blogController.Edit);
router.get("/get/:id", blogController.Get);
router.get("/getAll", blogController.GetAll);
router.get("/getAllByUser/:userid", blogController.GetAllByUser);
router.delete("/delete/:id", blogController.Delete);
router.patch("/append/:id", blogController.Append);

module.exports = router;