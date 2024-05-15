const {
  CreateCard,
  updateCard,
  deleteCard,
  getOneCard,
  getCardsByUserId,
  getAllCards,
} = require("../Controller/PaymentController");

const cardRoute = require("express").Router();

cardRoute.post("/", CreateCard);
cardRoute.put("/:id", updateCard);
cardRoute.delete("/:id", deleteCard);
cardRoute.get("/:id", getOneCard);
cardRoute.get("/user/:id", getCardsByUserId);
cardRoute.get("/", getAllCards);

module.exports = cardRoute;
