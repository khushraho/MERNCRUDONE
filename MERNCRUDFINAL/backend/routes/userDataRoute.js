const express = require("express");
const router = express.Router();

const { addUser, getAllUser, getSingleUser, deleteSingleUser, updateSingleUser } =require("../controller/userDataController")

//CREATE user
router.route("/").post(addUser);

//GET All USER
router.route("/all").get(getAllUser);

  //GET SINGLE USER
router.route("/:id").get(getSingleUser);

//DELETE
router.route("/:id").delete(deleteSingleUser);

//UPDATE
router.route("/edit/:id").patch(updateSingleUser);

module.exports = router;