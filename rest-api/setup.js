const express = require("express");

const app = express();

//allow json body
app.use(express.json());

app.listen(3000, () => {
  console.log("server running port 3000");
});
