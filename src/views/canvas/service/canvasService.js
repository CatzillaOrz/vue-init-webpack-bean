export class CanvasService {
  _cxt;

  constructor(id) {
    this.id = id;
    this._getCxt();
  }

  $$() {
    return document.getElementById(this.id)
  }

  _getCxt(){
    const cnv = this.$$()
    this._cxt =  cnv.getContext('2d')
  }

  get cxt() {
    return this._cxt  
  }

  static getCXT(s){
    return s._cxt
  }


}
