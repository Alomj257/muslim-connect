import React from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";

const DatePicker = ({ date, setDate }) => {
  return (
    <>
      <DateRangePicker
        placeholder="Select Range"
        value={date}
        className="w-100"
        style={{ outline: "none" }}
        onChange={setDate}
      />
    </>
  );
};

export default DatePicker;
