const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
  {
    careseeker: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Sender not found"],
    },
    caretaker: {
      type: mongoose.Types.ObjectId,
      ref: "Profile",
      required: [true, "Caretaker not found"],
    },
    serviceType: {
      type: String,
    },
    serviceOf: {
      type: String,
      enum: ["dog", "cat", "fish"],
    },
    pickUpDate: {
      type: String,
    },
    dropOffDate: {
      type: String,
    },
    status: {
      type: String,
      enum: ["requested", "accepted"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", ServiceSchema);
