import Map from 'ol/Map';
import View from 'ol/View';
import * as olControl from 'ol/control';
import { Tile as TileLayer } from 'ol/layer';
import XYZ from 'ol/source/XYZ';
import mapConfig, { zoomConfig } from '@/config/map.config';


export class BaseMap {
  map;
  view;
  baseLayer = [];

  constructor() { }

  initBaseMap(target) {
    const _this = this;

    this.view = new View({
      center: mapConfig.map_center,
      zoom: zoomConfig.zoom,
      projection: mapConfig.map_projection,
      maxZoom: zoomConfig.max,
      minZoom: zoomConfig.min
    });

    this.baseLayer.push(new TileLayer({
      source: new XYZ({
        url: mapConfig.map_url
      })
    }));


    this.map = new Map({
      controls: olControl.defaults({ attribution: false, zoom: false, rotate: false }),
      //.extend([
      // new olControl.ScaleLine(),
      //]),
      target: target,
      layers: this.baseLayer,
      view: _this.view
    });
    return this.map;
  }
}

