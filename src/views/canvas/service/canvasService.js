export class CanvasService {
  _cnv;
  _cxt;

  constructor(id) {
    this.id = id;
    this._getCxt();
  }

  $$() {
    return document.getElementById(this.id)
  }

  _getCxt() {
    this._cnv = this.$$()
    this._cxt = this._cnv.getContext('2d')
  }

  get cxt() {
    return this._cxt
  }

  get cnv() {
    return this._cnv
  }

  static getCXT(s) {
    return s._cxt
  }


}
