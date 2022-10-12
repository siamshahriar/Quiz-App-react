import React from "react";
import { useLoaderData } from "react-router-dom";
import EachQuiz from "../EachQuiz/EachQuiz";
import "./Topics.css";

const Topics = () => {
  const quizTopics = useLoaderData();
  // console.log(quizTopics.data.length);
  return (
    <div className="quizListViewContainer">
      <div className="quizListContainer">
        {quizTopics.data.map((quiz) => (
          <EachQuiz key={quiz.id} quiz={quiz}></EachQuiz>
        ))}
      </div>
    </div>
  );
};

export default Topics;
