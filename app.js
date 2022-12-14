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
app.get("/", (req, res) => {
  res.render("list", {
    titleName: date.getDate(),
    newItems: inputs
  });

});

// route for work page
app.get("/work", (req, res) => {
  res.render("list", {
    titleName: "Work",
    newItems: works
  });
});

// route for about page
app.get("/about", (req, res) => {
  res.render("about", {
    titleName: "About"
  });
});

// handle POST request from form
app.post("/", (req, res) =>  {
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
app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running...");
});
