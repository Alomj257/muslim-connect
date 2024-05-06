import React from "react";
import "./CreateGigs.css";
import ProgressComp from "./ProgressComp";
import SelectionTheme from "../SelectionTheme/SelectionTheme";
const CreateGigs = () => {
  return (
    <>
      <div className="create-gigs">
        <div className="progress-comp">
          <ProgressComp />
        </div>
        <div className="selection-theme">
          <SelectionTheme />
          <div className="d-flex justify-content-between my-3 pb-5 align-items-center">
            <button className="btn btn-create-gigs-back">Back</button>
            <button className="btn btn-create-gigs-continue">
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateGigs;
