const AuthRoutes = require("./AuthRoutes");
const CourseRoute = require("./CourseRoute");
const sessionRoute = require("./SessionRoute");

const Routes = require("express").Router();

Routes.use("/auth", AuthRoutes);
Routes.use("/courses", CourseRoute);
Routes.use("/sessions", sessionRoute);

module.exports = Routes;
