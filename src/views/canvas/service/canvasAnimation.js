import { Color } from "../config/color";
import {getMouse} from '../utils/tools.js'

export class AnimationService {
  constructor(cavs) {
    this._cxt = cavs.cxt;
    this._cnv = cavs.cnv;
  }

  clearCanvas() {
    this._cxt.clearRect(0, 0, this._cnv.width, this._cnv.height);
  }

  drawBlock() {
    this._cxt.fillStyle = Color.HOT_PINK;
    this._cxt.fillRect(30, 30, 50, 50);
  }

  reset() {
    this.clearCanvas()
    this._cxt.moveTo(0, 0)
    this._cxt.translate(-30, -30)
    this.drawBlock()
  }

  moveBlock() {
    this._cxt.translate(10, 10);
    this._cxt.fillStyle = Color.HOT_PINK;
    this._cxt.fillRect(30, 30, 50, 50);
  }

  getCanvasMouse() {
    return getMouse(this._cnv)
  }


}
