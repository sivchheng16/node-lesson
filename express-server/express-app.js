const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  // res.send("<p>welwcome to home page</p>");

  res.sendFile(path.join(__dirname, "../views", "index.html"));
});
app.get("/about", (req, res) => {
  // res.send("<p>welwcome to about page</p>");

  res.sendFile(path.join(__dirname, "../views", "about.html"));
});

//Rederict
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
 