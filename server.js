const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
//npm init -y
//npm i express body-parser ejs mongoose
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/DBname");

const schemaNAME = new mongoose.Schema({
  title: String,
  content: String
});

const Collection = mongoose.model("Collection",articleSchema);


app.listen(3000, function() {
  console.log("Server has started successfully");
});
