import React from "react";
import img from "../../../assets/Nav_assets/studentProfile.jpeg";

const Conversation = ({ active }) => {
  return (
    <div
      className={`conversation rounded p-1 px-2 ${
        active && "conversation-active"
      } d-flex gap-2  align-items-center`}
    >
      <div
        className="profile-img  "
        style={{ width: "50px", aspectRatio: "1/1" }}
      >
        <img src={img} alt="profile" className="w-100 h-100 rounded-circle" />
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="fw-semibold" style={{ fontSize: "16px" }}>
            Mohammad Haseeb
          </h5>
          <small>1 hour ago</small>
        </div>
        <div>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
