import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { BaseMap } from './baseMap'
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Fill, Icon, Text, Style, Stroke } from 'ol/style';
import Overlay from 'ol/Overlay';
import Polygon from 'ol/geom/Polygon';
import GeoJSON from "ol/format/GeoJSON";
import mapConfig from "@/config/map.config";
import Draw, { createBox } from 'ol/interaction/Draw';
import ModifyFeature from 'ol-ext/interaction/ModifyFeature';


export class MapService {
  map;
  layerList;
  baseMap;
  draw;
  drawSource;

  constructor() { }

  initMap(mapEle) {
    const featureLayer = new VectorLayer({
      source: new VectorSource()
    });
    this.drawSource = new VectorSource({ wrapX: false });
    const drawLayer = new VectorLayer({
      className: 'drawLayer',
      source: this.drawSource,
    });

    this.layerList = {
      feature: featureLayer,
      collection: null,
      drawLayer
    };
    this.baseMap = new BaseMap();
    this.map = this.baseMap.initBaseMap(mapEle);
    this.map.addLayer(featureLayer);
    this.map.addLayer(drawLayer);
    return this.map
  }

  addMapListener(callback) {
    this.map.on('singleclick', ($event) => {
      callback(null)
      this.map.forEachFeatureAtPixel(
        $event.pixel,
        (feature) => {
          callback(feature);
        },
        {
          hitTolerance: 20
        }
      );
    });
  }

  addMapContextmenuEvent(callback) {
    this.map.on("contextmenu", ($event) => {
      $event.preventDefault();
      callback($event)
      this.map.forEachFeatureAtPixel($event.pixel, (featuer) => {
        callback(featuer)
      });
    });
  }

  drawPointFeature(list = []) {
    const features = list.map((data) => {
      const _coordinate = data.coord;
      const feature = new Feature({
        geometry: new Point(
          _coordinate
        ),
        id: data.id,
      });
      feature.setId(data.id);
      feature.setProperties({ id: data.id, coordinate: data.coord });
      feature.setStyle(new Style({
        image: new Icon({
          anchor: [0.5, 0.9],
          imgSize: [40, 40],
          src: require('@/assets/images/marker.png'),
          //src: require('../../assets/images/marker.png'),
          rotateWithView: false,
        })
      }));
      return feature;

    });
    const featureSource = this.layerList.feature.getSource();
    featureSource.addFeatures(features);
  }

  clearLayer(layerName) {
    this.layerList[layerName].getSource().clear();
  }

  clearAllFeature() {
    this.clearLayer('feature');
  }

  clearAllCollection() {
    if (!this.layerList['collection']) return
    this.clearLayer('collection')
  }

  setMapCenterAnimate(position) {
    try {
      this.map.getView().animate({
        center: position
      });
    } catch (e) { console.log(e); }
  }

  setMapCenter(position) {
    try {
      this.map
        .getView()
        .setCenter(position);
    } catch (e) { console.log(e); }
  }

  addOverlay(element, detail) {
    if (!detail.coordinate) return;
    const popup = new Overlay({
      element,
      offset: [18, -5]
    });
    const coordinate = [...detail.coordinate];
    popup.setPosition(coordinate);
    this.map.addOverlay(popup);
  }

  removeOverlay(element) {
    this.map.removeOverlay(element);
  }

  removeFeature(...ids) {
    if (!this.layerList) return;
    const featureSource = (this.layerList.feature).getSource();
    if (ids.length === 0) {
      featureSource.clear();
    } else {
      ids.forEach((x) => {
        if (x) {
          const feature = featureSource.getFeatureById(x);
          feature && featureSource.removeFeature(feature);
        }
      });
    }
  }

  drawPolygonFeature(featureId, coordinates, data) {
    const _box = new Polygon(coordinates);
    const f = new Feature({
      geometry: _box,
    });
    f.setStyle(new Style({  // 设置样式
      fill: new Fill({
        color: 'rgba(211, 223, 235, 0.5)'
      }),
      stroke: new Stroke({
        color: '#1D70FF'
      }),
      text: new Text({
        text: featureId,
        textAlign: 'center',
        fill: new Fill({
          color: '#1D70FF'
        })
      })
    }));
    f.set('fData', data);
    f.setId(featureId);
    this.layerList.feature.getSource().addFeature(f);
  }

  drawFeatureCollection(collectionsData) {
    const vectorSource = new VectorSource({
      features: new GeoJSON({ featureProjection: mapConfig.map_projection }).readFeatures(collectionsData),
    });

    const style = new Style({
      stroke: new Stroke({
        color: "#1D70FF",
        lineDash: [4],
        width: 3,
      }),
      fill: new Fill({
        color: "rgba(211, 223, 235, 0.5)",
      }),
    })
    const layer = new VectorLayer({
      source: vectorSource,
      style: style,
    });
    this.layerList.collection = layer;
    this.map.addLayer(layer);

  }

  drawMapShape(type, callback) {
    const this_ = this;
    this.map.removeInteraction(this.draw);
    //清空所有
    this.drawSource.clear();
    if (type !== '') {
      // type = 'Circle';
      if (type === 'Box') {
        type = 'Circle';
        //geometryFunction = createBox();
        this.draw = new Draw({
          source: this.drawSource,
          type,
          geometryFunction: createBox()
        });
      } else {
        this.draw = new Draw({
          source: this.drawSource,
          type
        });
      }
      this.draw.on('drawstart', function(event) {
        if (this_.drawSource.getFeatures().length !== 0) {
          this_.drawSource.clear();
        }
      });
      this.draw.on('drawend', (e) => {
        callback(e.feature.getGeometry(), type);
      });
      this.map.addInteraction(this.draw);
    } else {
      this.map.removeInteraction(this.draw);
    }
  }

  featureModify() {
    //const this_ = this;
    this.map.removeInteraction(this.draw);
    //清空所有
    this.layerList.drawLayer.getSource()
      .addFeature(new Feature(
        new Polygon([[[108.91781849029286, 34.22521444584457], [108.89684302404538, 34.19811347401231], [108.89068754490928, 34.18988258472677], [108.93779718526177, 34.187676574711055], [108.94610054388981, 34.18815933136642], [108.94660634120373, 34.22278002977957], [108.92317354470337, 34.22275232777307], [108.91781849029286, 34.22521444584457]]])));

    //this.drawSource.clear();
    this.draw = new ModifyFeature({
      sources: this.drawSource,
    });
    this.draw.on([ 'modifyend' ], function(e) {
      // First modify feature
      var f = e.features[0];
      var info = e.type + ' ' + (e.features.length || '??') + ' feature(s) : ';
      info += (f ? f.getGeometry().getType() : '');
      if (f && f.getGeometry().flatCoordinates) info += ' ' + (f ? (f.getGeometry().flatCoordinates.length / 2) : '?') + ' point(s)'
      console.log('.options .', info)
    });

    /*
        this.draw.on('drawstart', function(event) {
          if (this_.drawSource.getFeatures().length !== 0) {
            this_.drawSource.clear();
          }
        });
        this.draw.on('drawend', (e) => {
          callback(e.feature.getGeometry(), type);
        });
    
        */
    this.map.addInteraction(this.draw);
    //  this.map.removeInteraction(this.draw);
  }

  clearDrawShape(isClearAll = false) {
    if (isClearAll) {
      this.drwaSource.clear();
    }
    this.map.removeInteraction(this.draw);
  }

}

