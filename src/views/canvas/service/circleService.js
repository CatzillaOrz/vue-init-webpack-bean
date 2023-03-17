import { CanvasService } from "./canvasService";
import { drawCircle } from "../utils/circle";
import { Color } from "../config/color";
export class CircleService {
  constructor(id) {
    const cavs = new CanvasService(id);
    this._cxt = cavs.cxt;
    this._cnv = cavs.cnv;
  }

  drawDemoCircle() {
    drawCircle(this._cxt);
  }
}

