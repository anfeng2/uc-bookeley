import '../Styles/Navbar.css';
import logo from '../logo_white.png';
import React from 'react';
import {  Link } from "react-router-dom";


const Navbar = () => {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
        
    };

    return (
        <div class="navbar">
            <div id = "logo">
                <img src={logo} alt="logo of a white bear with blue nose" height="40"></img>
                <h1>uc bookeley</h1>
            </div>
            <div id="links">
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/mapfeed" style={linkStyle}>Interactive Map</Link>
            </div>
        </div>
    );
}

export default Navbar;