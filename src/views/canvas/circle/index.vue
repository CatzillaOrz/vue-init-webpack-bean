<template>
  <div>
    <canvas id='canvas' width="800" height="600"></canvas>
  </div>
</template>

<script>
import { CanvasFactory } from '../service/canvasFactory.js'
export default {
  data() {
    return {
      canvasService: null
    }
  },
  mounted() {
    const factory = new CanvasFactory('canvas')
    this.canvasService = factory.createCircleService();
    this.draw()
  },
  methods: {
    draw() {
      this.canvasService.drawDemoCircle()
      this.canvasService.drawArcCurveString()
      this.canvasService.drawCustomCurveLine()
      this.canvasService.drawArcCurveLineCustom()
      this.canvasService.drawRoundRect()
    }
  },
}
</script>
