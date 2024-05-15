import React from "react";
import "./Profile.css";
import profilePic from "../../../assets/Student/Ellipse 21.png";
import {
  MdEdit,
  MdFacebook,
  MdLocationPin,
  MdOutlineCalendarMonth,
  MdOutlineWatchLater,
  MdVideocam,
} from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="profile-container">
      <div class="profile-picture">
        <img src={profilePic} alt="profile pic" />
      </div>
      <div class="profile-info w-100">
        <div className="d-flex w-100 align-items-center ">
          <h6 className="fw-semibold ms-auto"> Muhammad Haseeb</h6>{" "}
          <MdEdit className="ms-auto" size={20} />
        </div>
        <p>
          Loyality Rank:{" "}
          <span style={{ color: "#8F5F03", fontWeight: "light" }}>
            Developer
          </span>
        </p>
      </div>
      <div class="description">
        <div className="d-flex justify-content-between align-items-center ">
          <h6 className="fw-semibold"> Description</h6>{" "}
          <button className="btn  small">
            <MdEdit size={20} />
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
          risus enim. Nullam faucibus, ligula non mattis accumsan, velit felis
          volutpat arcu, nec hendrerit metus lectus et leo.
        </p>
      </div>
      <hr style={{ width: "100%" }} />
      <div className="availablity-container d-flex flex-column gap-3 w-100 mb-2">
        <div className="d-flex justify-content-between fw-semibold">
          <div className="d-flex gap-2 align-item-center ">
            <span>
              <MdLocationPin size={20} />
            </span>
            <span>From</span>
          </div>
          <div>Pakistan</div>
        </div>
        <div className="d-flex justify-content-between fw-semibold">
          <div className="d-flex gap-2 align-item-center ">
            <span>
              <MdOutlineWatchLater size={20} />
            </span>
            <span>Avg. Response Time</span>
          </div>
          <div>1 Hour</div>
        </div>
        <div className="d-flex justify-content-between fw-semibold">
          <div className="d-flex gap-2 align-item-center ">
            <span>
              <MdVideocam size={20} />
            </span>
            <span>Last Consultantion</span>
          </div>
          <div>4 Days ago</div>
        </div>
        <div className="d-flex justify-content-between fw-semibold">
          <div className="d-flex gap-2 align-item-center ">
            <span>
              <MdOutlineCalendarMonth size={20} />
            </span>
            <span>Availability</span>
          </div>
          <div>30hr a week</div>
        </div>
        <div className="availability-btn rounded w-100 d-flex  align-items-center gap-3 fw-bold justify-content-center ">
          <span>
            <MdOutlineCalendarMonth className="text-white" size={20} />
          </span>
          <span className="text-white">Availability</span>
        </div>
      </div>
      <div class="details mt-4 d-flex flex-column gap-1">
        <div className="d-flex justify-content-between align-items-center ">
          <h6>Education</h6> <button className="btn border small">+ Add</button>
        </div>
        <p className="fw-semibold">B.Sc - BS Computer Science</p>
        <p className="text-muted fw-semibold">COMSATS University, Pakistan.</p>
      </div>
      <div class="details">
        <div className="d-flex justify-content-between align-items-center ">
          <h6>Language</h6> <button className="btn border small">+ Add</button>
        </div>
        <p>
          <span className="fw-semibold">English -</span>{" "}
          <span className="text-muted"> Fluent</span>
        </p>
        <p>
          <span className="fw-semibold">French -</span>{" "}
          <span className="text-muted"> Native</span>
        </p>
      </div>
      <div class="details">
        <div className="d-flex justify-content-between align-items-center">
          <h6>Interests</h6> <button className="btn border small">+ Add</button>
        </div>
        <p>Islamic finance</p>
        <p>Arabic Course</p>
      </div>
      <div class="details">
        <div className="d-flex justify-content-between align-items-center">
          <h6>Skills</h6> <button className="btn border small">+ Add</button>
        </div>
        <div className="d-flex gap-3 my-2 flex-wrap align-items-center">
          <span className="rounded skill">Islamic Finance</span>
          <span className="rounded skill">mariage/divorce</span>
          <span className="rounded skill">Arabic Course</span>
        </div>
      </div>
      <div class="details">
        <div className="d-flex justify-content-between align-items-center">
          <h6>Social Media</h6>{" "}
          <button className="btn border small">+ Add</button>
        </div>
        <div className="d-flex gap-3 my-2  align-items-center">
          <MdFacebook size={20} />
          <span>Facebook</span>
        </div>
        <div className="d-flex gap-3 my-2  align-items-center">
          <FaYoutube size={20} />
          <span>Youtube</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
