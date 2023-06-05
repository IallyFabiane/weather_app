 //jshint esversion:6
 const { log } = require('console');
const express = require('express');
 const app = express();
 const https = require('https');

 app.get("/", function(req, res) {
   const url = "https://api.openweathermap.org/data/2.5/weather?q=Recife&appid=e753e23fb530ad0639c43c4c4b4f2e29&units=metric";
   https.get(url, function(response) {
      console.log(response.statusCode);
      response.on("data", function(data) {
         const weatherData = JSON.parse(data);
         console.log(weatherData);
         const temp = weatherData.main.temp;
         const descrip = weatherData.weather[0].description;
      })
   })
   res.send("Server is up and running")
 })

 app.listen(3000, function() {
    console.log("Server is runing in port 3000")
 })
