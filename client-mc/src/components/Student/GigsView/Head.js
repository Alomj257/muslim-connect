import React from "react";
import MoreSvg from "../../../assets/Gigs/MoreSvg";
import HomeSvg from "../../../assets/GigsView/HomeSvg";
import LikeSvg from "../../../assets/GigsView/LikeSvg";
import PlusSvg from "../../../assets/GigsView/PlusSvg";
import ShareSvg from "../../../assets/GigsView/ShareSvg";
import ToArrow from "../../../assets/GigsView/ToArrow";

const Head = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <HomeSvg />
        <ToArrow />
        <span style={{ fontWeight: "500", fontSize: "20px" }}>Learning</span>
        <ToArrow />
        <span
          style={{
            fontWeight: "500",
            fontSize: "20px",
            color: "rgba(111, 174, 156, 1)",
          }}
        >
          Consultations
        </span>
      </div>
      <div style={{ display: "flex" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "transparent",
            border: "1px solid rgba(124, 83, 153, 1)",
            padding: "0px 40px 0px 40px",
            color: "rgba(124, 83, 153, 1)",
            borderRadius: "5px",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          <PlusSvg /> Follow
        </button>

        <LikeSvg />
        <ShareSvg />
        <MoreSvg />
      </div>
    </div>
  );
};

export default Head;
