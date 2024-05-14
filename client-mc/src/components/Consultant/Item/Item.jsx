import React from "react";
import "./Item.css";
import cartImg from "../../../assets/Student/cartImg.png";
import profileImg from "../../../assets/Student/Ellipse 21.png";
import starImg from "../../../assets/Student/material-symbols_star.png";
import { useNavigate } from "react-router-dom";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { server } from "../../../ApiService/Axios";
const Item = ({ gig }) => {
  const navigate = useNavigate();
  const { data } = useGetAuthByIdQuery(gig?.userId);
  console.log(gig);
  return (
    <div
      onClick={() => navigate("/consultant/gigsview")}
      className="card item"
      style={{ borderRadius: "15px", width: "45%", cursor: "pointer" }}
    >
      <div class="cart-item">
        {gig?.gigsImages[0]?.file && (
          <img src={server + gig?.gigsImages[0]?.file} alt="Product Images" />
        )}
        <div class="cart-item-info mt-auto">
          <div style={{ marginTop: "15px" }}>
            <img
              src={profileImg}
              className="profileImg"
              alt=""
              style={{ marginRight: "20px" }}
            />
            <p
              className="cart-item-price text-capitalize"
              style={{ fontSize: "14px", marginLeft: "-180px" }}
            >
              {data?.firstname} {data?.lastname}
            </p>
            <p class="cart-item-price">{gig?.price}</p>
          </div>

          <p className="itemDesc mt-2">{gig?.title}</p>
          <div className="rating">
            <img src={starImg} alt="Star" className="star" />
            {/* <span className="rating-count">(2 reviews)</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
