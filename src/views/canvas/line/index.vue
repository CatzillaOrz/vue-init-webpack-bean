<template>
  <div>
    line of canvas
    <canvas ref="canvas" id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'drawLine',

  data() {
    return {
      cnv: null,
      cxt: null

    }
  },

  mounted() {
    debugger
    this.$nextTick(() => {
      this.cnv = document.getElementById('canvas')
      this.cxt = this.cnv.getContext('2d')
      this.drawLine()
    })

  },
  methods: {
    $$(id) {
      return document.getElementById(id)
    },
    drawLine() {
      this.cxt.moveTo(50, 100)
      this.cxt.lineTo(150, 50)
      this.cxt.stoke()

    }
  },
}
</script>
