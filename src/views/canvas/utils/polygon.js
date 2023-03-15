/*
n：表示边形
* dx、dy：表示口边形中心华析
* size：表示n边形的大小
*/
export function createPolygon(cxt, n, dx, dy, size) {
  cxt.beginPath();
  const degree = (2 * Math.PI) / n;
  for (let i = 0; i < n; i++) {
    const x = Math.cos(i * degree);
    const y = Math.sin(i * degree);
    cxt.lineTo(x * size + dx, y * size + dy);
  }
  cxt.closePath();
}

export function createStar(cxt) {
  cxt.beginPath();
  for (let i = 0; i < 5; i++) {
    cxt.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * 50 + 200,
      -Math.sin((18 + i * 72) * Math.PI / 180) * 50 + 200);
    cxt.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * 25 + 200,
      -Math.sin((54 + i * 72) * Math.PI / 180) * 25 + 200);
  }
  cxt.closePath();
  cxt.stroke();

}
