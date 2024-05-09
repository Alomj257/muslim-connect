import React from "react";
import img from "../../../assets/Nav_assets/studentProfile.jpeg";
const LevelProfile = () => {
  return (
    <div className="card flex-column text-center justify-content-center gap-3  p-5">
      <div
        className="level-profile-img mx-auto"
        style={{ width: "200px", aspectRatio: "1/1" }}
      >
        <img src={img} alt="profile" className="w-100 h-100 rounded-circle" />
      </div>
      <h5 className="fw-semibold">Mohammad Haseeb</h5>
      <div>
        <span className="bg-light px-2 p-1 rounded">Premium</span>
      </div>
      <div className="sessions d-flex flex-column align-items-center gap-2">
        <span className="d-flex justify-content-center">
          <span className="navbar-active">Sessions completed:</span>{" "}
          <span className="navbar-active">56 Sessions</span>
        </span>
        <span>44 sessions left to reach new Expert tier</span>
      </div>
      <div className=" w-100 level-progress">
        <div
          className="w-100  rounded-4"
          style={{ height: "5px", background: "purple" }}
        ></div>
        <div
          style={{ fontSize: "13px" }}
          className="d-flex justify-content-between align-items-center"
        >
          <span>0</span>
          <span>100</span>
        </div>
      </div>
    </div>
  );
};

export default LevelProfile;
