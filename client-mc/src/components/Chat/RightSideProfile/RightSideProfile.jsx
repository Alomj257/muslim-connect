import React from "react";
import "./RightSideProfile.css";
import {
  MdLocationPin,
  MdOutlineCalendarMonth,
  MdOutlineWatchLater,
  MdVideocam,
} from "react-icons/md";
const RightSideProfile = () => {
  return (
    <div>
      <h5 className="text-decoration-underline my-4">About Usman</h5>
      <div>
        <h6 className="my-2">Description</h6>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit laudantium unde explicabo accusantium deserunt illum,
          nobis dolorum perspiciatis error atque, nesciunt iure nemo tempora
          adipisci similique totam facilis sit voluptas. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Explicabo, ipsum eos nemo,
          laboriosam omnis veritatis distinctio, magnam quae sequi quod
          nesciunt! Pariatur maxime harum, odio et tempore molestiae quas
          dignissimos. Doloribus cupiditate explicabo nesciunt est et,
          repellendus cum consequatur fugit!
        </p>
      </div>
      <hr />
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
      </div>
    </div>
  );
};

export default RightSideProfile;
