const Card = require("../Model/PaymentCard");

exports.CreateCard = async (req, res) => {
  try {
    await new Card(req.body).save();
    res.status(201).json("Card created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.updateCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      res.status(404).json({ message: "invalid Card id" });
    }
    await Card.findByIdAndUpdate(req.params.id);
    res.status(201).json("Card updated");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.deleteCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "invalid Card id" });
    }
    await Card.findByIdAndDelete(req.params.id);
    res.status(201).json("Card deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getOneCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    res.status(201).json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
exports.getAllCards = async (req, res) => {
  try {
    const card = await Card.find();
    res.status(201).json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

exports.getCardsByUserId = async (req, res) => {
  try {
    const card = await Card.find({ userId: req.params.id });
    res.status(201).json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
