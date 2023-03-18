import { Color } from "../config/color";
import { createPolygon, createStar } from '../utils/polygon.js'

export class LineService {

  constructor(cavs) {
    this._cxt = cavs.cxt;
    this._cnv = cavs.cnv;
  }

  drawLine(x1y1, x2y2) {
    this._cxt.moveTo(...x1y1)
    this._cxt.lineTo(...x2y2)
    this._cxt.stroke()
  }

  parallelLine(xy) {
    const [x1y1, x2y2, a1b1, a2b2] = xy;
    this._cxt.moveTo(...x1y1)
    this._cxt.lineTo(...x2y2)
    this._cxt.moveTo(...a1b1)
    //this._cxt.lineTo(...a1b1)//折线
    this._cxt.lineTo(...a2b2)
    this._cxt.stroke()
  }

  triangle(xy) {
    const [x1y1, x2y2, a1b1] = xy;
    this._cxt.moveTo(...x1y1)
    this._cxt.lineTo(...x2y2)
    this._cxt.lineTo(...a1b1)//折线
    this._cxt.lineTo(...x1y1)
    this._cxt.stroke()
  }

  lineRect(xy) {
    const [a1b1, a2b2, c1d1, c2d2] = xy;
    this._cxt.moveTo(...a1b1)
    this._cxt.lineTo(...a2b2)
    this._cxt.lineTo(...c1d1)//折线
    this._cxt.lineTo(...c2d2)
    this._cxt.lineTo(...a1b1)
    this._cxt.stroke()

  }

  /*这三种方法参数是相同的，不同在于实现效果方面。其中strokeRect()和
   * fillRect()这两个方法在调用之后，会立即把矩形绘制出来。而rect()方法
   * 在调用之后，并不会把矩形绘制出来。只有在使用rect()方法之后再调用stroke()或者fill()方法，才会把矩形绘制出来。*/
  strokeRect(xy) {
    //const [x, y, width, height] = xy;
    this._cxt.strokeStyle = Color.RED;
    this._cxt.strokeRect(...xy);
  }

  fillRect(xy) {
    this._cxt.fillStyle = Color.HOT_PINK;
    this._cxt.fillRect(...xy)
  }

  rect(xy) {
    this._cxt.fillStyle = 'rgba(0, 0, 255, .3)'
    this._cxt.rect(...xy)
    this._cxt.fill()
  }

  clearRect(xy) {
    this._cxt.clearRect(...xy)
  }

  clearCanvas() {
    this._cxt.clearRect(0, 0, this._cnv.width, this._cnv.height)
  }

  /*Arrow*/
  arrow() {
    this._cxt.moveTo(40, 60);
    this._cxt.lineTo(100, 60);
    this._cxt.lineTo(100, 30);
    this._cxt.lineTo(150, 75);
    this._cxt.lineTo(100, 120);
    this._cxt.lineTo(100, 90);
    this._cxt.lineTo(40, 90);
    this._cxt.lineTo(40, 60);
    this._cxt.stroke();
  }

  polygonTriangle() {
    createPolygon(this._cxt, 3, 100, 175, 50);
    this._cxt.fillStyle = Color.HOT_PINK;
    this._cxt.fill();
  }

  polygonSquare() {
    createPolygon(this._cxt, 4, 210, 175, 50)
    this._cxt.fill()
  }

  polygonSpade() {
    createPolygon(this._cxt, 5, 310, 175, 50)
    this._cxt.fill()
  }

  polygonHexagon() {
    createPolygon(this._cxt, 6, 450, 175, 50)
    this._cxt.fill()
  }

  polygonStar() {
    createStar(this._cxt)
  }





}
