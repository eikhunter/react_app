import React from 'react';
import GoogleMapReact from 'google-map-react'

class GoogleMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      center: { lat: props.lat, lng: props.lng },
      zoom: 12
    }
  }

  render() {
    return (
      <GoogleMapReact
        center={this.state.center}
        zoom={this.state.zoom}>
        <div className="place" lat={60.955413} lng={30.337844}>MyPlace</div>
      </GoogleMapReact>
    )
  }
}

export default GoogleMap
