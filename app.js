const express = require('express')
  app = express();
const bodyParser = require('body-parser')
  app.use(bodyParser.urlencoded({ extended: true }));
const ejs = require('ejs')
  app.set("view engine", "ejs");

// route for index page
app.get("/", function (req, res) {
  res.render("index");
});

// Listen to connections on port 8080
app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});
