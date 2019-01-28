import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css';

const Marker = ({ text }) => <div className="marker">{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 53.902496,
      lng: 27.561481
    },
    zoom: 6
  };

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBB4EA5WgU-7c5ady2VlKggOfol7svDjwM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Marker
            lat={this.props.data.lat}
            lng={this.props.data.lng}
            text={''}
        />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;