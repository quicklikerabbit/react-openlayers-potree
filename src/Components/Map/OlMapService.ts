import { Map, View, MapBrowserEvent } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults } from 'ol/control';
import { transform } from 'ol/proj';
import { Coordinate } from 'ol/coordinate';

export const olMap = new Map({
  target: undefined,
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  controls: defaults({ attribution: false, zoom: false }),
  view: new View({
    center: [-6005420.749222653, 6000508.181331601],
    zoom: 9
  })
});

export const getLatLon = (event: MapBrowserEvent): Coordinate => {
  const coordinates = event.coordinate;
  return transform(coordinates, event.map.getView().getProjection().getCode(), 'EPSG:4326');
}

export const getCoordinates = (event: MapBrowserEvent): Coordinate => {
  return event.coordinate
}

export const getZoom = (event: MapBrowserEvent): number => {
  return event.map.getView().getZoom();
}