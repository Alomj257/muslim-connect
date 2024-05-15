import React, { useEffect, useState } from "react";
import ProfileAndPrice from "../../ProfileAndPrice/ProfileAndPrice";
import SubNav from "../../SubNav/SubNav";
import Tabs from "../../Tabs/Tabs";
import Avatar from "../../../assets/GigsView/Avatar.png";
import PaymentCard from "../../PaymentCard/PaymentCard";
import MasterCardSvg from "../../../assets/PaymentPage/MasterCardSvg";
import VisaCardSvg from "../../../assets/PaymentPage/VisaCardSvg";
import AddnewCard from "../../../assets/PaymentPage/AddnewCard";
import { useLocation } from "react-router-dom";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import AddCard from "../AddCard/AddCard";
import { useGetCardByUserIdQuery } from "../../../ApiService/CardSlice/CardSlice";
import { useAuth } from "../../../context/AuthContext";
import Rupay from "../../../assets/PaymentPage/Rupay";
import Defualt from "../../../assets/PaymentPage/Defualt";
import { loadStripe } from "@stripe/stripe-js";
import { makePayment } from "../../../ApiService/Auth/Auth";

function PaymentPage() {
  let arr = ["Learning", "Consultation", "Book Consultation", "Payment"];
  const { state } = useLocation();
  const [auth] = useAuth();
  const { gig, details } = state;
  const [isAddCard, setIsAddCard] = useState(false);
  const user = useGetAuthByIdQuery(gig?.userId);
  const [cards, setCards] = useState([]);
  const paymentCards = useGetCardByUserIdQuery(auth?.user?._id);
  useEffect(() => {
    setCards(paymentCards?.data);
  }, [paymentCards.data]);
  const onAdd = () => {
    paymentCards.refetch();
  };
  const handlePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PBNGfSCZnl4fNe7OhyqOs5WH04BKl5VIpwEMOch1wYJNv3zwDtrgWKaXhE8HSfoSmjatibrbu7JFau7pFDWr36V00pzjNjava"
    );
    const details = [
      {
        price: 34,
        quantity: 1,
        id: 1,
        gig,
      },
    ];
    try {
      const response = await makePayment({ items: details });
      const session = response;
      console.log(session);
      const result = stripe.redirectToCheckout({
        sessionId: response?.data?.id,
      });
      if (result.error) {
        console.log(result.error);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // setPaymentLoading(false);
  };

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
            {gig?.title}
          </h2>
          <ProfileAndPrice
            img={Avatar}
            name={user?.data?.firstname + " " + user?.data?.lastname}
            star={"5.0"}
            people="28"
            price={gig?.price}
          />
          {!isAddCard ? (
            <PaymentMethod
              gig={gig}
              details={details}
              cards={cards}
              setIsAddCard={setIsAddCard}
              isAddCard={isAddCard}
            />
          ) : (
            <AddCard
              onAdd={onAdd}
              cards={cards}
              setCards={setCards}
              setIsAddCard={setIsAddCard}
              isAddCard={isAddCard}
            />
          )}
        </div>
        <div style={{ width: "35%" }}>
          <PaymentCard
            head={"Payment"}
            handlePayment={handlePayment}
            body={<PaymentInfo gig={gig} details={details} />}
            btn={"Check out"}
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;

const PaymentMethod = ({ cards, setIsAddCard, isAddCard }) => {
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
        {cards?.map((val, key) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "50px",
              marginBottom: "30px",
            }}
          >
            <input type="radio" id="option1" name="options" value="option1" />
            <label for="option1">{identifyCardType(val?.cardNumber)}</label>
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
              <span>
                {identifyCardTypeGetName(val?.cardNumber)} ****{" "}
                {JSON.stringify(val?.cardNumber)?.slice(
                  JSON.stringify(val?.cardNumber)?.length - 4,
                  JSON.stringify(val?.cardNumber)?.length
                )}
              </span>
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
        ))}
      </div>

      <div
        onClick={() => setIsAddCard(true)}
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

function identifyCardType(cardNumber) {
  // const sanitizedCardNumber = cardNumber?.replace(/\D/g, "");

  if (/^4/.test(cardNumber)) {
    return <VisaCardSvg />;
  }

  if (/^5[1-5]/.test(cardNumber) || /^2[2-7]/.test(cardNumber)) {
    return <MasterCardSvg />;
  }

  if (
    /^60/.test(cardNumber) ||
    /^6521/.test(cardNumber) ||
    /^6522/.test(cardNumber)
  ) {
    return <Rupay />;
  }

  return <Defualt />;
}
function identifyCardTypeGetName(cardNumber) {
  // Remove all non-digit characters from the card number
  // const sanitizedCardNumber = cardNumber?.replace(/\D/g, "");

  // Check for Visa
  if (/^4/.test(cardNumber)) {
    return "Visa";
  }

  // Check for Mastercard
  if (/^5[1-5]/.test(cardNumber) || /^2[2-7]/.test(cardNumber)) {
    return "Mastercard";
  }

  // Check for RuPay
  if (
    /^60/.test(cardNumber) ||
    /^6521/.test(cardNumber) ||
    /^6522/.test(cardNumber)
  ) {
    return "RuPay";
  }

  return "Unknown";
}

const PaymentInfo = ({ gig, details }) => {
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
          <p>{new Date(details?.date).toLocaleDateString()}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Time</p>
          <p>{new Date(details?.date).toLocaleTimeString()}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Duration</p>
          <p>{details?.duration}</p>
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
