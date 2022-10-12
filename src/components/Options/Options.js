import React from "react";
import "./Options.css";

const Options = ({ option, correctChecker }) => {
  return (
    <div onClick={() => correctChecker(option)} className="eachOption">
      <p>{option}</p>
    </div>
  );
};

export default Options;
