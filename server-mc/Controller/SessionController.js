const Gigs = require("../Model/Gigs");
const Session = require("../Model/Sessions");
const User = require("../Model/User");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

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

exports.makePayment = async (req, res) => {
  const { consultantId, studentId, gigId, startTime, endTime, duration } =
    req.body;
  try {
    console.log(req.body.items);
    const student = await User.findById(studentId);
    const consultant = await User.findById(consultantId);
    const gig = await User.findById(gigId);
    if (!student || !consultant) {
      return res.status(404).json({ message: "user id not found" });
    }
    if (!gig) {
      return res.status(404).json({ message: "Gigs id not found" });
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item?.title,
              //   description: `Consumer: ${
              //     consumer?.firstname + " " + consumer?.lastname
              //   } to Tradeperson: ${
              //     tradeperson?.firstname + " " + tradeperson?.lastname
              //   } for milestone ${milestone}`,
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
    await new session(req.body).save();
    res.json({ id: session.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
