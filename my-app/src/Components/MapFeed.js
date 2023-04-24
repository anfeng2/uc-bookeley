import React from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "../App.css";

const MapFeed = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });
      console.log(isLoaded);
    const center = useMemo(() => ({ lat: 37.8719, lng: -122.2585 }), []);

    return (
    <div className="MapFeed">
        {!isLoaded ? (
        <h1>Loading...</h1>
        ) : (
        <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={17}
        >
            <Marker position={{ lat: 37.8719, lng: -122.2585 }} />
        </GoogleMap>
        )}
    </div>
      );
}
export default MapFeed;