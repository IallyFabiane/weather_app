 //jshint esversion:6
 const express = require('express');
 const app = express();
 const https = require('https');

 app.get("/", function(req, res) {
   const city = "Limoeiro";
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e753e23fb530ad0639c43c4c4b4f2e29&units=metric`;
   https.get(url, function(response) {
      console.log(response.statusCode);
      response.on("data", function(data) {
         const weatherData = JSON.parse(data);
         console.log(weatherData);
         const temp = weatherData.main.temp;
         const descrip = weatherData.weather[0].description;
         const icon = weatherData.weather[0].icon;
         const urlIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
         res.write("<p> Weather: " + descrip + "</p>");
         res.write("<h1>The temperature in " + city + " is: " + temp + " graus Celsius.</h1>");
         res.write(`<img src=${urlIcon}>`);
         res.send();
      })
   })

 })

 app.listen(3000, function() {
    console.log("Server is runing in port 3000")
 })
