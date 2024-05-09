import React from "react";
import profileImg from "../../../assets/Student/Ellipse 21.png";
import { MdStar } from "react-icons/md";
const Rev = () => {
  return (
    <>
      <div className="review">
        <div className="d-flex gap-4 ">
          <div
            style={{ width: "150px", aspectRatio: "1" }}
            className="d-flex align-items-center mb-auto my-2"
          >
            <img src={profileImg} alt="profile" className="w-100 h-100 " />
          </div>
          <div>
            <h5>Ali Ahmad</h5>
            <div className="d-flex  align-items-center">
              <span className="d-flex align-items-center">
                <MdStar size={25} />
                <MdStar size={25} />
                <MdStar size={25} />
                <MdStar size={25} />
                <MdStar size={25} />
              </span>
              <div className="d-flex gap-2 align-items-center">
                <span className="fw-semibold fs-5">5</span>{" "}
                <span className="fs-bold">|</span>
                <span className="text-muted">1 Month</span>
              </div>
            </div>
            <div className="my-3" style={{ fontSize: "15px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              esse nobis quis voluptates voluptate praesentium, aliquid quas
              eaque magnam voluptatem veritatis quam quasi ipsam error harum
              delectus pariatur debitis eveniet! Fuga deserunt nisi, harum atque
              cumque iste modi praesentium quos ad quisquam optio fugit nesciunt
              rem. Beatae distinctio enim doloribus,
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rev;
