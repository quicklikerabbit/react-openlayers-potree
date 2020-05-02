import React, { useEffect } from 'react';
import 'ol/ol.css';
import { olMap } from './OlMapService'

export default function OlMap() {
  useEffect(() => {
    olMap.setTarget('map')
  }, []);

  return (
    <div id="map">
    </div>
  )
}
