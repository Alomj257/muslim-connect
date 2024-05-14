const express = require("express");
const cors = require("cors");
const Routes = require("../Routes/AllRoutes");
const path = require("path");
const app = express();
// Load environment variables from .env file
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

app.use(
  "/profile/pic",
  express.static(path.join(__dirname, "../public/Profile"))
);
app.use(
  "/gigs/image",
  express.static(path.join(__dirname, "../public/GigsFiles"))
);

// Routes
app.use("/api", Routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal server error");
});

module.exports = app;
