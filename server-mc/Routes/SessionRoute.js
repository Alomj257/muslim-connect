const {
  CreateSession,
  getOneSession,
  updateSession,
  deleteSession,
  getAllSessions,
  makePayment,
} = require("../Controller/SessionController");

const sessionRoute = require("express").Router();

sessionRoute.post("/", CreateSession);
sessionRoute.put("/:id", updateSession);
sessionRoute.delete("/:id", deleteSession);
sessionRoute.get("/:id", getOneSession);
sessionRoute.get("/", getAllSessions);
sessionRoute.post("/gig/session/", makePayment);

module.exports = sessionRoute;
