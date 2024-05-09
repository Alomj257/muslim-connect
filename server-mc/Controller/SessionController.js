const Session = require("../Model/Sessions");

exports.CreateSession = async (req, res) => {
  try {
    await new Session(req.body).save();
    res.status(201).json("Session Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.updateSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      res.status(404).json({ message: "invalid session id" });
    }
    await Session.findByIdAndUpdate(req.params.id);
    res.status(201).json("Session update");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      res.status(404).json({ message: "invalid session id" });
    }
    await Session.findByIdAndDelete(req.params.id);
    res.status(201).json("Session deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getOneSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    res.status(201).json(session);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.status(201).json(sessions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
