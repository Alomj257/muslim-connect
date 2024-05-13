const {
  CreateGigs,
  updateGigs,
  deleteGigs,
  getOneGigs,
  getAllGigss,
  getAllGigsByUserId,
} = require("../Controller/GigsController");
const uploadArrayImages = require("../Middleware/uploadArrayImages");

const GigsRoutes = require("express").Router();

GigsRoutes.post("/", uploadArrayImages("./Public/GigsFiles"), CreateGigs);
GigsRoutes.put("/:id", updateGigs);
GigsRoutes.delete("/:id", deleteGigs);
GigsRoutes.get("/:id", getOneGigs);
GigsRoutes.get("/", getAllGigss);
GigsRoutes.get("/user/:id", getAllGigsByUserId);

module.exports = GigsRoutes;
