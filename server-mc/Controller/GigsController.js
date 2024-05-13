const Gigs = require("../Model/Gigs");

exports.CreateGigs = async (req, res) => {
  try {
    let { gigsImages, keyword, ...other } = req.body;
    // console.log(req.body);
    console.log(req.files);
    let images = [];
    for (let i = 0; i < req?.files?.length; i++) {
      images?.push({
        file: "/gigs/image/" + req?.files[i]?.originalname,
        type: req?.files[i]?.mimetype,
      });
    }
    req.body = other;
    req.body.gigsImages = images;
    req.body.keyword = keyword ? keyword?.split(",") : [];
    console.log(req?.body?.keyword);
    await new Gigs(req.body).save();
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

exports.getAllGigsByUserId = async (req, res) => {
  try {
    const gigs = await Gigs.find({ userId: req.params.id });
    res.status(200).json(gigs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
