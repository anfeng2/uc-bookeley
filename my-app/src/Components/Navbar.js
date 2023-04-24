import '../Styles/Navbar.css';
import logo from '../logo_white.png';
import React from 'react';
import {  Link } from "react-router-dom";


const Navbar = () => {
    const linkStyle = {
        textDecoration: "none",
        color: 'white',
        margin: '10px'
    };

    return (
        <div class="navbar">
            <Link to="/uc-bookeley/" id = "logo" style={linkStyle}>
                <img src={logo} alt="logo of a white bear with blue nose" height="40"></img>
                <h1>uc bookeley</h1>
            </Link>
            <div id="links">
                <Link to="/uc-bookeley/" style={linkStyle} id="links">Home</Link>
                <Link to="/uc-bookeley/mapfeed" style={linkStyle} >Interactive Map</Link>
                <Link to="/uc-bookeley/favoritedLibraries" style={linkStyle}>Favorited Libraries</Link>
            </div>
        </div>
    );
}

export default Navbar;