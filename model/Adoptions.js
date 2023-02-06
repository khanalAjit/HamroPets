const mongoose = require("mongoose");

const AdoptionSchema = new mongoose.Schema(
  {
    postedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Poster id required"],
    },
    username: {
      type: String,
      required: [true, "username required"],
    },
    posterImageUrl: {
      type: String,
      required: [true, "poster image url missing"],
    },
    description: {
      type: String,
      required: [true, "Description of the post missing."],
    },
    number: {
      type: Number,
      required: [true, "contact number required"],
    },
    postImages: {
      type: Array,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Adoption", AdoptionSchema);
