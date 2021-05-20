import React from "react";
import MapMarker from "../../util/map_marker";
import { withRouter } from 'react-router-dom';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MapMarker = new MapMarker(this.map);
    this.MapMarker.updateMarkers(this.props.businesses);
  }

  componentDidUpdate() {
    this.MapMarker.updateMarkers(this.props.businesses);
  }

  render() {
    return <div className='map' ref={(map) => (this.mapNode = map)} />;
  }
}

export default Map;
