import React, { useState } from "react";
import ReactQuill from "react-quill";
const ContentGigs = () => {
  const [value, setValue] = useState("");
  return (
    <div className="mb-4">
      <h4 className="fw-bold my-4">Content</h4>
      <label htmlFor="description fw-semibold pb-2">Description</label>
      <ReactQuill
        theme="snow"
        id="about"
        style={{ height: "50vh" }}
        className="bg-white rounded"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default ContentGigs;
