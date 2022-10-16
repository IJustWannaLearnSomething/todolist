const express = require('express')
  app = express();
const bodyParser = require('body-parser')
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("public"));
const ejs = require('ejs')
  app.set("view engine", "ejs");

let inputs = ["Wake Up", "Do daily morning routine", "Have Tea"];

// route for index page
app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  }

  // logic for getting Day name
  let day = today.toLocaleDateString("en-US", options);

  // Render list.ejs and with the value of current day
  res.render("list", {
    kindOfDay: day,
    newItems: inputs
  });
});

// handle POST request from form
app.post("/", function (req, res) {
  let userInputVal = req.body.userInput;

  inputs.push(userInputVal)
  res.redirect("/")
})

// Listen to connections on port 8080
app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});
