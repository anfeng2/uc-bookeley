import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

const url = "http://localhost:3000/library/";


const Favorite = () => {

    // const [Libs, setLibs] = useState(["Doe Library", "Moffitt Library", "Main Stacks", "VLSB", "East Asian Library", "Engineering Library", "Environmental Design Lib", "Chemistry Library"])

    // const deleteLib = (lib) => {
    //     const newList = Libs.filter((item) => item !== lib);
    //     setLibs(newList);
    // };

    const [libraries, setLibraries] = useState([]);

    function handleClick(event) {
        const button = event.target;
        console.log(button);
        const parent = button.parentNode;
        console.log(parent);
        axios.delete(url + "unfavorite/" + parent.id);
        parent.remove();
    }

    async function LoadFavorited () {
        try {
            const libraryNames = []
            const response = await axios.get(url + "saved");
            const data = response.data;
            console.log(data);
            for (let i=0; i < data.length; i++) {
                libraryNames.push(data[i].libraryName);
            }
            const listItems = libraryNames.map((libraryName, index) =>
                <li key={index} id={libraryName}>{libraryName} <button onClick={(e) => handleClick(e)}>Remove</button> </li>
            );
            console.log(listItems);
            setLibraries(listItems);

            // return (
                // <ul>
                //     {listItems}
                // </ul>
            // );
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        LoadFavorited();
    }, []);


    return (
        <div>
            <h1>Favorite Libraries</h1>
            <ul>
                {libraries}
            </ul>
            {/* <div>
                {libraries.map(c => {
                    return <div class="hour row">
                            <button class="delete" onClick={deleteLib(c)}>X</button>
                            <h2> {c} </h2>
                        </div> })};
            </div> */}
        </div>

    );
}
export default Favorite;