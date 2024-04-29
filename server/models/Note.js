const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const noteModel = mongoose.model("Note", noteSchema);
module.exports = noteModel;
