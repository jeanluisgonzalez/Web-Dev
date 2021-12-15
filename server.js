require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
//const encrypt = require("mongoose-encryption");
//const md5 = require("md5");
//npm init -y
//npm i express body-parser ejs mongoose mongoose-encryption dotenv bcrypt passport-local passport-local-mongoose express-session
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/DBname");

//userSchema.plugin(encrypt,{secret: process.env.SECRET, encryptedFields:["password"]});

const schemaNAME = new mongoose.Schema({
  title: String,
  content: String
});

const Collection = mongoose.model("Collection",articleSchema);


app.listen(3000, function() {
  console.log("Server has started successfully");
});
