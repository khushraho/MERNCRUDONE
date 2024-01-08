const UserData = require("../models/userDataModel");

//CREATE
 exports.addUser=async (req, res) => {
    // console.log(req.body);
    const { name, email, age } = req.body;
    try {
      const userAdded = await UserData.create({
        name: name,
        email: email,
        age: age,
      });
      res.status(201).json(userAdded);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
//GET ALL USER
exports.getAllUser=async (req, res) => {
    try {
      const allUsers = await UserData.find();
  
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  //GET SINGLE USER
exports.getSingleUser=async (req, res) => {
    const { id } = req.params;
  
    try {
      const singleUser = await UserData.findById({ _id: id });
      res.status(200).json(singleUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  //DELETE SINGLE USER
exports.deleteSingleUser=async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await UserData.findByIdAndRemove({ _id: id });
      res.status(201).json(deletedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  //UPDATE SINGLE USER
  exports.updateSingleUser=async (req, res) => {
    const { id } = req.params;
    console.log("get body", req.body);
    console.log("get id", id);
    const { name, email, age } = req.body;
    try {
      const updatedUser = await UserData.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

