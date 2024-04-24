import React from "react";
import DownArrow from "../../../assets/Student/DownArrow";
import FilterSvg from "../../../assets/Student/FilterSvg";
import SearchSvg from "../../../assets/Student/SearchSvg";
import DashNav from "../../DashNav/DashNav";
import SubNav from "../../SubNav/SubNav";
import cartImg from "../../../assets/Student/cartImg.png";
import profileImg from "../../../assets/Student/Ellipse 21.png";
import starImg from "../../../assets/Student/material-symbols_star.png";

function ConsultantList() {
  return (
    <div>
      <div>
        <DashNav navData={navData} type="student" />
        <SubNav />
      </div>
      <div style={{ marginTop: "12%" }}>
        <div
          style={{
            display: "flex",
            padding: "0 5% 0 5%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // width: "200px",
                border: "1px solid rgba(208, 213, 221, 0.5)",
                padding: "0px 30px 0px 30px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              {" "}
              <FilterSvg />{" "}
              <span style={{ fontWeight: "400", fontSize: "22px" }}>
                All Filters
              </span>{" "}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // width: "200px",
                border: "1px solid rgba(208, 213, 221, 0.5)",
                padding: "0px 50px 0px 50px",
                borderRadius: "8px",
              }}
            >
              <span style={{ fontWeight: "400", fontSize: "22px" }}>
                Consultations
              </span>{" "}
              <DownArrow />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(208, 213, 221, 0.5)",
              borderRadius: "8px",
              padding: "10px",
              width: "38%",
            }}
          >
            <input
              type="text"
              placeholder="Rechercher un service"
              style={{
                border: "none",
                outline: "none",
                width: "90%",
                height: "80%",
              }}
            />
            <SearchSvg />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "0 3% 0 3%",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
          className="d-flex"
        >
          <ConsultantCard />
          <ConsultantCard />
          <ConsultantCard />
          <ConsultantCard />
          <ConsultantCard />
        </div>
      </div>
    </div>
  );
}

export default ConsultantList;
const navData = [
  { name: "Dashboard", path: "/student" },
  {
    name: "Learning",
    child: [
      { name: "loyalty Program", path: "/loyalty" },
      { name: "Subscription", path: "/subscription" },
      { name: "Sessions", path: "/sessions" },
    ],
  },
  { name: "loyalty Program", path: "/loyalty" },
  { name: "Subscription", path: "/subscription" },
  { name: "Sessions", path: "/sessions" },
];

const ConsultantCard = () => {
  return (
    <div className="card item" style={{ borderRadius: "15px", width: "29.3%" }}>
      <div class="cart-item">
        <img src={cartImg} alt="Product Image" />
        <div class="cart-item-info">
          <div style={{ marginTop: "20px" }}>
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
            <div>
              <img src={starImg} alt="Star" className="star" />
              <span
                className="rating-count"
                style={{ fontSize: "16px", fontWeight: "600" }}
              >
                5{" "}
                <span
                  style={{ fontWeight: "400", color: "rgba(85, 85, 85, 1)" }}
                >
                  (28)
                </span>
              </span>
            </div>
            <span
              style={{
                fontWeight: "400",
                fontSize: "14px",
                color: "rgba(143, 143, 143, 1)",
              }}
            >
              Level{" "}
              <span
                style={{ fontWeight: "500", fontSize: "18px", color: "black" }}
              >
                Expart
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
