import React, { useState } from 'react';
// import{ Link} from 'react-router-dom';
import "./navbar.css";
import {FaBars} from "react-icons/fa"
import{ImCross} from "react-icons/im"
import { HashLink as Link } from 'react-router-hash-link';


const Navber = () => {
    const [mobile, setMobile]= useState(false)
  return (
    <nav className='navbar'>
        <h3 className='logo text-blue-500 uppercase '>DonCagey Exchange</h3>
        <ul className={mobile? "nav-links-mobile":"nav-links"} onClick={ ()=> setMobile(false)}>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/#about'}><li>Motivation</li></Link>
                <Link to={'/#services'}><li>Services</li></Link>
                <Link to={'/Contact '}><li>Contact</li></Link>
                {/* <Link to={'/order'}><li>Blog</li></Link> */}
                {/* <Link to={'/contact'}><li>Testamonies</li></Link> */}
                <Link to={'/#footer'}><li>Footer</li></Link>
        </ul>
        <button className='mobile-icon' onClick={()=> setMobile(!mobile)}>
            {mobile? <ImCross /> : <FaBars />}
        </button>
    </nav>
  );
}

export default Navber;
