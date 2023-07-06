const express = require("express");
const empModel = require("./empModel");
const { any } = require("promise");
const router = express.Router();

router.post("/employees", async (req, res) => {
  const data = new empModel({
    name: req.body.name,
    age: req.body.age,
    designation: req.body.designation,
  });
  try {
    const savedData = await data.save();
    res.json(savedData);
  } catch (err) {
    res.json({
      message: "Error in saving the data!",
      err,
    });
  }
});

router.get("/employees", async (req, res) => {
  try {
    const data = await empModel.find();
    res.json(data);
  } catch (err) {
    res.json({
      message: "Error in finding the data!",
      err,
    });
  }
});

router.get("/employees/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await empModel.findById(id);
    res.json(data);
  } catch (err) {
    res.json({
      message: "Error in finding the data by id!",
      err,
    });
  }
});

router.put("/employees/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await empModel.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (err) {
    res.json({
      message: "Error in updating the data!",
      err,
    });
  }
});

router.delete("/employees/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await empModel.findByIdAndDelete(id);

    res.send("Deleted successfully");
  } catch (err) {
    res.json({
      message: "Error in deleting the data!",
      err,
    });
  }
});

module.exports = router;
