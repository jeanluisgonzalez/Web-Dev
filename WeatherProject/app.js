const express = require("express");
const https = require("https");
const bodyParser = require("body-Parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/index.html")
});
app.post("/",(req,res) => {

  const query = req.body.cityName;
  const apikey ="47cabceb4db4e6beadec40703382edff";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units=metric";

  https.get(url,(response)=>{
    console.log(response.statusCode);
    response.on("data",(data)=>{
    const weatherData = JSON.parse(data);
    const temp = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    console.log(icon);
    const ico_img = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
    res.write("<h1>The weather is currently "+description+"</h1>");
    res.write("<h1>The temperature in "+query+" is " + temp + " degrees Celcius.</h1>");
    res.write("<img src='"+ico_img+"' alt='icon'>");
    res.send();
    });
  });
});




app.listen(3000,()=>{
  console.log("Server is running on port 3000.");
});
