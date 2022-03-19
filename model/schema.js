const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trime: true,
    maxlength: [20, "name must be less than 20 char"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
// now we will export the model
// with the upper schema

module.exports = mongoose.model("Task", TaskSchema);
