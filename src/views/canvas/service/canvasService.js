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
    let cnv = this.$$()
    this.cxt = cnv.getContext('2d')
  }

  drawLine() {
    this.cxt.moveTo(50, 100)
    this.cxt.lineTo(150, 50)
    this.cxt.stroke()
  }
}
