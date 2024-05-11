const Gigs = require("../Model/Gigs");

exports.CreateGigs = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);
    await new Gigs(req.body);
    res.status(201).json("Gigs created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.updateGigs = async (req, res) => {
  try {
    const gigs = await Gigs.findById(req.params.id);
    if (!gigs) {
      res.status(404).json({ message: "invalid Gigs id" });
    }
    await Gigs.findByIdAndUpdate(req.params.id);
    res.status(201).json("Gigs updated");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.deleteGigs = async (req, res) => {
  try {
    const gigs = await Gigs.findById(req.params.id);
    if (!gigs) {
      res.status(404).json({ message: "invalid Gigs id" });
    }
    await Gigs.findByIdAndDelete(req.params.id);
    res.status(201).json("Gigs deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getOneGigs = async (req, res) => {
  try {
    const gigs = await Gigs.findById(req.params.id);
    res.status(201).json(gigs);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getAllGigss = async (req, res) => {
  try {
    const gigs = await Gigs.find();
    res.status(201).json(gigs);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
