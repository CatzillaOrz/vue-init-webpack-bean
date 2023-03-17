import { Color } from "../config/color";
/*
 * this._cxt.arc(x, y，半径，开始角度，结束角度，anticlockwise);//xy_radius_starArc_stopArc
 * 120*Math.PI/180   //120°
 * 150*Math.PI/180   //150°
 * @anticlockwise: boolean
*/
export function drawCircle(cxt) {
  //半圆
  cxt.beginPath();
  cxt.arc(80, 80, 50, 0, 180 * Math.PI / 180, true);
  cxt.closePath();
  //描边
  cxt.strokeStyle = Color.HOT_PINK;
  cxt.stroke();
  //整圆
  cxt.beginPath();
  cxt.arc(120, 80, 50, 0, 360 * Math.PI / 180, true);
  cxt.closePath();
  //描边
  cxt.strokeStyle = Color.HOT_PINK;
  cxt.stroke();
}
