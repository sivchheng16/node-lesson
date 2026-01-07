const express = require("express");
const mongoose = require("mongoose");
const Item = require("./models/item");

const app = express();

app.use(express.json());

// Use the MONGODB_URI env var, or replace with your connection string.
const MONGODB_URI =
  process.env.MONGODB_URI || "your-mongodb-connection-string-here";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message || err);
    process.exit(1);
  });

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

// GET /items - list all items
app.get("/items", async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

// POST /items - create a new item
app.post("/items", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "name is required" });

    const item = new Item({ name });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: "Failed to create item" });
  }
});

// DELETE /items/:id - delete an item by id
app.delete("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId format before querying
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid id format' });
    }

    const removed = await Item.findByIdAndDelete(id);
    if (!removed) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted", id: removed._id });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete item" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
