const express = require("express");
const app = express();

app.use(express.json());

//get data
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "chheng" },
    { id: 2, name: "coke" },
  ]);
});

//post data
app.post("/users", (req, res) => {
  const user = req.body;
  res.json({
    message: "User create",
    user: user,
  });
});
app.listen(4000, () => {
  console.log("server is running on port 4000");
});
