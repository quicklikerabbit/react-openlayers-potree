import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { olMap, getLatLon, getZoom, getCoordinates } from './OlMapService'

export default function OlMap() {
  let mapDiv = useRef<HTMLInputElement>(null);
  useEffect(() => {
    olMap.setTarget(mapDiv.current as HTMLElement)
    olMap.on('click', (evt) => {
      console.log(getLatLon(evt));
      console.log(getZoom(evt));
      console.log(getCoordinates(evt))
    })
    return () => olMap.setTarget(undefined);
  }, []);

  return (
    <div id="map" ref={mapDiv}>
    </div>
  )
}
