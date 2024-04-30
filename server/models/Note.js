const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const noteModel = mongoose.model("Note", noteSchema);
module.exports = noteModel;
