import { CanvasService } from "./canvasService";

export class LineService {

  constructor(id) {
    const cavs = new CanvasService(id)
    this._cxt = cavs.cxt;
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
    const [x1y1, x2y2, a1b1 ] = xy;
    this._cxt.moveTo(...x1y1)
    this._cxt.lineTo(...x2y2)
    this._cxt.lineTo(...a1b1)//折线
    this._cxt.lineTo(...x1y1)
    this._cxt.stroke()
  }

  rect(xy){
    const [a1b1, a2b2, c1d1, c2d2 ] = xy;
    this._cxt.moveTo(...a1b1)
    this._cxt.lineTo(...a2b2)
    this._cxt.lineTo(...c1d1)//折线
    this._cxt.lineTo(...c2d2)
    this._cxt.lineTo(...a1b1)
    this._cxt.stroke()

  }

}
