const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    gigsId: { type: mongoose.Types.ObjectId, ref: "user" },
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
    rating: Number,
  },
  { timestamps: true }
);
const GigsReview = mongoose.model("gig-review", reviewSchema);

module.exports = GigsReview;
