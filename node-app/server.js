require("dotenv").config();
const express = require("express ");
const mongoose = require("mongoose");

const app = express();

//  Pasties JSON bodies
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected Successfully");
  })
  .catch((err) => {
    console.error("MosgoBD connect error:", err);
  });

// Routes

app.use("/api/users", require("./route/userRoute"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: $ {PORT}`);
});
