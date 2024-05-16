import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";
import { useUpdateCardMutation } from "../../../ApiService/CardSlice/CardSlice";

const UpdateCard = ({ onAdd, card, setIsUpdate }) => {
  return (
    <div
      className="w-100"
      style={{
        marginTop: "10%",
        padding: "3% 5% 3% 5%",
        display: "flex",
      }}
    >
      <div
        className="w-100"
        style={{
          padding: "0 5% 0 5%",
        }}
      >
        <CardDetails onAdd={onAdd} oldCard={card} setIsUpdate={setIsUpdate} />
      </div>
    </div>
  );
};

export default UpdateCard;

const CardDetails = ({ onAdd, oldCard, setIsUpdate }) => {
  const [card, setCard] = useState(oldCard);
  const [auth] = useAuth();
  const [createCard, { isError, isLoading, error, isSuccess }] =
    useUpdateCardMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!card?.saveCard) {
      setIsUpdate(false);
      return;
    }
    card.userId = auth?.user?._id;
    try {
      const { data } = await createCard(card);
      onAdd();
      if (isError) {
        return toast.error(error?.data?.message || error?.data);
      }
      if (isSuccess) {
        return toast.success(data);
      }
      toast.success(data);
    } catch (err) {
      console.log(err);
      toast.error(error);
    }
    setIsUpdate(false);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div
          style={{
            marginTop: "30px",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            paddingBottom: "50px",
          }}
        >
          <h2>Update Card</h2>

          <div style={{ marginTop: "20px" }}>
            <input
              type="text"
              onChange={handleChange}
              name="cardNumber"
              value={card?.cardNumber}
              placeholder="Card Number"
              style={{
                width: "48%",
                marginRight: "20px",
                padding: "5px 0 5px 15px",
              }}
            />
            <input
              type="text"
              onChange={handleChange}
              value={card?.cardHolderName}
              name="cardHolderName"
              placeholder="Cardholder Name"
              style={{ width: "48%", padding: "5px 0 5px 15px" }}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <select
              onChange={handleChange}
              name="expireMonth"
              style={{
                outline: "none",
                width: "23%",
                padding: "7px 15px 7px 15px",
                color: "gray",
              }}
            >
              {card?.expireMonth && (
                <option value={card?.expireMonth}>{card?.expireMonth}</option>
              )}
              <option value="">MM</option>
              {Array.from({ length: 12 }).map((_, key) => (
                <option value={key + 1}>
                  {key < 9 ? "0" + (key + 1) : key + 1}
                </option>
              ))}
            </select>
            <select
              onChange={handleChange}
              name="expireYear"
              style={{
                outline: "none",
                width: "23%",
                padding: "7px 15px 7px 15px",
                marginLeft: "15px",
                color: "gray",
              }}
            >
              {card?.expireYear && (
                <option value={card?.expireYear}>{card?.expireYear}</option>
              )}
              <option value="">YY</option>
              {Array.from({ length: 20 }).map((_, key) => (
                <option value={key}>{new Date().getFullYear() + key}</option>
              ))}
            </select>

            <input
              onChange={handleChange}
              name="cvv"
              type="password"
              required
              maxLength={3}
              placeholder="CVV"
              style={{
                marginLeft: "20px",
                width: "48%",
                marginRight: "0px",
                padding: "5px 0 5px 15px",
              }}
            />
          </div>

          <input
            type="checkbox"
            id="saveCard"
            name="saveCard"
            onChange={handleChange}
            value={true}
            style={{ marginTop: "20px" }}
          />
          <label
            htmlFor="saveCard"
            style={{ marginLeft: "10px", fontWeight: "400", fontSize: "15px" }}
          >
            Save Card Details
          </label>
        </div>
        <div
          className="gap-2"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
          }}
        >
          <div
            onClick={() => setIsUpdate(false)}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "8px  30px 8px 30px",
              borderRadius: "6px",
              border: "2px solid rgba(124, 83, 153, 1)",
              backgroundColor: "white",
              color: "rgba(124, 83, 153, 1)",
              cursor: "pointer",
            }}
          >
            cancel
          </div>
          <button
            disabled={isLoading}
            type="submit"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "8px  30px 8px 30px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "rgba(124, 83, 153, 1)",
              color: "white",
              cursor: isLoading && "not-allowed",
            }}
          >
            Save & Confirm
          </button>
        </div>
      </form>
    </>
  );
};