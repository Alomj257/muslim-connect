import React from "react";
import img from "../../../assets/Nav_assets/studentProfile.jpeg";

const Header = () => {
  return (
    <>
      <div
        className={`w-100  p-1 px-2 bg-gray  rounded-top-4 d-flex gap-2  align-items-center`}
      >
        <div
          className="profile-img  "
          style={{ width: "50px", aspectRatio: "1/1" }}
        >
          <img src={img} alt="profile" className="w-100 h-100 rounded-circle" />
        </div>
        <div className="w-100">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <h5 className="fw-semibold" style={{ fontSize: "16px" }}>
              Mohammad Haseeb
            </h5>
            <small>...</small>
          </div>
          <div>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
