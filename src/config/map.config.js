const mapConfig = {
  map_url: "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
  //map_url:  "/map" + "/{z}/{x}/{y}.png",
  map_projection: "EPSG:4326",
  map_center: [108.926593, 34.213389],
}
export const CONFIG = {
  gaode: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
};

export const unknownImg = 'assets/images/map/unknown.png';

export const STARTCENTER = [114.157153, 30.489362];

export const zoomConfig = {
  max: 18,
  min: 5
};

export default mapConfig;


