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

mongoose.connect("mongodb+srv://admin:Adm1nc0ntr0l!@cluster0.kt3pp.mongodb.net/todolistDB");

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

app.get('/favicon.ico', (req, res) => res.status(204));
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
        listTitle: "Today",
        newListItems: foundItems
      });
    }
  });



});

app.post("/", function(req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const newItem = new Item({
    name: itemName
  });

  if (listName=== "Today") {
    newItem.save();
    res.redirect("/");
  }else {
    List.findOne({name:listName},function(err,foundList){
      if(!err){
        if(!foundList){
          console.log("no list founded");
        }else{
          foundList.items.push(newItem);
          foundList.save();
          res.redirect("/"+listName);
        }
      }

    });

  }


});

app.post("/delete",function(req,res){
  const deleteItem = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(deleteItem,function(err){
      if(!err){
        console.log("Successfully deleted checked item.");
      }
    });
    res.redirect("/");
  } else {
    List.findOneAndUpdate({ name: listName },{$pull: {items:{_id:deleteItem}}},function(err,foundList){
      if (!err) {
        res.redirect("/"+listName);
      }
    });

  }


});

app.get("/:customListName",function(req,res){
  const customListName =_.capitalize(req.params.customListName);
  List.findOne({name: customListName},function(err,foundList){
    if (!err) {
      if (!foundList) {
        const list = new List({
          name:customListName,
          items: defaultItems
        });

        list.save(function(err){
          if (!err) {
            console.log("save:"+customListName);
            res.redirect("/"+customListName);
          }
        });

      }else{
        res.render("list", {
            listTitle:foundList.name,
            newListItems: foundList.items
        });
      }
    }

  });

});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully");
});
