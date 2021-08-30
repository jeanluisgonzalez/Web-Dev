const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

// root
app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/index.html");
});
app.post('/',(req, res) => {

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);
var result = num1 + num2;
//console.log(result);
res.send("The result of the calcualtion is " + result);
});
// bmi calculator
app.get('/bmicalculator',(req,res)=>{
  res.sendFile(__dirname + "/bmicalculator.html");
});
app.post('/bmicalculator',(req,res)=>{
  var h = parseFloat(req.body.h);
  var w = parseFloat(req.body.w);
  var bmi = w/Math.pow(h,2);
  //console.log(bmi);
  res.send("Your BMI is "+ bmi);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
