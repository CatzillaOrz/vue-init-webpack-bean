import { Color } from "../config/color";

export class AnimationService {
  constructor(cavs) {
    this._cxt = cavs.cxt;
    this._cnv = cavs.cnv;
  }

  clearCanvas() {
    this._cxt.clearRect(0, 0,this._cnv.width, this._cnv.height);
  }

  drawBlock() {
    this._cxt.fillStyle = Color.HOT_PINK;
    this._cxt.fillRect(30, 30, 50, 50);
  }

  moveBlock() {
    this._cxt.translate(10, 10);
    this._cxt.fillStyle = Color.HOT_PINK;
    this._cxt.fillRect(30, 30, 50, 50);
  }


}
