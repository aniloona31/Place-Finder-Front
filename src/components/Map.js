import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 30.766208, lng: 76.785308 }}
        />
    )
}

//to load other google map libraries i need to wrap it inside someother function
//we are going to wrap two things around it.

const WrappedMap = withScriptjs(withGoogleMap(Map));

function GMap() {
    const key = "";
    return (
        <div className='top-20' style={{height:'100vh', width:'100vw'}}>
            {/* add API key here */}
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
                loadingElement={<div style={{height : '100%'}}/>}
                containerElement={<div style={{height : '100%'}}/>}
                mapElement={<div style={{height : '100%'}}/>}
            />
        </div>
    )
}

export default GMap
