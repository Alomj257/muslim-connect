import React from "react";
import "./SelectionTheme.css";
const SelectionTheme = () => {
  return (
    <div className="selection-theme-container mt-4">
      <h4 style={{ fontSize: "32px" }} className="fw-semibold">
        Selection Theme
      </h4>

      <form action="">
        <div className="them-input ">
          <label htmlFor="title" className="my-2">
            Title
          </label>
          <textarea
            name=""
            type="text"
            id="title"
            placeholder="I will"
            style={{ outline: "none" }}
            className="border border-2 rounded w-100 p-2 bg-transparent"
            rows={2}
          ></textarea>
          <div className="text-end">
            <span style={{ fontSize: "14px" }}>80/80</span>
          </div>
        </div>
        <div className="them-input my-4 mt-0">
          <label htmlFor="theme" className="my-2">
            Theme Selection
          </label>
          <select
            name=""
            type="text"
            id="theme"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          >
            <option value="">Select Theme</option>
            <option value="individual">Individual</option>
            <option value="collective">Collective</option>
          </select>
        </div>
        <div className="them-input my-4">
          <label htmlFor="level" className="my-2">
            Level of course/Consultation
          </label>
          <select
            name=""
            type="text"
            id="theme"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          >
            <option value="">Select level</option>
            <option value="level 1">level 1</option>
            <option value="level 2">level 2</option>
            <option value="Level 3">level 3</option>
          </select>
        </div>
        <div className="them-input my-4">
          <label htmlFor="keyword" className="my-2">
            keyword
          </label>
          <input
            type="text"
            id="keyword"
            placeholder="Enter keywords"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          />
        </div>
        <div className="text-end">
          <span style={{ fontSize: "14px" }}>upto 5 keyword</span>
        </div>
      </form>
    </div>
  );
};

export default SelectionTheme;
