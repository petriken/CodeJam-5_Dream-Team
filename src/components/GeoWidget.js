import React, { Component } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import marker1 from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker1,
  shadowUrl: markerShadow,
});

class GeoWidget extends Component {
  render() {
    const {
      height,
      markers,
      center,
      zoom,
    } = this.props;
    return (
      <Map center={[center.lat, center.lng]} zoom={zoom} style={{ height }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          markers.map((marker, index) => (
            <Marker key={index} position={[marker.lat, marker.lng]}>
              {
                marker.message
                && <Popup>
                  {marker.message}
                </Popup>
              }
            </Marker>
          ))
        }
      </Map>
    );
  }
}

GeoWidget.defaultProps = {
  height: '400px',
  markers: [],
  center: {
    lat: 53.9028096,
    lng: 27.5560955,
  },
  zoom: 13,
};

GeoWidget.propTypes = {
  height: PropTypes.string,
  markers: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    message: PropTypes.string,
  })).isRequired,
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  zoom: PropTypes.number,
};

export default GeoWidget;
