import React from "react";
import ProfileAndPrice from "../../ProfileAndPrice/ProfileAndPrice";
import SubNav from "../../SubNav/SubNav";
import Tabs from "../../Tabs/Tabs";
import Avatar from "../../../assets/GigsView/Avatar.png";
import PaymentCard from "../../PaymentCard/PaymentCard";
import MasterCardSvg from "../../../assets/PaymentPage/MasterCardSvg";
import VisaCardSvg from "../../../assets/PaymentPage/VisaCardSvg";
import AddnewCard from "../../../assets/PaymentPage/AddnewCard";

function PaymentPage() {
  let arr = ["Learning", "Consultation", "Book Consultation", "Payment"];
  return (
    <div>
      {/* <DashNav navData={navData} /> */}
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
          <PaymentMethod />
        </div>
        <div style={{ width: "35%" }}>
          <PaymentCard
            head={"Payment"}
            body={<PaymentInfo />}
            btn={"Check out"}
            url="/student/addcard"
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;

const PaymentMethod = () => {
  return (
    <div style={{ marginTop: "5%", marginBottom: "5%" }}>
      <h2>Payment Method</h2>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "400",
            fontSize: "18px",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "6px",
            padding: "10px 35px 10px 35px",
          }}
        >
          Credit Card
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "400",
            fontSize: "18px",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "6px",
            padding: "10px 35px 10px 35px",
            marginLeft: "30px",
          }}
        >
          Stripe
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <input type="radio" id="option1" name="options" value="option1" />
          <label for="option1">
            <MasterCardSvg />
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "6px",
              padding: "15px 50px 15px 50px",
              width: "50%",
              marginLeft: "35px",
            }}
          >
            <span>Master card **** 3122</span>
          </div>
          <span
            style={{
              fontWeight: "400",
              fontSize: "13px",
              color: "rgba(220, 45, 0, 1)",
              marginLeft: "10px",
            }}
          >
            Remove
          </span>{" "}
          <span
            style={{
              fontWeight: "400",
              fontSize: "13px",
              color: "rgba(26, 115, 232, 1)",
              marginLeft: "10px",
            }}
          >
            Edit
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <input type="radio" id="option2" name="options" value="option2" />
          <label for="option2">
            <VisaCardSvg />
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "6px",
              padding: "15px 50px 15px 50px",
              width: "50%",
              marginLeft: "35px",
            }}
          >
            <span>Visa **** 2020</span>
          </div>
          <span
            style={{
              fontWeight: "400",
              fontSize: "13px",
              color: "rgba(220, 45, 0, 1)",
              marginLeft: "10px",
            }}
          >
            Remove
          </span>{" "}
          <span
            style={{
              fontWeight: "400",
              fontSize: "13px",
              color: "rgba(26, 115, 232, 1)",
              marginLeft: "10px",
            }}
          >
            Edit
          </span>
        </div>
      </div>

      <div
        style={{
          width: "77%",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          borderRadius: "6px",
          marginTop: "20px",
        }}
      >
        <AddnewCard />
      </div>

      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "flex-end",
          borderRadius: "6px",
          marginTop: "30px",
        }}
      >
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "5px  30px 5px 30px",
            border: "1px solid rgba(124, 83, 153, 1)",
            backgroundColor: "transparent",
            color: "rgba(124, 83, 153, 1)",
            marginRight: "15px",
          }}
        >
          Cancel
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "5px  30px 5px 30px",
            border: "none",
            backgroundColor: "rgba(124, 83, 153, 1)",
            color: "white",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const PaymentInfo = () => {
  return (
    <>
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Platform Comission</p>
          <p>5%</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Fee</p>
          <p>+$5</p>
        </div>
        <span style={{ color: "rgba(124, 83, 153, 1)" }}>
          Save $2.5 by Subscribing{" "}
        </span>
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
            $45
          </span>
        </span>
      </div>
    </>
  );
};
