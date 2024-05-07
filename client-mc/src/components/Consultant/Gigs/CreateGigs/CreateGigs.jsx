import React, { useState } from "react";
import "./CreateGigs.css";
import ProgressComp from "./ProgressComp";
import SelectionTheme from "../SelectionTheme/SelectionTheme";
import AboutService from "../AboutService/AboutService";
import ContentGigs from "../Content/ContentGigs";
import MediaGigs from "../Media/MediaGigs";
const CreateGigs = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="create-gigs">
        <div className="progress-comp">
          <ProgressComp />
        </div>
        <div className="selection-theme">
          <div className="gigs-comp">
            {stepsString[index] === "selection" && <SelectionTheme />}
            {stepsString[index] === "service" && <AboutService />}
            {stepsString[index] === "content" && <ContentGigs />}
            {stepsString[index] === "media" && <MediaGigs />}
          </div>
          <div className="d-flex justify-content-between my-3 pb-5 align-items-center">
            <button
              onClick={() => setIndex((pre) => pre - 1)}
              disabled={index <= 0}
              className="btn btn-create-gigs-back"
            >
              Back
            </button>
            {index >= stepsString.length - 1 ? (
              <button
                disabled={index >= stepsString.length}
                className="btn btn-create-gigs-continue"
              >
                Submit
              </button>
            ) : (
              <button
                disabled={index >= stepsString.length - 1}
                onClick={() => setIndex((pre) => pre + 1)}
                className="btn btn-create-gigs-continue"
              >
                Save & Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateGigs;

const stepsString = ["selection", "service", "content", "media"];
