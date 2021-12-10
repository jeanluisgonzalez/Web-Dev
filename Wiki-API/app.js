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
////////////////////////////////////////Request Targetting All Articles////////////////////////////////////////

app.route("/articles")
  .get(function(req,res){
      Article.find(function(err,foundArticles){
        if(!err){
          res.send(foundArticles);
        }else{
          res.send(err);
        }
      });
    })
    .post(function(req,res){
      const articleTitle = req.body.title;
      const articleContent = req.body.content;

      const newArticle = new Article ({
        title:articleTitle,
        content: articleContent
      });
      newArticle.save(function(err){
        if(!err){
          res.send("Successfully saved");
        }else{
          res.send(err);
        }
      });
    })
    .delete(function(req,res){

      Article.deleteMany(function(err){
        if (!err) {
          res.send("Successfully deleted all articles.");
        }else{
          res.send(err);
        }
      });
    });
////////////////////////////////////////Request Targetting A Specific Article////////////////////////////////////////

app.route("/articles/:articleTitle")
  .get(function(req, res){
    const articleTitle = req.params.articleTitle;
    Article.findOne({title: articleTitle},function(err,foundArticle){
      if(foundArticle){
        res.send(foundArticle);
      }else{
        res.send("No articles matching that title was found.")
      }
    });

  })
  .put(function(req,res){
    Article.updateOne(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      function(err){
        if(!err){
          res.send("Successfully updated article.");
        }else{
          console.log(err);
        }
      });

  })
  .patch(function(req,res){

  });
app.listen(3000, function() {
  console.log("Server has started successfully");
});
