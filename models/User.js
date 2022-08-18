const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      Required: true,
    },
    email: {
      type: String,
      Required: true,
      unique:true.valueOf,
    },
    password: {
      type: String,
      Required: true,
    },
    
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel;
