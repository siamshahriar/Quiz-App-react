import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Options from "../Options/Options";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Question.css";

const Question = ({ que }) => {
  const { id, options, question, correctAnswer } = que;
  
  const notify = (correct) => toast('Correct Answer =>> '+correct);
  
  
  const correctChecker = (selectedOption) =>{
    if(correctAnswer === selectedOption){
      const notify = () => toast("Correct !")
      // console.log(notify);
      notify();

    }
    else{
      const notify = () => toast("Wrong !")
      notify();
      // console.log(notify);
    }
  }
  return (
    <div className="question">
      <div className="eyebutton">
        <button onClick={()=>notify(correctAnswer)}>
          <FontAwesomeIcon className="eyeIcon" icon={faEye}></FontAwesomeIcon>
        </button>
      </div>

      <p className="eachQuestion">Question: {question}</p>
      <div className="optionsContainer">
        {options.map((option) => (
          <Options correctChecker={correctChecker} key={option} option={option}></Options>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Question;
