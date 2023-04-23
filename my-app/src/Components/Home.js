import React from 'react';
import '../Styles/Home.css';
import Card from './Card';
import banner_img from '../lib_img/banner_img.png';
import doe from '../lib_img/doe.png';
import moffitt from '../lib_img/moffitt.png';
import main_stacks from '../lib_img/main_stacks.png';
import vlsb from '../lib_img/VLSB.png';
import east_asian from '../lib_img/east_asian.png';
import engineering from '../lib_img/engineering.png';
import environ_design from '../lib_img/environ_design.png';
import chemistry from '../lib_img/chemistry.png';

import lib_info from '../lib_info.json'

import {  Link } from "react-router-dom";


const Home = () => {
    const linkStyle = {
        textDecoration: "none",
        color: 'black'
    };

    return (
        <div>
            <div>
                <img id = "full_screen" src={banner_img} alt="people walking in front of Doe Library"></img>
                <h1 class="title"> Welcome to UC Berkeley's Libraries</h1>
                <Link id = "button" to="/uc-bookeley/mapfeed" style={linkStyle}>Find a library</Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h2>
                Explore our libraries
            </h2>
            <div class="row">
                <div class="column">                 
                    <Card pic={doe} library="Doe Library" lib_json={lib_info["Doe"]}></Card>
                </div>
                <div class="column">
                    <Card pic={moffitt} library="Moffitt Library" lib_json={lib_info["Moffitt"]}></Card>
                </div>
                <div class="column">
                    <Card pic={main_stacks} library="Main Stacks" lib_json={lib_info["Main Stacks"]}></Card> 
                </div>
                <div class="column">
                    <Card pic={vlsb} library="VLSB" lib_json={lib_info["VLSB"]}></Card>
                </div>
            </div>

            <div class="row">
                <div class="column">                 
                    <Card pic={east_asian} library="East Asian Library" lib_json={lib_info["East Asian"]}></Card>
                </div>
                <div class="column">
                    <Card pic={engineering} library="Engineering Library" lib_json={lib_info["Engineering"]}></Card>
                </div>
                <div class="column">
                    <Card pic={environ_design} library="Environmental Design Lib" lib_json={lib_info["Environmental Design"]}></Card>
                </div>
                <div class="column">
                    <Card pic={chemistry} library="Chemistry Library" lib_json={lib_info["Chemistry"]}></Card>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>

        </div>

    );
}
export default Home;
