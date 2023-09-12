const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //helps to connect to mongodb db
const ExerciseRoute = require("./router/exerciseRoute");

require("dotenv").config(); //Have environment variable in .env file

const app = express(); //creating 'express variable'
const port = process.env.PORT || 5000; //creating a port

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;

app.use("/exercise", ExerciseRoute);

connection.once("open", () => {
  console.log("Connection established successfully!!!");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
