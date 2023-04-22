import React from 'react';
import '../Styles/Home.css';
import Card from './Card';
import banner_img from '../lib_img/banner_img.png';
import {  Link } from "react-router-dom";


const Home = () => {
    const linkStyle = {
        // padding: "10px",
        textDecoration: "none",
        color: 'black'
    };

    return (
        <div>
            <div>
                <img id = "full_screen" src={banner_img} alt="people walking in front of Doe Library"></img>
                <h1 class="title"> Welcome to UC Berkeley's Libraries</h1>
                <Link id = "button" to="/mapfeed" style={linkStyle}>Find a library</Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h2>
                Explore our libraries
            </h2>
            <div>
                <Card></Card>
            </div>

        </div>

    );
}
export default Home;
