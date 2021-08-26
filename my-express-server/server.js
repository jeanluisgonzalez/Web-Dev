const express = require('express');
const app = express();

app.get("/",function(req, res){
  res.send("<h1>Hello, world!</h1>");
});
app.get("/contact",function(req,res){
  res.send("Contact me at: jeanluiss26@gmail.com");
});
app.get("/about",function(req,res){
  res.send("hi my name is Jean Luis Gonzaleza an i will be a Dev programmer");
});
app.get("/hobbies",function(req,res){
  res.send("<ul><li>Coffe</li><li>Code</li><li>Beer</li></ul>");
});
app.listen(3000,function(){
  console.log("Server started on port 3000");
});
