const mongoose = require("mongoose");

const userSchema = new mongose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is require"],
      trim: true,
      minlenght: 2,
    },
    email: {
      type: true,
      require: [true, "Email is require"],
      unique: true,
      lovercase: true,
      trim: true,
    },
    age: {
      type: number,
      min: 0,
    },
    createAT: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, //automatically adds UpdatedAt
  }
);

moudle.export = mongose.model("User", userSchema);
te