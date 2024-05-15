import React from "react";
import Avatar from "../../../assets/GigsView/Avatar.png";
import StarSvg from "../../../assets/GigsView/StarSvg";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";

const LeftContaineerHead = ({ gig }) => {
  const user = useGetAuthByIdQuery(gig?.userId);
  return (
    <>
      <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>{gig?.title}</h4>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src={Avatar}
          alt=""
          srcset=""
          style={{
            height: "70px",
            width: "70px",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        />
        <div>
          <p style={{ fontWeight: "600", fontSize: "24px" }}>
            {user?.data?.firstname} {user?.data?.lastname}
          </p>
          <div
            className="mt-1"
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-20px",
            }}
          >
            <StarSvg />
            <span style={{ marginLeft: "10px" }}>
              5.0 <span>(28)</span>
            </span>
          </div>
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
          {gig?.level}
        </div>
      </div>
    </>
  );
};

export default LeftContaineerHead;
