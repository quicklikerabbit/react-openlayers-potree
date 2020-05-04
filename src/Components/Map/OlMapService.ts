import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults } from 'ol/control';

export const olMap = new Map({
  target: undefined,
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  controls: defaults({ attribution: false, zoom: false }),
  view: new View({
    center: [0, 0],
    zoom: 0
  })
});