const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Fruit = mongoose.model("Fruit",fruitSchema);
const Person = mongoose.model("Person",personSchema);

const apple = new Fruit ({
  name:"Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 8,
  review: "Pretty tasty"
});
const orange = new Fruit({
  name: "Orange",
  rating: 9,
  review: "Pretty good "
});
const banana = new Fruit({
  name: "Banana",
  rating: 9,
  review: "nice fruit"
});

const person = new Person ({
  name:"Jean",
  Age: 25
});


// Fruit.insertMany([apple,kiwi,orange,banana],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// })

// person.save(function(){
//    mongoose.connection.close();
// });

Fruit.find(function(err,fruits){

  if(err){
    console.log(err);
  }else{
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
mongoose.connection.close();
});




// mongoose.connection.close();
// fruit.save();

// insertDocuments().catch(console.dir);
