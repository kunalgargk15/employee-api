const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name!"],
  },
  age: {
    type: Number,
    required: [true, "Please provide your age!"],
  },
  designation: {
    type: String,
    required: [true, "Please provide your designation!"],
  },
});

module.exports = mongoose.model("Employees", employeeSchema);
