import React from "react";
import FiveStarSvg from "../../../assets/GigsView/FiveStarSvg";
import ProfileImg from "../../../assets/GigsView/Ellipse 22.png";

const Reviews = () => {
  return (
    <div
      style={{
        width: "65%",
        backgroundColor: "#FFF",
        padding: "3%",
      }}
    >
      <div className="Reviews-title">
        <h1
          style={{
            fontWeight: 600,
            fontSize: "44px",
          }}
        >
          Reviews
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontWeight: 600,
              fontSize: "28px",
            }}
          >
            139 reviws from this Gig
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <FiveStarSvg />
            <h1
              style={{
                fontWeight: 600,
                fontSize: "28px",
              }}
            >
              5
            </h1>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <ReviewsPersons />
        <ReviewsPersons />
      </div>
    </div>
  );
};

export default Reviews;

const ReviewsPersons = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        gap: "10px",
        padding: "2rem 0rem 2rem 0rem",
        borderTop: "1px solid gray",
      }}
    >
      <img
        style={{
          width: "80px",
          borderRadius: "50%",
          aspectRatio: 1 / 1,
          // height: '200px'
        }}
        src={ProfileImg}
        alt=""
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 500,
            lineHeight: "24px",
            marginLeft: "10px",
          }}
        >
          Ali Mohammad
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <FiveStarSvg />
            <h1
              style={{
                fontWeight: 600,
                fontSize: "28px",
                paddingRight: "1rem",
              }}
            >
              5
            </h1>
          </div>
          <p
            style={{
              paddingLeft: "1rem",
              borderLeft: "3px solid #000",
              fontWeight: 400,
              fontSize: "20px",
              color: "gray",
            }}
          >
            1 month ago
          </p>
        </div>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "28px",
            fontWeight: 500,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum
          minus voluptatem nam ut corporis veniam facere. Neque quis nulla at
          nam, consequatur, fugit distinctio aperiam, earum esse magnam nihil.
        </p>
      </div>
    </div>
  );
};
