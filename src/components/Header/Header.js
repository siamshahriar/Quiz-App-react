import React, { useState } from "react"
import "./header.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Header = () => {
    const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>CodyQuiz</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Topics</li>
          </Link>
          <Link to='/statistics' className='about'>
            <li>Statistics</li>
          </Link>
          <Link to='/blog' className='services'>
            <li>Blog</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
};

export default Header;