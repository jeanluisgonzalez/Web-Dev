const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true,"Please check your date entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true,"Please check your date entry, no name specified!"]
  },
  age: {
    type: Number,
    required: [true]
  },
  favoriteFruit: fruitSchema
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
  review: "Pretty good"
});
const banana = new Fruit({
  name: "banana",
  rating: 7,
  review: "Pretty good"
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review:"Great fruit"
});

const mango = new Fruit({
  name: "Mango",
  rating: 6,
  review: "Decent fruit"
});

const person = new Person ({
  name:"John",
  age: 37
});
// person.save(function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved");
//   }
// });
// Fruit.insertMany([apple,kiwi,orange,banana,mango,pineapple],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
//   mongoose.connection.close()
// })

// mango.save(function(err){
//   if (err) {
//     console.log(err);
//   }else {
//     console.log("Save Successfully");
//   }
// });

Fruit.find(function(err,fruits){

  if(err){
    console.log(err);
  }else{
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

Person.find(function(err,people){
  if(err){
    console.log(err);
  }else{
    people.forEach(function(person){
      console.log(person.name);
    });
  }
  mongoose.connection.close();
});

// Person.updateOne({name: "John"},{favoriteFruit: fruit}, function(err){
//   if (err) {
//     console.log(err);
//   }else {
//     console.log("Successfully updated the document");
//   }
// });


// Fruit.deleteOne({_id:"619bf0040a0c2da5e3c403af"},function(err){
//   if (err) {
//     console.log(err);
//   }else {
//     console.log("Successfully deleted the document");
//   }
//   mongoose.connection.close();
// });

// Fruit.deleteMany({name:"Jhon"},function(err){
//   if (err) {
//     console.log(err);
//   }else {
//     console.log("Successfully deleted all documents");
//   }
//   mongoose.connection.close();
// });



// mongoose.connection.close();
// banana.save();

// insertDocuments().catch(console.dir);
