<template>
  <div>
    rect
    <canvas id="canvas" width="800" height="500" style="border: 1px dashed gray;"></canvas>
  </div>
</template>

<script>

import { LineService } from '../service/lineService.js'
export default {
  name: 'rectLine',
  data() {
    return {
      canvasService: null
    }
  },
  mounted() {
    this.canvasService = new LineService('canvas')
    this.draw()
  },

  methods: {
    draw() {
      this.canvasService.arrow()
      this.canvasService.polygonTriangle()
      this.canvasService.polygonSquare()
      this.canvasService.polygonSpade()
      this.canvasService.polygonHexagon()
    }
  },


}
</script>
