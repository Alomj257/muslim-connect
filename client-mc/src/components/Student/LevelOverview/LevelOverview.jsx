import React from "react";
import "./LevelOverview.css";
import DashNav from "../../DashNav/DashNav";
import ProfileImage from "../../../assets/Nav_assets/studentProfile.jpeg";
import BornzeSvg from "../../../assets/LevelOverview/BornzeSvg";
import NextArrow from "../../../assets/LevelOverview/NextArrow";
import img2 from "../../../assets/LevelOverview/Group 3535.png";
function LevelOverview() {
  return (
    <div>
      <DashNav navData={navData} />
      <div
        style={{
          height: "65vh",
          width: "100%",
          paddingTop: "17%",
          paddingLeft: "7%",
          background: "linear-gradient(180deg, #7C5399 0%, #291C33 100%)",
        }}
      >
        <h1 style={{ color: "white", fontWeight: "600" }}>Loyalty Program</h1>
      </div>

      <div style={{ padding: "5%", display: "flex" }}>
        <div
          style={{
            width: "35%",
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
            padding: "3%",
            backgroundColor: "white",
            marginTop: "-20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginLeft: "30px",
          }}
        >
          <img
            src={ProfileImage}
            alt=""
            style={{ height: "140px", width: "140px", borderRadius: "50%" }}
          />
          <span style={{ fontWeight: "600", fontSize: "30px" }}>
            Muhammad Haseeb
          </span>
          <div
            style={{
              display: "flex",
              backgroundColor: "rgba(193, 130, 8, 0.2)",
              padding: "8px 20px 8px 20px",
              borderRadius: "4px",
              fontWeight: "600",
              fontSize: "18px",
              color: "rgba(193, 130, 8, 1)",
              marginTop: "13px",
            }}
          >
            <BornzeSvg />
            Bronze
          </div>
          <span
            style={{
              color: "rgba(124, 83, 153, 1)",
              fontWeight: "400",
              fontSize: "18px",
              marginTop: "13px",
            }}
          >
            Current Points:{" "}
            <span style={{ fontWeight: "600", fontSize: "20px" }}>
              200 points
            </span>
          </span>
          <p style={{ marginTop: "10px" }}>
            100 Points left to reach new silver tier
          </p>
          {/* range for next level */}
          <div>range</div>
        </div>

        <div
          style={{
            width: "55%",
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
            padding: "3%",
            backgroundColor: "white",
            marginTop: "-20%",
            marginLeft: "70px",
          }}
        >
          <h1>Loyalty Points</h1>
          <p style={{ fontWeight: "400", fontSize: "18px", color: "gray" }}>
            Loyalty points are added by Following these Points{" "}
          </p>

          <ul
            style={{
              fontWeight: "500",
              fontSize: "20px",
              color: "rgba(124, 83, 153, 1)",
            }}
          >
            <li>1 group religious learning session = 1 point</li>
            <li>1 individual religious learning session = 2 points</li>
            <li>1 consultation on a specific topic = 3 points</li>
            <li>1 review left = 1 point</li>
            <li>
              1 referral of a subscriber (who has paid for his subscription, the
              first months offered are not valid) = 3 points for the referrer
              and 1 month of free subscription for the sponsored person
            </li>

            <li>
              1 referee who subscribes or books a service = 2 points Additional
              Subscriptions for the Referrer
            </li>
            <li>The first subscription = 10 points</li>
            <li>Each renewed subscription = 5 points</li>
          </ul>
        </div>
      </div>
      <div style={{ padding: "3% 7.5% 0 7.5%" }}>
        <h1 style={{ fontWeight: "600" }}>Loyalty Tier</h1>
        <div style={{ display: "flex" }}>
          <span style={{ fontWeight: "400", fontSize: "26px" }}>
            Loyalty tier can be assigned by the points gained by the user and
            following perks will be given to the users depending on there tiers.
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                padding: "13px 20px 13px 20px",
                marginRight: "10px",
                borderRadius: "15px",
                transform: "rotate(180deg)",
              }}
            >
              <NextArrow />
            </div>
            <div
              style={{
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                padding: "13px 20px 13px 20px",
                borderRadius: "15px",
              }}
            >
              <NextArrow />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <LevelCard
            img={img2}
            level={"BRONZE"}
            li1={
              <>
                {" "}
                Bronze from <span style={{ fontWeight: "700" }}>
                  {" "}
                  0 to 99
                </span>{" "}
                points
              </>
            }
            li2={"No benefits"}
          />
          <LevelCard
            img={img2}
            level={"BRONZE"}
            li1={
              <>
                {" "}
                Bronze from <span style={{ fontWeight: "700" }}>
                  {" "}
                  0 to 99
                </span>{" "}
                points
              </>
            }
            li2={"No benefits"}
          />
          <LevelCard
            img={img2}
            level={"BRONZE"}
            li1={
              <>
                {" "}
                Bronze from <span style={{ fontWeight: "700" }}>
                  {" "}
                  0 to 99
                </span>{" "}
                points
              </>
            }
            li2={"No benefits"}
          />
        </div>
      </div>
    </div>
  );
}

export default LevelOverview;

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

const LevelCard = ({ img, level, li1, li2 }) => {
  return (
    <div className="container_loyalty" style={{ paddingBottom: "50px" }}>
      <div className="card_loyalty">
        <img src={img} alt="Placeholder" />
        <div className="card-content_loyalty">
          <div className="box">
            <h2 style={{ textAlign: "center", marginTop: "5px" }}>{level}</h2>
            <ul
              style={{
                fontWeight: "400",
                fontSize: "22px",
                marginBottom: "20px",
                marginTop: "10px",
              }}
            >
              <li>{li1}</li>
              <li>{li2}</li>
            </ul>
          </div>
          <p
            style={{
              marginLeft: "90px ",
              textDecoration: "underline",
              fontWeight: "600",
              fontSize: "20px",
              cursor: "pointer",
            }}
            href="#"
          >
            View More
          </p>
        </div>
      </div>
    </div>
  );
};
