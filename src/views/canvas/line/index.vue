<template>
  <div>
    line of canvas

    <canvas id="canvas" width="800" height="500">
    Canvas是一个行内块元素（即inline-block），我们一般需要指定其三个属性：id、width和height。width和height分别定义Canvas的宽度和高度。默认情况下，Canvas的宽度为300px，高度为150px。
    </canvas>
  </div>
</template>

<script>
import { CanvasFactory } from '../service/canvasFactory';
export default {
  name: 'drawLine',

  data() {
    return {
      canvasService: null
    }
  },

  mounted() {
    const factory = new CanvasFactory('canvas');
    this.canvasService =  factory.createLineService()
    this.draw()
    this.animation()
  },

  methods: {
    draw() {
      this.canvasService.drawLine([50, 150], [150, 50])
      this.canvasService.parallelLine([[50, 50], [100, 50], [50, 120], [100, 120]])
      this.canvasService.triangle([[50, 100], [150, 50], [150, 100]])
      this.canvasService.lineRect([[10, 110], [10, 40], [180, 40], [180, 110]])
      this.canvasService.strokeRect([110, 10, 80, 80])
      this.canvasService.fillRect([120, 10, 40, 40])
      this.canvasService.rect([190, 10, 30, 30])
      this.canvasService.clearRect([20, 70, 30, 30])

    },
    animation() {
      setTimeout(() => {
        this.canvasService.clearCanvas()
      }, 1000)
      setTimeout(() => {
        this.draw()
      }, 2000);
    }

  },
}
</script>
