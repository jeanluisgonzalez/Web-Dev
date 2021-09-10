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
  const fistName = req.body.fistName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  console.log("fist name: "+fistName+" last name: "+lastName+" Email: "+email);
  res.sendFile(__dirname+"/signup.html");
});
app.listen(3000,()=>{
  console.log("Server is running on port 3000");
});
