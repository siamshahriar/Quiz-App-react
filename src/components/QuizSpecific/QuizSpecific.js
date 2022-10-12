import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizSpecific = () => {
    const quizSpecificDetails = useLoaderData();
    const {id, name, questions, total} = quizSpecificDetails.data;
    return (
        <div className='quizSpeContainer'>
            <h2>Quiz of {name}</h2>
            <div>
                {
                    questions.map( que => <Question></Question>)
                }
            </div>
        </div>
    );
};

export default QuizSpecific;