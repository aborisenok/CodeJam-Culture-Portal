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
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Marker
            lat={'53.902496'}
            lng={'27.561481'}
            text={''}
        />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;

//Унеча, Брянская область 52.845115, 32.670676
//Ракушево 54.216204, 29.775361
//Витебск 55.183672, 30.204791