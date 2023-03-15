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
    this.canvasService.drawLine()

  },
  methods: {
  },
}
</script>
