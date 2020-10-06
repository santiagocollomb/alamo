import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import googleMapStyles from './customMapStyle';
import Marker from '../../assets/a.svg'

const MapMarker = _props => <Marker className="pulse" />
 
class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  static defaultProps = {
    center: {
      lat: -38.977467,
      lng: -67.835612,
    },
    zoom: 17,
  }

  handleToggleOpen = () => {
    this.setState({
      isOpen: true,
    })
  }

  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAZlVWaUMcKuRc4MpN0hJEbFmHWsFW68ms", language: 'es' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={googleMapStyles.mapStyle}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
        >
          <MapMarker
            lat={-38.977467}
            lng={-67.835612}
            className="pulse"
            onClick={() => this.handleToggleOpen()}
          />
        </GoogleMapReact>
      </div>
    )
  }
}
 
export default Map;