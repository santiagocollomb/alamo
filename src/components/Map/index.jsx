import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import googleMapStyles from './customMapStyle';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: -38.979502,
      lng: -67.836512,
    },
    zoom: 17,
  }



  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAZlVWaUMcKuRc4MpN0hJEbFmHWsFW68ms" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={googleMapStyles.mapStyle}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    )
  }
}
 
export default Map;