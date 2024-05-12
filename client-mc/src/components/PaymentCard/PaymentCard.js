import React from "react";
import "./PaymentCard.css";
import ArrowSvg from "../../assets/PriceCard/ArrowSvg";
import { useNavigate } from "react-router-dom";

const PaymentCard = ({ head, body, btn, url }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container_main" style={{ marginTop: "15%" }}>
        <div className="topheadder">
          <div
            className="topheadder_payment_card"
            style={{
              padding: "6%",
              color: "rgba(0, 0, 0, 1)",
              fontWeight: "500",
              fontSize: "30px",
            }}
          >
            {head}
          </div>
        </div>
        <div className="box_3" style={{ padding: "7.5%" }}>
          <div>{body}</div>
          <div
            className="submit_btn"
            style={{ width: "106%", marginTop: "4%" }}
          >
            <button
              className="button_book"
              onClick={() => navigate(url)}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {btn} <ArrowSvg />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
