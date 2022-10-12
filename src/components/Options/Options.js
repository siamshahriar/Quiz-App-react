import React from "react";
import './Options.css';

const Options = ({ option }) => {
  return (
        <div className="eachOption">
            {/* <p>{option}</p> */}
            <input type="radio" id="html" value="HTML"/>
  <label for="html">{option}</label><br></br>
        </div>
    );
};

export default Options;



