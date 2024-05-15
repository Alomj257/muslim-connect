const AuthRoutes = require("./AuthRoutes");
const CourseRoute = require("./CourseRoute");
const GigsRoutes = require("./GigsRoutes");
const cardRoute = require("./PaymentCardRoutes");
const sessionRoute = require("./SessionRoute");

const Routes = require("express").Router();

Routes.use("/auth", AuthRoutes);
Routes.use("/courses", CourseRoute);
Routes.use("/sessions", sessionRoute);
Routes.use("/gigs", GigsRoutes);
Routes.use("/card", cardRoute);

module.exports = Routes;
