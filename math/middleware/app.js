const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Require Url:", req.url);
  next();
});
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/login", (req, res) => {
  res.send("login");
});

app.listen(4000, () => {
  console.log("server is running reviews on ");
});
