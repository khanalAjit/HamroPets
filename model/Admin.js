const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: [true, "Please provide the user id of the new admin"],
    },
    name: {
      type: String,
      required: [true, "Please provide the name"],
    },
    username: {
      type: String,
      required: [true, "Please provide the username"],
    },
    email: {
      type: String,
      required: [true, "Please provide the email."],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("admin", AdminSchema);
