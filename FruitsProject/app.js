const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

const dbName = 'fruitsDB';

const client = new MongoClient(uri);

// client.connect(function(err){
//   assert.equal(null,err);
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   client.close();
// })



async function insertDocuments() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const fruits = database.collection("fruits");
    // create a document to insert
    const docs = [
      {
        name: "Apple",
        score: 8,
        review: "Great fruit"
      },
      {
        name: "Orange",
        score: 6,
        review: "Kinda sour"
      },
      {
        name: "Banana",
        score: 8,
        review: "Great stuff!"
      }
    ];
    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    const result = await fruits.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
insertDocuments().catch(console.dir);
