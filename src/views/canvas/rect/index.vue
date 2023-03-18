<template>
  <div>
    rect
    <canvas id="canvas" width="800" height="500" style="border: 1px dashed gray;"></canvas>
  </div>
</template>

<script>

import { CanvasFactory } from '../service/canvasFactory'
export default {
  name: 'rectLine',
  data() {
    return {
      canvasService: null
    }
  },
  mounted() {
    const factory = new CanvasFactory('canvas')
    this.canvasService = factory.createLineService();
    this.draw()
  },

  methods: {
    draw() {
      this.canvasService.arrow()
      this.canvasService.polygonTriangle()
      this.canvasService.polygonSquare()
      this.canvasService.polygonSpade()
      this.canvasService.polygonHexagon()
      this.canvasService.polygonStar()
    }
  },


}
</script>
