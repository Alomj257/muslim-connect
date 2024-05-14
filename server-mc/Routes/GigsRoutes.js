const {
  CreateGigs,
  updateGigs,
  deleteGigs,
  getOneGigs,
  getAllGigss,
  getAllGigsByUserId,
  filterGigs,
} = require("../Controller/GigsController");
const uploadArrayImages = require("../Middleware/uploadArrayImages");
const reviewRoute = require("./GigsReviewRoute");

const GigsRoutes = require("express").Router();

GigsRoutes.post("/", uploadArrayImages("./Public/GigsFiles"), CreateGigs);
GigsRoutes.put("/:id", updateGigs);
GigsRoutes.delete("/:id", deleteGigs);
GigsRoutes.get("/:id", getOneGigs);
GigsRoutes.get("/", getAllGigss);
GigsRoutes.get("/user/:id", getAllGigsByUserId);
GigsRoutes.get("/filter", filterGigs);
GigsRoutes.use("/user/review", reviewRoute);

module.exports = GigsRoutes;
