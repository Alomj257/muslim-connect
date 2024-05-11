import React, { useState } from "react";
import "./CreateGigs.css";
import ProgressComp from "./ProgressComp";
import SelectionTheme from "../SelectionTheme/SelectionTheme";
import AboutService from "../AboutService/AboutService";
import ContentGigs from "../Content/ContentGigs";
import MediaGigs from "../Media/MediaGigs";
import { useCreateGigsMutation } from "../../../../ApiService/GigsService/GigsService";
import { toast } from "react-toastify";
const CreateGigs = () => {
  const [index, setIndex] = useState(0);
  const [gigs, setGigs] = useState({});
  const [fileNames, setFileNames] = useState({});
  // [function,{isError,isLoading,isSuccess,originalArgs,isUninitialized}]
  const [createGigs, { isSuccess, isError }] = useCreateGigsMutation();
  const handleChange = (e) => {
    const { value, name, files } = e.target;
    setGigs((prevGigs) => ({
      ...prevGigs,
      [name]: files ? files[0] : value,
    }));
    if (files) {
      setFileNames((prev) => ({
        ...prev,
        [name]: files[0]?.name,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createGigs(gigs);
      if (isSuccess) {
        toast.success(data);
      }
      if (isError) {
        toast.error(data?.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <>
      <div className="create-gigs">
        <div className="progress-comp">
          <ProgressComp index={index} stepsString={stepsString} />
        </div>
        <div className="selection-theme">
          <form action="" onSubmit={handleSubmit}>
            <div className="gigs-comp">
              {stepsString[index] === "selection" && (
                <SelectionTheme
                  handleChange={handleChange}
                  gigs={gigs}
                  setGigs={setGigs}
                />
              )}
              {stepsString[index] === "service" && (
                <AboutService
                  handleChange={handleChange}
                  gigs={gigs}
                  setGigs={setGigs}
                />
              )}
              {stepsString[index] === "content" && (
                <ContentGigs
                  handleChange={handleChange}
                  gigs={gigs}
                  setGigs={setGigs}
                />
              )}
              {stepsString[index] === "media" && (
                <MediaGigs
                  fileNames={fileNames}
                  handleChange={handleChange}
                  gigs={gigs}
                  setGigs={setGigs}
                />
              )}
            </div>
            <div className="d-flex justify-content-between my-3 pb-5 align-items-center">
              <button
                type="button"
                onClick={() => setIndex((pre) => pre - 1)}
                disabled={index <= 0}
                className="btn btn-create-gigs-back"
              >
                Back
              </button>
              {index >= stepsString.length - 1 ? (
                <button
                  type="submit"
                  // style={{ cursor: isLoading ? "not-allowed" : "" }}
                  disabled={index >= stepsString.length}
                  className="btn btn-create-gigs-continue "
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  disabled={index >= stepsString.length - 1}
                  onClick={() => setIndex((pre) => pre + 1)}
                  className="btn btn-create-gigs-continue"
                >
                  Save & Continue
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateGigs;

const stepsString = ["selection", "service", "content", "media"];
