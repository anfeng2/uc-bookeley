import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

const url = "http://localhost:3000/library/";

const FavoritedLibraries = () => {

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
            <h1>
            Favorited Libraries
            </h1>
            <ul>
                {libraries}
            </ul>
        </div>
        
    );
}
export default FavoritedLibraries;