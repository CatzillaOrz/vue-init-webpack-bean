<template>
  <div>
    line of canvas
    <canvas ref="canvas" id="canvas"></canvas>
  </div>
</template>

<script>
import { CanvasService } from '@/views/canvas/service/canvasService.js'
export default {
  name: 'drawLine',

  data() {
    return {
      canvasService: null
    }
  },

  mounted() {
    this.canvasService = new CanvasService('canvas');
    this.draw()

  },
  methods: {
    draw() {
      this.canvasService.drawLine([50, 150], [150, 50])
      this.canvasService.parallelLine([[50, 50], [100, 50], [50, 120], [100, 120]])
      this.canvasService.triangle([[50, 100], [150, 50], [150, 100], [50, 100]])
    }
  },
}
</script>
