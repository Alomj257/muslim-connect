const AuthRoutes = require("./AuthRoutes");
const CourseRoute = require("./CourseRoute");
const GigsRoutes = require("./GigsRoutes");
const sessionRoute = require("./SessionRoute");

const Routes = require("express").Router();

Routes.use("/auth", AuthRoutes);
Routes.use("/courses", CourseRoute);
Routes.use("/sessions", sessionRoute);
Routes.use("/gigs", GigsRoutes);

module.exports = Routes;
