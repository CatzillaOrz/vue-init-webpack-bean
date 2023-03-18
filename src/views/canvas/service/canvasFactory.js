import { CircleService } from "./circleService";
import { CanvasService } from "./canvasService";
import { LineService } from "./lineService";

export class CanvasFactory {
  constructor(id){
    this.cavs = new CanvasService(id);
  }

  createCircleService(){
    return new CircleService(this.cavs);
  }

  createLineService(){
    return new LineService(this.cavs)

  }

}
