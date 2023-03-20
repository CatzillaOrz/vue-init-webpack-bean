<template>
  <div>
    <canvas id='canvas' width="500" height="500" style="display: block; border:1px dashed
        gray;"> </canvas>
    <el-button v-stream:click="click$">Move</el-button>
    <el-button v-stream:click="cancel$">Stop</el-button>
  </div>
</template>

<script>
import { CanvasFactory } from '../service/canvasFactory.js'
import { interval } from 'rxjs';
import { exhaustMap, takeUntil, tap, repeat } from 'rxjs/operators';

export default {
  domStreams: ['click$', 'cancel$'],

  subscriptions() {
    const tick$ = this.click$.pipe(
      exhaustMap(() => interval(500)),
      tap(() => {
        this.moveStepByStep()
      }),
      takeUntil(this.cancel$),
      repeat(),

    )

    return {
      tick$
    }
  },

  data() {
    return {
      canvasService: null
    }
  },
  mounted() {

    const factory = new CanvasFactory('canvas')
    this.canvasService = factory.createAnimation();
    this.draw()
  },
  methods: {
    draw() {
      this.canvasService.drawBlock()
    },
    moveStepByStep() {
      this.canvasService.clearCanvas()
      this.canvasService.moveBlock()
    },
    cancel() {
      console.log('stop')
    }
  },
}
</script>

