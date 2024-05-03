const express = require("express");
const app = express();
const connectDB = require("./config/database");
const noteModel = require("./models/Note");
const cors = require("cors");
// import connectDB from "../config/database";
// const mongoose = require("mongoose");
//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};
app.use(express.json());
app.use(cors());
app.use(requestLogger);
app.use(express.static("dist"));

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
//Connect To Database
connectDB();

// app.get("/", async (req, res) => {
//   const response = await noteModel.find();
//   res.json({ notes: response });
// });
app.get("/", (request, response) => {
  noteModel.find({}).then((notes) => {
    response.json(notes);
  });
});

app.get("/api/notes/:id", async (request, response) => {
  const id = request.params.id;
  console.log("id", id);
  const note = await noteModel.find({ _id: request.params.id });
  console.log("note", note);
  // response.json(note);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});
app.delete("/api/notes/:id", async (request, response) => {
  const id = request.params.id;
  await noteModel.findByIdAndDelete({ _id: request.params.id });

  response.status(204).end();
});
app.post("/api/notes", (request, response) => {
  const note = request.body;
  console.log(note);
  response.json(note);
});

app.use(unknownEndpoint);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on Port ${process.env.PORT}, you better catch it!`
  );
});
