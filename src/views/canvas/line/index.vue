<template>
  <div>
    line of canvas
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { LineService } from '@/views/canvas/service/lineService.js'
export default {
  name: 'drawLine',

  data() {
    return {
      canvasService: null
    }
  },

  mounted() {
    this.canvasService = new LineService('canvas');
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
      }, 3000)
      setTimeout(() => {
        this.draw()
      }, 4000);
    }

  },
}
</script>
