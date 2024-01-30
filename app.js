const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const url = "https://restcountries.com/v3.1/all";
  https.get(url, function (response, request) {
    console.log(response);
  });
  res.send("Server works properly");
});

app.listen(3000, function () {
  console.log("Server is running right now");
});
