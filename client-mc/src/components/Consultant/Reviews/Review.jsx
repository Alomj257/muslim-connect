import React from "react";
import "./Review.css";
import { MdStar } from "react-icons/md";
import Rev from "./Rev";

const Review = () => {
  return (
    <div className="consult-review">
      <h4 className="fw-bold mb-3">Reviews & Ratings</h4>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="consult-review-head">139 reviews for this Gig</h5>
        <span className="d-flex align-items-center gap-2">
          <MdStar size={25} />
          <MdStar size={25} />
          <MdStar size={25} />
          <MdStar size={25} />
          <MdStar size={25} />
          <span className="p fw-bold">5</span>
        </span>
      </div>
      <div className="consult-reviews">
        <hr />
        <Rev />
        <hr />
        <Rev />
        <hr />
        <Rev />
      </div>
    </div>
  );
};

export default Review;
