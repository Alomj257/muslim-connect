import React from "react";
import DashNav from "../../DashNav/DashNav";
import ProfileAndPrice from "../../ProfileAndPrice/ProfileAndPrice";
import SubNav from "../../SubNav/SubNav";
import Tabs from "../../Tabs/Tabs";
import Avatar from "../../../assets/GigsView/Avatar.png";
import PaymentCard from "../../PaymentCard/PaymentCard";

function AddCard() {
  let arr = [
    "Learning",
    "Consultation",
    "Book Consultation",
    "Payment",
    "Add Card",
  ];
  return (
    <div>
      <DashNav navData={navData} />
      <SubNav />
      <div
        style={{
          marginTop: "10%",
          padding: "3% 5% 3% 5%",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "65%",
            padding: "0 5% 0 5%",
          }}
        >
          <Tabs arr={arr} />
          <h2
            style={{
              fontWeight: "500",
              fontSize: "26px",
              lineHeight: "42px",
              marginTop: "20px",
            }}
          >
            I will give consultation on the Financial system in light of Quran
          </h2>
          <ProfileAndPrice
            img={Avatar}
            name="Usman Ahmad"
            star={"5.0"}
            people="28"
            price={"40.00"}
          />
          <CardDetails />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "30px",
            }}
          >
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "8px  30px 8px 30px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "rgba(124, 83, 153, 1)",
                color: "white",
              }}
            >
              Save & Confirm
            </button>
          </div>
        </div>
        <div style={{ width: "35%" }}>
          <PaymentCard
            head={"Payment"}
            body={<PaymentInfo />}
            btn={"Check out"}
          />
        </div>
      </div>
    </div>
  );
}

export default AddCard;

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

const PaymentInfo = () => {
  return (
    <div style={{ paddingBottom: "30%" }}>
      <div
        style={{
          fontWeight: "500",
          fontSize: "18px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          padding: "20px",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Date</p>
          <p>24th Jan, 2024</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Time</p>
          <p>5:30 PM</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Duration</p>
          <p>30 mins</p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <span
          style={{
            fontWeight: "500",
            fontSize: "22px",
            color: "rgba(91, 91, 91, 1)",
          }}
        >
          Total:
          <span
            style={{
              fontWeight: "600",
              fontSize: "22px",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            $40
          </span>
        </span>
      </div>
    </div>
  );
};

const CardDetails = () => {
  return (
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
      <h2>Add a New Card</h2>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Card Number"
          style={{
            width: "48%",
            marginRight: "20px",
            padding: "5px 0 5px 15px",
          }}
        />
        <input
          type="text"
          placeholder="Cardholder Name"
          style={{ width: "48%", padding: "5px 0 5px 15px" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <select
          style={{
            outline: "none",
            width: "23%",
            padding: "7px 15px 7px 15px",
            color: "gray",
          }}
        >
          <option value="">MM</option>
          <option value="">01</option>
          <option value="">02</option>
        </select>
        <select
          style={{
            outline: "none",
            width: "23%",
            padding: "7px 15px 7px 15px",
            marginLeft: "15px",
            color: "gray",
          }}
        >
          <option value="">YY</option>
          <option value="">01</option>
          <option value="">02</option>
        </select>

        <input
          type="text"
          placeholder="CVV"
          style={{
            marginLeft: "20px",
            width: "48%",
            marginRight: "0px",
            padding: "5px 0 5px 15px",
          }}
        />
      </div>

      <input type="checkbox" style={{ marginTop: "20px" }} />
      <label
        style={{ marginLeft: "10px", fontWeight: "400", fontSize: "15px" }}
      >
        Save Card Details
      </label>
    </div>
  );
};
