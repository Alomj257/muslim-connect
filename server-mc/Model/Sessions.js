const mongoose = require("mongoose");
const SessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
  buyerId: { type: mongoose.Types.ObjectId, ref: "user" },
  startTime: String,
  endTime: String,
  duration: String,
  status: String,
});
const Session = mongoose.model("session", SessionSchema);

module.exports = Session;
