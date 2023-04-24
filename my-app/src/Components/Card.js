import React from 'react';
import '../Styles/Card.css';
import axios from 'axios';

const url = "http://localhost:3000/library/favorite";


const Card = (props) => {
    const pic = props.pic
    const library = props.library
    const lib_json = props.lib_json
    const hours = lib_json["hours"]
    const start = lib_json["start"]
    const end = lib_json["end"]
    const address = lib_json["address"]

    const today_hr = new Date().getHours()

    function Open_Closed () {
        if ((today_hr >= start) && (today_hr < end)) {
          return <div class="hour">
                    <p> {hours} </p>
                    <div class="right">
                        <p> Open </p>
                        <span class="open_dot"></span>
                    </div>
                </div>;
        } else if ((start > end) && ((today_hr < end) || (today_hr >= start))) {
            return <div class="hour">
                      <p> {hours} </p>
                      <div class="right">
                          <p> Open </p>
                          <span class="open_dot"></span>
                      </div>
                  </div>;
        } else {
            return <div class="hour">
                    <p> {hours} </p>
                    <div class="right">
                        <p> Closed </p>
                        <span class="closed_dot"></span>
                    </div>
                </div>;
        }
    }

    function handleClick() {
        console.log("Button clicked");
        axios.post(url, {
            libraryName: library
        }).then((result) => {
            console.log(result);
        })
    }

    return (
        <div>
            <div class="card">
                <img src={pic} alt={library}></img>
                <div class="hour">
                    <h2> {library} </h2>
                    <button class="button fa fa-star" onClick={() => handleClick()}>
                    </button>
                </div>
                <Open_Closed></Open_Closed>
                <p>{address}</p>

                {/* <button onClick={() => handleClick()}>Favorite</button> */}
            </div>
        </div>

    );
}
export default Card;