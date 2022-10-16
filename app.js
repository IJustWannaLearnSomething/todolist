const express = require('express')
  app = express();
const bodyParser = require('body-parser')
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("public"));
const ejs = require('ejs')
  app.set("view engine", "ejs");
const date = require(__dirname + "/public/js/date.js");

const inputs = ["Wake Up", "Do daily morning routine", "Have Tea"];
const works = [];

// route for home page
app.get("/", function (req, res) {
  const day = date.getDate();
  // Render list.ejs and with the value of current day
  res.render("list", {
    titleName: day,
    newItems: inputs
  });

});

// route for work page
app.get("/work", function (req, res) {
  // Render list.ejs and with the value of work
  res.render("list", {
    titleName: "Work",
    newItems: works
  });
});

// handle POST request from form
app.post("/", function (req, res) {
  const userInputVal = req.body.userInput;

  if(req.body.list === "Work") {
    works.push(userInputVal);
    res.redirect("/work");
  } else {
    inputs.push(userInputVal);
    res.redirect("/");
  }

})


// Listen to connections on port 8080
app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});
