<template>
  <div>
    <canvas id='canvas' width="800" height="600"></canvas>
  </div>
</template>

<script>
import { CircleService } from '../service/circleService.js'
export default {
  data() {
    return {
      canvasService: null
    }
  },
  mounted() {
    this.canvasService = new CircleService('canvas');
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
