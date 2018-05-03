import React from 'react';

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const GoogleMap = (props) => {
  return (
    <Map google={props.google}
         initialCenter={{
           lat: props.lat,
           lng: props.lng
         }}>
      <Marker onClick={this.onMarkerClick}/>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAx51eFTFlsjeblP2yEgWLzMLU61S28JFU'
})(GoogleMap)
