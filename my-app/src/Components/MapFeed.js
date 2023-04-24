import React from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import '../Styles/MapFeed.css';

const MapFeed = () => {
    const mapStyles = {
        height: "100%",
        width: "100%"
    }

    return (
        <>
            <div className="container">
                <div className="filters-container">
                    <div className="filters">
                        <h2>Filters</h2>
                        <ul>
                            <li>
                                <input type="checkbox" name="food-drink-allowed" id="food-drink-allowed"></input>
                                <label htmlFor="food-drink-allowed">food/drink allowed</label>
                            </li>
                            <li>
                                <input type="checkbox" name="cal-id-not-required" id="cal-id-not-required"></input>
                                <label htmlFor="cal-id-not-required">Cal ID not required</label>
                            </li>
                            <li>
                                <input type="checkbox" name="quiet-study" id="quiet-study"></input>
                                <label htmlFor="quiet-study">quiet study</label>
                            </li>
                            <li>
                                <input type="checkbox" name="room-reservations" id="room-reservations"></input>
                                <label htmlFor="room-reservations">room reservations</label>
                            </li>
                            <li>
                                <input type="checkbox" name="printing" id="printing"></input>
                                <label htmlFor="printing">printing</label>
                            </li>
                            <li>
                                <input type="checkbox" name="open-now" id="open-now"></input>
                                <label htmlFor="open-now">open now</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="map">
                    <LoadScript googleMapApiKey="API_KEY_HERE">
                        <GoogleMap mapContainerStyle={mapStyles} zoom={14}
                            center={{ lat: 37.8716, lng: -122.2727 }}></GoogleMap>
                    </LoadScript>
                </div>
            </div>

        </>
    );
}
export default MapFeed;