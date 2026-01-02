const express = require("express");
const app = express();

app.use(express.json());

// 🧠 In-memory storage
const users = [];

/**
 * GET all users
 */
app.get("/users", (req, res) => {
  res.json(users);
});

/**
 * POST create user
 */
app.post("/users", (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({
      message: "id and name are required",
    });
  }

  if (users.find((u) => u.id === id)) {
    return res.status(409).json({
      message: "User with this id already exists",
    });
  }

  users.push({ id, name });

  res.status(201).json({
    message: "User created",
    user: { id, name },
  });
});

/**
 * PUT update user by id
 */
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  if (!name) {
    return res.status(400).json({
      message: "name is required",
    });
  }

  user.name = name;

  res.json({
    message: "User updated",
    user,
  });
});

/**
 * DELETE user by id
 */
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const deletedUser = users.splice(index, 1);

  res.json({
    message: "User deleted",
    user: deletedUser[0],
  });
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
