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

export function drawArcCurve(cxt) {
  cxt.beginPath();
  cxt.arc(200, 70, 50, 0, -90 * Math.PI / 180, true);
  cxt.strokeStyle = Color.BLUE;
  cxt.stroke();
}

export function drawCustomCurveLine(cxt) {
  //绘制一条直线
  cxt.moveTo(20, 20);
  cxt.lineTo(70, 20);
  cxt.stroke();
  //绘制圆弧+直线
  cxt.beginPath();
  cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, true);
  cxt.moveTo(120, 70);
  cxt.lineTo(120, 120);
  cxt.stroke();
}

export function drawArcCurveCustom(cxt) {
  cxt.moveTo(30, 30);
  cxt.lineTo(60, 30);
  cxt.arcTo(110, 30, 110, 80, 50);
  cxt.lineTo(110, 110);
  cxt.strokeStyle = Color.BLACK;
  cxt.stroke();
}

/*
* createRoundedRect()用于绘制圆角矩形
* width、height：分别表示长和宽
* r：表示圆角半径
* offsetX、offsetY：分别表示左上角顶点坐标
*/
export function drawRoundSquare(cxt, width, height, r, offsetX, offsetY) {
  cxt.beginPath();
  cxt.moveTo(offsetX + r, offsetY);
  cxt.lineTo(offsetX + width - r, offsetY);
  cxt.arcTo(offsetX + width, offsetY, offsetY + width, offsetY + r, r);
  cxt.lineTo(offsetX + width, offsetY + height - r);
  cxt.arcTo(offsetX + width, offsetY + height, offsetX + width - r,
    offsetY + height, r);
  cxt.lineTo(offsetX + r, offsetY + height);
  cxt.arcTo(offsetX, offsetY + height, offsetX, offsetY +
    height - r, r);
  cxt.lineTo(offsetX, offsetY + r);
  cxt.arcTo(offsetX, offsetY, offsetX + r, offsetY, r);
  cxt.closePath();
}

