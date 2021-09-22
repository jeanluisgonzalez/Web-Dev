const express = require("express");
const https = require("https");
const bodyParser = require("body-Parser");
const request = require("request");

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
  const list = "0d09891d17";
  const data = {
    members: [
      {
        email_address:email,
        status:"subscribed",
        merge_fields: {
          FNAME: fistName,
          LNAME: lastName,
        }
      }
    ]
  }
  const jsonData = JSON.stringify(data);
  const url ="https://us5.api.mailchimp.com/3.0/lists/"+list
  const options = {
    method: "POST",
    auth: "jgonzaleza:b2ba8081c2f545f8c998c0f0f2f00a3f-us5"
  }

  const jsonRequest =  https.request(url, options, (response)=>{
    response.on("data",(data)=>{
      //console.log(JSON.parse(data));
    });
    console.log(response.statusCode);
    if(response.statusCode === 200){

      res.sendFile(__dirname+"/failure.html");
    }else {
        res.sendFile(__dirname+"/success.html");
    }

  });
  jsonRequest.write(jsonData);
  jsonRequest.end();

  //res.sendFile(__dirname+"/signup.html");
});
app.post("/failure",(req,res)=>{
  res.redirect(__dirname+"/signup.html");
});
app.listen(3000,()=>{
  console.log("Server is running on port 3000");
});

//API Key
// b2ba8081c2f545f8c998c0f0f2f00a3f-us5

//list
// 0d09891d17
