import React from "react";
import "./Item.css";
import cartImg from "../../assets/Student/cartImg.png";
import profileImg from "../../assets/Student/Ellipse 21.png";
import starImg from "../../assets/Student/material-symbols_star.png";
import { useNavigate } from "react-router-dom";
import { useGetAuthByIdQuery } from "../../ApiService/AuthSlice/AuthSlice";
import { server } from "../../ApiService/Axios";
const Item = ({ data, index }) => {
  const navigate = useNavigate();
  const user = useGetAuthByIdQuery(data?.userId);
  return (
    <div
      key={index}
      onClick={() => navigate("/student/gigsview", { state: data })}
      className="card item"
      style={{ borderRadius: "15px", width: "45%", cursor: "pointer" }}
    >
      <div class="cart-item">
        {(!data?.gigsImages || !data?.gigsImages[0]?.file) && (
          <img src={cartImg} alt="Product Images" />
        )}
        {data?.gigsImages && data?.gigsImages[0]?.file && (
          <img src={server + data?.gigsImages[0]?.file} alt="Product Images" />
        )}
        <div class="cart-item-info">
          <div style={{ marginTop: "15px" }}>
            <img
              src={profileImg}
              className="profileImg"
              alt=""
              style={{ marginRight: "20px" }}
            />
            <p
              className="cart-item-price"
              style={{ fontSize: "14px", marginLeft: "-180px" }}
            >
              {user?.data?.firstname} {user?.data?.lastname}
            </p>
            <p class="cart-item-price">{data?.price}</p>
          </div>

          <p className="itemDesc">{data?.title}</p>
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
