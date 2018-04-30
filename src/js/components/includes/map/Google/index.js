import React from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarkerIcon from '../../../../../assets/svg/mapmarker.svg'
import styles from '../../../../../sass/includes/map/Map/map.scss'

class GoogleMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      center: {
        lat: props.lat,
        lng: props.lng
      },
      zoom: 11
    }
  }

  render() {
    return (
      <GoogleMapReact
        center={this.state.center}
        zoom={this.state.zoom}>
        <div className="map-Marker" lat={this.state.center.lat} lng={this.state.center.lng}>
          <MapMarkerIcon/>
        </div>
      </GoogleMapReact>
    )
  }
}

export default GoogleMap
