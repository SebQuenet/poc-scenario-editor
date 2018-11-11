import React from 'react'
import { Map as LeafletMap , Marker, Popup, TileLayer } from 'react-leaflet'

export default class EditorMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 37.7467,
      lng: 23.4307,
      zoom: 13
    }
  }

  handleClick = ({latlng: {lat, lng}}) => {
    console.log(lat);
    console.log(lng);
  }

  handleMarker = (event) => {
    debugger;
  };

  componentDidUpdate() {

  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom} onClick={this.handleClick}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker placeId='12345' placeName="Temple d'Apollon" position={position} onClick={this.handleMarker}>
          <Popup>
            Temple d'Apollon
            </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}