import React from "react";
import MoreSvg from "../../../assets/Gigs/MoreSvg";
import HomeSvg from "../../../assets/GigsView/HomeSvg";
import LikeSvg from "../../../assets/GigsView/LikeSvg";
import PlusSvg from "../../../assets/GigsView/PlusSvg";
import ShareSvg from "../../../assets/GigsView/ShareSvg";
import StarSvg from "../../../assets/GigsView/StarSvg";
import ToArrow from "../../../assets/GigsView/ToArrow";
import DashNav from "../../DashNav/DashNav";
import SubNav from "../../SubNav/SubNav";
import Avatar from "../../../assets/GigsView/Avatar.png";

function GigsView() {
  return (
    <div>
      <DashNav navData={navData} />
      <SubNav />
      <div style={{ padding: "12% 5% 12% 5%" }}>
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
            <span style={{ fontWeight: "500", fontSize: "20px" }}>
              Learning
            </span>
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

        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: "65%" }}>
            <h4 style={{ marginTop: "20px" }}>
              I will give consultation on the Financial system in light of Quran
            </h4>
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
                  height: "70px",
                  width: "70px",
                  borderRadius: "50%",
                  marginRight: "20px",
                }}
              />
              <div>
                <p style={{ fontWeight: "600", fontSize: "24px" }}>
                  Usman Ahmad
                </p>
                <p
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
          </div>
          <div style={{ width: "35%" }}>b</div>
        </div>
      </div>
      {/* ...... */}
    </div>
  );
}

export default GigsView;
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
