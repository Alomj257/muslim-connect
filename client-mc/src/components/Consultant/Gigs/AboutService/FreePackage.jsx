import React from "react";
import { MdCalendarMonth } from "react-icons/md";

const FreePackage = () => {
  return (
    <>
      <div className="freePackage">
        <h4 className="fw-semibold">Free Package</h4>
        <div className="them-input ">
          <label htmlFor="availability" className="my-2">
            Availability
          </label>
          <select
            name="availability"
            type="text"
            id="availability"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          >
            <option value="them1">Select Option</option>
            <option value="them1">Available1</option>
            <option value="them1">Available2</option>
            <option value="them1">Available3</option>
            <option value="them1">Available4</option>
          </select>
        </div>
        <div className="them-input my-4 mt-0">
          <label htmlFor="range" className="my-2">
            Select from Range
          </label>
          <div className="d-flex justify-content-between">
            <select
              name="range"
              type="text"
              id="range"
              style={{ outline: "none" }}
              className="border p-2 w-100 bg-transparent border-2 rounded"
            >
              <option value="them1">Select Range</option>
              <option value="them1">Range1</option>
              <option value="them1">Range2</option>
              <option value="them1">Range3</option>
              <option value="them1">Range4</option>
            </select>{" "}
            <span>
              <MdCalendarMonth />
            </span>{" "}
          </div>
        </div>
        <div className="them-input ">
          <label htmlFor="platform" className="my-2">
            Platform
          </label>
          <select
            name="platform"
            type="text"
            id="platform"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          >
            <option value="them1">Select Platform</option>
            <option value="them1">Platform1</option>
            <option value="them1">Platform2</option>
            <option value="them1">Platform3</option>
            <option value="them1">Platform4</option>
          </select>
        </div>
        <div className="them-input ">
          <label htmlFor="platform" className="my-2">
            Individuals
          </label>
          <select
            name="platform"
            type="text"
            id="platform"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          >
            <option value="them1">Select Number</option>
            <option value="them1">1</option>
            <option value="them1">2</option>
            <option value="them1">3</option>
            <option value="them1">4</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FreePackage;
