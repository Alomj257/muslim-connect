import React, { useState } from "react";
import "./AboutService.css";
import FreePackage from "./FreePackage";
import AddOns from "./AddOns";
import DatePicker from "../../../../utils/Consultant/DatePicker/DatePicker";
const AboutService = () => {
  const [value, setDate] = useState([
    new Date("2017-02-01"),
    new Date("2017-05-20"),
  ]);
  return (
    <div className="selection-theme-container mt-4">
      <h4 style={{ fontSize: "32px" }} className="fw-semibold my-4">
        About Service
      </h4>

      <form action="">
        <div className="them-input  d-flex align-items-center gap-5 my-2">
          <div className="d-flex align-items-center gap-2">
            <input
              id="permiumPackage"
              type="checkbox"
              value="Premium"
              style={{ width: "15px", height: "15px", cursor: "pointer" }}
            />
            <label htmlFor="permiumPackage">Premium Package</label>
          </div>
          <div className="d-flex align-items-center gap-2">
            <input
              id="freePackage"
              type="checkbox"
              value="Free"
              style={{ width: "15px", height: "15px", cursor: "pointer" }}
            />
            <label htmlFor="freePackage">Free Package</label>
          </div>
        </div>
        <div className="them-input ">
          <label htmlFor="whyService" className="my-2">
            Why This Service?
          </label>
          <input
            type="text"
            id="whyService"
            placeholder="Explain service"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          />
        </div>
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
            <option value="them1">Date1</option>
            <option value="them1">Date2</option>
            <option value="them1">Date3</option>
            <option value="them1">Date4</option>
          </select>
        </div>
        <div className="them-input my-4 mt-0">
          <label htmlFor="range" className="my-2">
            Select from Range
          </label>
          <div className="d-flex justify-content-between border align-items-center rounded border-2">
            <DatePicker date={value} setDate={setDate} />
          </div>
        </div>
        <div className="them-input my-4">
          <label htmlFor="serviceType" className="my-2">
            Service Type
          </label>
          <select
            name="serviceType"
            type="text"
            id="serviceType"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          >
            <option value="them1">Select Option</option>
            <option value="them1">service1</option>
            <option value="them1">service2</option>
            <option value="them1">service3</option>
            <option value="them1">service4</option>
          </select>
        </div>
        <div className="them-input my-4 d-flex justify-content-between align-items-center">
          <div className="w-100">
            <label htmlFor="price" className="my-2">
              price
            </label>
            <select
              name="price"
              type="text"
              id="price"
              style={{ outline: "none" }}
              className="border p-2 w-100 bg-transparent border-2 rounded"
            >
              <option value="them1">Select Option</option>
              <option value="them1">$10</option>
              <option value="them1">$20</option>
              <option value="them1">$30</option>
              <option value="them1">$40</option>
            </select>
          </div>
          <div className="w-100">
            <label htmlFor="duration" className="my-2">
              Duration
            </label>
            <select
              name="duration"
              type="text"
              id="duration"
              style={{ outline: "none" }}
              className="border p-2 w-100 bg-transparent border-2 rounded"
            >
              <option value="them1">Select Option</option>
              <option value="30">30mins</option>
              <option value="40">40mins</option>
              <option value="50">50mins</option>
              <option value="60">60mins</option>
            </select>
          </div>
        </div>
        <FreePackage />
        <AddOns />
      </form>
    </div>
  );
};

export default AboutService;
