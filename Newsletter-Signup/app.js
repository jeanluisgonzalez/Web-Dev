const express = require("express");
const https = require("https");
const bodyParser = require("body-Parser");
const request =require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/signup.html");
});
app.post("/",(req,res)=>{
  var fistName = req.body.fistName;
  var lastName = req.body.lastName;
  var email = req.body.email;

  var data = {
    
  }


  res.sendFile(__dirname+"/signup.html");
});
app.listen(3000,()=>{
  console.log("Server is running on port 3000");
});

//API Key
// b2ba8081c2f545f8c998c0f0f2f00a3f-us5

//list
// 0d09891d17
