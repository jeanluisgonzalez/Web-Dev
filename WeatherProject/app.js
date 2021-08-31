const express = require("express");
const https = require("https");
const app = express();

app.get("/",(req,res)=>{
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=47cabceb4db4e6beadec40703382edff&units=metric";

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
    res.write("<h1>The temperature in London is " + temp + " degrees Celcius.</h1>");
    res.write("<img src='"+ico_img+"' alt='icon'>");
    res.send();
    });
  });
  //res.send("Sever is up and running");
});

app.listen(3000,()=>{
  console.log("Server is running on port 3000.");
});
