const express = require("express");
const app = express();
const connectDB = require("./config/database");
const noteModel = require("./models/Note");
const cors = require("cors");
// import connectDB from "../config/database";
// const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

app.get("/", async (req, res) => {
  const response = await noteModel.find();
  res.json({ notes: response });
});

//Server Running
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on Port ${process.env.PORT}, you better catch it!`
  );
});
