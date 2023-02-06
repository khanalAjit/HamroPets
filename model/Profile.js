const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    profileOf: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please Provide User"],
    },
    username: {
      type: String,
      required: [true, "Please provide your usernname"],
    },
    profileImageUrl: {
      type: String,
      default: "http://via.placeholder.com/300",
    },
    email: {
      type: String,
      required: [true, "Please enter your registered email"],
    },
    name: {
      type: String,
      required: [true, "Please provide your name"],
    },
    bio: {
      type: String,
    },
    speciality: {
      type: String,
      enum: ["dog", "cat", "fish"],
      default: "dog",
    },
    rate: {
      type: Number,
      default: 5,
    },
    contact: {
      type: Number,
      required: [true, "Please provide your phone number"],
    },
    location: {
      type: String,
      required: [true, "Specify your location"],
    },
    verificationStatus: {
      type: String,
      enum: ["unknown", "pending", "verified"],
      default: "unknown",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
