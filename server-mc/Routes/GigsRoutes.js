const {
  CreateGigs,
  updateGigs,
  deleteGigs,
  getOneGigs,
  getAllGigss,
} = require("../Controller/GigsController");
const uploadSingleVideoFile = require("../Middleware/UploadVideo");
const uploadArrayImages = require("../Middleware/uploadArrayImages");
const uploadArrayFiles = require("../Middleware/uploadArrayImages");

const GigsRoutes = require("express").Router();

GigsRoutes.post("/", uploadArrayImages("./Public/GigsFiles"), CreateGigs);
GigsRoutes.put("/:id", updateGigs);
GigsRoutes.delete("/:id", deleteGigs);
GigsRoutes.get("/:id", getOneGigs);
GigsRoutes.get("/", getAllGigss);

module.exports = GigsRoutes;
