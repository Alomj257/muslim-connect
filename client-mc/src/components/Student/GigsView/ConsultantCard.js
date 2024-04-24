import React from "react";
import Avatar from "../../../assets/GigsView/Avatar.png";
import StarSvg from "../../../assets/GigsView/StarSvg";

const ConsultantCard = () => {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        padding: "8%",
      }}
    >
      <ConsultantCardHead />
      <button
        style={{
          backgroundColor: "transparent",
          border: "1px solid rgba(124, 83, 153, 1)",
          color: "rgba(124, 83, 153, 1)",
          fontWeight: "500",
          fontSize: "20px",
          marginTop: "30px",
          borderRadius: "6px",
          padding: "10px 40px 10px 40px",
        }}
      >
        Contact Me
      </button>

      {/* body  */}

      <div style={{ display: "flex", marginTop: "60px" }}>
        {/* part 1 */}
        <div>
          <div>
            <span
              style={{ fontWeight: "400", fontSize: "18px", color: "grey" }}
            >
              Level
            </span>
            <p style={{ fontWeight: "500", fontSize: "18px" }}> Bronze</p>
          </div>
          <div>
            <span
              style={{ fontWeight: "400", fontSize: "18px", color: "grey" }}
            >
              Skills
            </span>
            <p style={{ fontWeight: "500", fontSize: "18px" }}>
              {" "}
              Islamic Finance, Quran consultation
            </p>
          </div>
        </div>
        {/* part 2 */}
        <div style={{ marginLeft: "25%" }}>
          <div>
            <span
              style={{ fontWeight: "400", fontSize: "18px", color: "grey" }}
            >
              Member Since
            </span>
            <p style={{ fontWeight: "500", fontSize: "18px" }}> 2018</p>
          </div>
          <div>
            <span
              style={{ fontWeight: "400", fontSize: "18px", color: "grey" }}
            >
              Languages
            </span>
            <p style={{ fontWeight: "500", fontSize: "18px" }}>
              {" "}
              English, Indonesian
            </p>
          </div>
        </div>
      </div>
      {/* foot */}
      <div style={{ marginTop: "20px" }}>
        <span style={{ fontWeight: "400", fontSize: "18px", color: "grey" }}>
          About
        </span>
        <p style={{ fontWeight: "500", fontSize: "18px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quod obcaecati explicabo inventore odit minima aspernatur voluptates
          enim, nisi voluptas natus id labore facilis incidunt vero
          exercitationem quasi non quam fugit. Accusantium, itaque obcaecati?
          Inventore in deserunt architecto assumenda nesciunt quod excepturi.
          Esse quasi quam minima quo deleniti incidunt corporis?
        </p>
      </div>
    </div>
  );
};

export default ConsultantCard;

const ConsultantCardHead = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
        }}
      >
        <img
          src={Avatar}
          alt=""
          srcset=""
          style={{
            height: "120px",
            width: "120px",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ fontWeight: "600", fontSize: "24px" }}>Usman Ahmad</p>
          <p
            style={{ fontWeight: "400", fontSize: "20px", marginTop: "-20px" }}
          >
            Consultant Islamic Financial System
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-20px",
            }}
          >
            <StarSvg />
            <span
              style={{
                marginLeft: "10px",
                fontWeight: "600",
                fontSize: "20px",
                color: "grey",
              }}
            >
              5.0
              <span
                style={{
                  marginLeft: "10px",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "black",
                }}
              >
                (28)
              </span>
            </span>
          </p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(111, 174, 156, 0.15)",
            height: "30px",
            width: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(111, 174, 156, 1)",
            borderRadius: "8px",
            marginLeft: "150px",
          }}
        >
          Expart
        </div>
      </div>
    </>
  );
};
