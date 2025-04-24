import React from "react";
import { FaRegClock } from "react-icons/fa";

const SecondsCounter = ({ seconds }) => {
  const padded = String(seconds).padStart(6, "0").split("");

  return (
    <div className="counter-wrapper">
      <div className="counter-digit icon">
        <FaRegClock />
      </div>
      {padded.map((digit, index) => (
        <div className="counter-digit" key={index}>{digit}</div>
      ))}
    </div>
  );
};

export default SecondsCounter;
