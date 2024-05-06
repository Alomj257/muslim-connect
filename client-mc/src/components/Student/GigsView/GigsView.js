import React from "react";
import DashNav from "../../DashNav/DashNav";
import SubNav from "../../SubNav/SubNav";
import img from "../../../assets/GigsView/Rectangle 1895.png";
// import PrevSvg from "../../../assets/GigsView/PrevSvg";
// import UpnextSvg from "../../../assets/GigsView/UpnextSvg";
import LeftContaineerHead from "./LeftContaineerHead";
import ConsultantCard from "./ConsultantCard";
import Head from "./Head";
import Reviews from "./Reviews";
import "./GigsView.css";
import ArrowVio from "../../../assets/GigsView/ArrowVio";
import RightContaineer from "./RightContaineer";
function GigsView() {
  return (
    <div>
      <DashNav navData={navData} />
      <SubNav />
      <div style={{ padding: "12% 5% 12% 5%" }}>
        <Head />

        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: "65%", padding: "1%" }}>
            <LeftContaineerHead />
            <div style={{ width: "100%" }}>
              <div style={{ width: "100%", display: "flex" }}>
                <img
                  src={img}
                  alt=""
                  style={{ width: "100%", marginTop: "20px" }}
                />
              </div>
              <h1
                style={{
                  fontWeight: "600",
                  fontSize: "40px",
                  marginTop: "40px",
                }}
              >
                About the Gig
              </h1>

              <AboutText />
            </div>

            <h1
              style={{
                fontWeight: "600",
                fontSize: "40px",
                marginTop: "40px",
                marginBottom: "30px",
              }}
            >
              About the Consultant
            </h1>
            {/* consultant Card  */}
            <ConsultantCard />

            <div>
              <h1
                style={{
                  fontWeight: "600",
                  fontSize: "40px",
                  marginTop: "50px",
                }}
              >
                Gigs Keyword
              </h1>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <GigsKeyword keyword={"Islamic Finance"} />
                <GigsKeyword keyword={"Maal"} />
                <GigsKeyword keyword={"Tax"} />
                <GigsKeyword keyword={"Zakaat"} />
              </div>
            </div>
          </div>
          <div style={{ width: "35%", marginTop: "30px", padding: "1%" }}>
            <RightContaineer />
            <div style={{ width: "100%", marginTop: "30px" }}>
              <button
                className="button_book"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  color: "rgba(124, 83, 153, 1)",
                  fontWeight: "600",
                  fontSize: "22px",
                  padding: "13px 80px 13px 80px",
                  border: "1px solid rgba(124, 83, 153, 1)",
                  borderRadius: "10px",
                }}
              >
                Contact Me <ArrowVio />
              </button>
            </div>
          </div>
        </div>
        <Reviews />
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

const AboutText = () => {
  return (
    <>
      <p style={{ fontWeight: "400", fontSize: "20px" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nihil
        esse eos sed eligendi impedit necessitatibus iusto blanditiis temporibus
        ducimus deleniti eveniet quae ex possimus dolor nostrum dicta doloribus
        ea adipisci molestias optio, incidunt officia beatae! Incidunt
        perferendis at harum laudantium debitis ea, perspiciatis sequi unde
        deleniti soluta, veritatis iure! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Provident eos ea temporibus nemo enim officiis itaque
        dolorem perspiciatis doloribus fugiat, quidem cum culpa consectetur
        voluptas amet ullam aliquam dolores sint? Accusamus dignissimos eum
        perferendis maxime sed voluptates esse, dicta sint? Sequi sed quod saepe
        deleniti dolorum accusamus libero laudantium ipsa! Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Nobis distinctio libero
        consequuntur quia eaque fugit, quo aperiam a dolore illo! Id ipsa non
        laudantium consequuntur est ullam iusto blanditiis perspiciatis
        reiciendis, animi at ratione voluptatibus suscipit quia quae ducimus
        velit saepe facere a quos sed, magni vel. Unde, ratione temporibus!
      </p>
      <p style={{ fontWeight: "400", fontSize: "20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        doloremque enim nisi ab. Provident, eligendi? Itaque excepturi minus
        nobis rerum provident, ratione harum tempore alias aperiam quidem soluta
        unde sed dolore optio tenetur illo at similique! Tempore atque ratione
        sequi unde, sed suscipit ex, deleniti, exercitationem cumque soluta ea
        officia totam expedita nulla. Architecto, at voluptatum porro ullam
        accusamus incidunt vitae tempora quasi illum aspernatur dolor saepe quos
        quaerat hic laboriosam reprehenderit dolorem est, voluptates soluta non
        itaque unde odit, vero magni! Officia commodi voluptates aliquam
        asperiores rerum tempore id molestias explicabo minima eveniet quam
        corrupti, animi ducimus sequi. Soluta.
      </p>
      <p style={{ fontWeight: "400", fontSize: "20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        provident est eaque quidem fugiat porro ipsa saepe neque, perferendis
        quia tempora quae iusto alias nesciunt!
      </p>
    </>
  );
};

const GigsKeyword = ({ keyword }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(246, 246, 246, 1)",
          display: "inline",
          padding: "10px 20px 10px 20px",
          borderRadius: "5px",
          marginRight: "20px",
        }}
      >
        <span style={{ fontWeight: "500", fontSize: "16px" }}>{keyword}</span>
      </div>
    </>
  );
};
