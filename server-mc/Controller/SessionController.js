const Gigs = require("../Model/Gigs");
const Session = require("../Model/Sessions");
const User = require("../Model/User");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.CreateSession = async (req, res) => {
  try {
    const { gigId } = req.body;
    await new Session(req.body).save();
    const gig = await Gigs.findById(gigId);
    gig.status = "progress";
    await gig.save();
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
exports.getSessionByUserId = async (req, res) => {
  try {
    const sessions = await Session.find({
      $or: [{ studentId: req.params.id }, { consultantId: req.params.id }],
    });

    res.status(201).json(sessions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

exports.makePayment = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item?.title || "session",
            },
            unit_amount: item?.price * 100,
          },
          quantity: item?.quantity,
        };
      }),
      mode: "payment",
      success_url: process.env.clientUrl + "/student",
      cancel_url: process.env.clientUrl + "/student/cancel",
    });
    req.body.paymentId = session.id;
    // await new session(req.body).save();
    res.json({ id: session.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
