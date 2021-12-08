const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Article = mongoose.model("Article",articleSchema);

app.get("/articles",function(req,res){
  Article.find(function(err,foundArticles){
    if(!err){
      res.send(foundArticles);
    }else{
      res.send(err);
    }
  });
});
app.post("/articles",function(req,res){
  const articleTitle = req.body.title;
  const articleContent = req.body.content;

  const newArticle = new Article ({
    title:articleTitle,
    content: articleContent
  });
  newArticle.save(function(err){
    if(!err){
      console.log("Successfully saved");
    }else{
      console.log(err);
    }
  });
});

app.listen(3000, function() {
  console.log("Server has started successfully");
});
