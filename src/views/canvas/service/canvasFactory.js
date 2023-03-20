import { CircleService } from "./circleService";
import { CanvasService } from "./canvasService";
import { LineService } from "./lineService";
import { AnimationService } from "./canvasAnimation";

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

  createAnimation(){
    return new AnimationService(this.cavs)
  }

}
