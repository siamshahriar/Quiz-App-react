import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './EachQuiz.css';

const EachQuiz = ({quiz}) => {
    const {logo, name} = quiz;
    return (
        <div className='eachQuiz'>
            <img src={logo} alt="" />
            <div className='eachQuiz-details'>
                <span>{name}</span>
                <Link>Start Practice<FontAwesomeIcon className='directionIcon' icon={faArrowRight} /></Link>
            </div>
        </div>
    );
};

export default EachQuiz;