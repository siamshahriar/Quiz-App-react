import React from 'react';
import { Link } from 'react-router-dom';
import './EachQuiz.css';

const EachQuiz = ({quiz}) => {
    const {logo, name} = quiz;
    return (
        <div className='eachQuiz'>
            <img src={logo} alt="" />
            <div className='eachQuiz-details'>
                <span>{name}</span>
                <Link>Start Practice</Link>
            </div>
        </div>
    );
};

export default EachQuiz;