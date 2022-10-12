import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Options from "../Options/Options";
import "./Question.css";

const Question = ({ que }) => {
  const { id, options, question, correctAnswer } = que;
  console.log(options);
  return (
    <div className="question">
      <button>
        <FontAwesomeIcon className="eyeIcon" icon={faEye}></FontAwesomeIcon>
      </button>
      <p className="eachQuestion">Question: {question}</p>
      <div className="optionsContainer">
        {options.map((option) => (
          <Options key={option} option={option}></Options>
        ))}
      </div>
      <div className="btn-container">
        <button className="check-btn">Check</button>
      </div>
    </div>
  );
};

export default Question;
