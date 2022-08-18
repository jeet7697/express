const mongoose = require("mongoose");
// schema  title desc field
const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      Required: true,
    },
    email: {
      type: String,
      Required: true,
    },
    phone: {
      type: Number,
      Required: true,
    },
    message: {
      type: String,
      Required: true,
    },
  },
  { timestamps: true }
);
//create model
const ContactModel = mongoose.model("contact_coll", ContactSchema); // blog is a schema name

module.exports = ContactModel;
// inside blog schema we r creating di