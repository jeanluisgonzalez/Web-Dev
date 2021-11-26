//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  }
});

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema]
});

const Item = mongoose.model("Item", itemsSchema);
const List = mongoose.model("List", listSchema);

const item1 = new Item({
  name: "Welcome to your todolist!"
});
const item2 = new Item({
  name: "Hit the + button to add a new item."
});
const item3 = new Item({
  name: "<-- Hit this to delete an item"
});

const defaultItems = [item1, item2, item3];


app.get("/", function(req, res) {

  Item.find(function(err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved defult items to DB.");
          res.redirect("/");
        }
      });
    } else {
      res.render("list", {
        listTitle: "24 november 2021",
        newListItems: foundItems
      });
    }
  });



});

app.post("/", function(req, res) {

  const itemName = req.body.newItem;
  const newItem = new Item({
    name: itemName
  });
  newItem.save();
  res.redirect("/");

});

app.post("/delete",function(req,res){
  const deleteItem = req.body.checkbox;
  Item.findByIdAndRemove(deleteItem,function(err){
    if(!err){
      console.log("Successfully deleted checked item.");
    }
  });
  res.redirect("/");
});
app.get("/:customListName",function(req,res){
  const customListName =req.params.customListName;

  const list = new List({
    name:customListName,
    items: defaultItems
  });

  List.find({name: customListName},function(err,foundList){
      if (foundList.length === 0) {
        const list = new List({
          name:customListName,
          items: defaultItems
        });
        list.save();
        res.redirect("/"+customListName);
      } else {

        // res.render("list", {
        //   listTitle:foundList.name ,
        //   newListItems: foundList.items
        // });
        console.log(foundList.items);
      }
  });



});
app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
