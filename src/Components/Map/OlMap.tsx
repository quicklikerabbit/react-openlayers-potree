import React, { useEffect } from 'react';
import 'ol/ol.css';
import { olMap, getLatLon, getZoom, getCoordinates } from './OlMapService'

export default function OlMap() {
  useEffect(() => {
    olMap.setTarget('map')
    olMap.on('click', (evt) => {
      console.log(getLatLon(evt));
      console.log(getZoom(evt));
      console.log(getCoordinates(evt))
    })
    return () => olMap.setTarget(undefined);
  }, []);

  return (
    <div id="map">
    </div>
  )
}
