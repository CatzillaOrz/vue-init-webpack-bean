export class CanvasService {
  cxt;

  constructor(id) {
    this.id = id;
    this.init()
  }

  $$() {
    return document.getElementById(this.id)
  }

  init() {
    const cnv = this.$$()
    this.cxt = cnv.getContext('2d')
  }

  drawLine(x1y1, x2y2) {
    this.cxt.moveTo(...x1y1)
    this.cxt.lineTo(...x2y2)
    this.cxt.stroke()
  }

  parallelLine(xy){
    const [x1y1, x2y2, a1b1, a2b2] = xy;
    this.cxt.moveTo(...x1y1)
    this.cxt.lineTo(...x2y2)
    this.cxt.moveTo(...a1b1)
    this.cxt.lineTo(...a2b2)
    this.cxt.stroke()
  }
}
