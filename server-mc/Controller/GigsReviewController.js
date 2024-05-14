const GigsReview = require("../Model/GigsReview");

exports.CreateReview = async (req, res) => {
  try {
    await new GigsReview(req.body).save();
    res.status(201).json("Review created");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.updateReview = async (req, res) => {
  try {
    const review = await GigsReview.findById(req.params.id);
    if (!review) {
      res.status(404).json({ message: "invalid Review id" });
    }
    await GigsReview.findByIdAndUpdate(req.params.id);
    res.status(201).json("Review updated");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.deleteReview = async (req, res) => {
  try {
    const review = await GigsReview.findById(req.params.id);
    if (!review) {
      res.status(404).json({ message: "invalid Review id" });
    }
    await GigsReview.findByIdAndDelete(req.params.id);
    res.status(201).json("Review deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getOneReview = async (req, res) => {
  try {
    const review = await GigsReview.findById(req.params.id);
    res.status(201).json(review);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getAllReviews = async (req, res) => {
  try {
    const Reviews = await GigsReview.find();
    res.status(201).json(Reviews);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.getAllReviewByGigId = async (req, res) => {
  try {
    const Reviews = await GigsReview.find({ gigsId: req.params.id });
    res.status(201).json(Reviews);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getAllReviewByUserId = async (req, res) => {
  try {
    const Reviews = await GigsReview.find({ gigsId: req.params.id });
    res.status(201).json(Reviews);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
