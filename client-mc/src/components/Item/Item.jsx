import React from "react";
import "./Item.css";
import cartImg from "../../assets/Student/cartImg.png";
import profileImg from "../../assets/Student/Ellipse 21.png";
import starImg from "../../assets/Student/material-symbols_star.png";
const Item = () => {
  return (
    <div className="card item" style={{ borderRadius: "15px", width: "45%" }}>
      <div class="cart-item">
        <img src={cartImg} alt="Product Image" />
        <div class="cart-item-info">
          <div style={{ marginTop: "15px" }}>
            <img src={profileImg} className="profileImg" style={{ marginRight: "20px" }}/>
            <p
              className="cart-item-price"
              style={{ fontSize: "14px", marginLeft: "-180px" }}
            >
              Ayesha Ali
            </p>
            <p class="cart-item-price">$19.99</p>
          </div>

          <p className="itemDesc">
            I will give consultation on the Financial system in light of Quran
          </p>
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
