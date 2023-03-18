import { drawRoundSquare,drawArcCurveCustom, drawCircle, drawArcCurve, drawCustomCurveLine } from "../utils/circle";
import { Color } from "../config/color";
export class CircleService {
  constructor(cavs) {
    this._cxt = cavs.cxt;
    this._cnv = cavs.cnv;
  }

  drawDemoCircle() {
    drawCircle(this._cxt);
  }

  drawArcCurveString() {
    drawArcCurve(this._cxt)
  }

  drawCustomCurveLine() {
    drawCustomCurveLine(this._cxt)
  }

  drawArcCurveLineCustom() {
    drawArcCurveCustom(this._cxt)
  }

  drawRoundRect() {
    drawRoundSquare(this._cxt, 100, 100, 20, 120, 120);
    this._cxt.fillStyle = Color.HOT_PINK;
    this._cxt.fill();
  }
}

