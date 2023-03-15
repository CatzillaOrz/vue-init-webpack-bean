import { CanvasService } from "./canvasService";

export class LineService {
  cxt;

  constructor(id) {
    const cavs = new CanvasService(id)
    this.cxt = cavs.cxt;
  }

  drawLine(x1y1, x2y2) {
    this.cxt.moveTo(...x1y1)
    this.cxt.lineTo(...x2y2)
    this.cxt.stroke()
  }

  parallelLine(xy) {
    const [x1y1, x2y2, a1b1, a2b2] = xy;
    this.cxt.moveTo(...x1y1)
    this.cxt.lineTo(...x2y2)
    this.cxt.moveTo(...a1b1)
    //this.cxt.lineTo(...a1b1)//折线
    this.cxt.lineTo(...a2b2)
    this.cxt.stroke()
  }

  triangle(xy) {
    const [x1y1, x2y2, a1b1, a2b2] = xy;
    this.cxt.moveTo(...x1y1)
    this.cxt.lineTo(...x2y2)
    this.cxt.lineTo(...a1b1)//折线
    this.cxt.lineTo(...a2b2)
    this.cxt.stroke()
  }

}
