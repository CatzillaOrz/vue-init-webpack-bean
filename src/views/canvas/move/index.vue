<template>
  <div>
    <div>
      {{ returnMouse$ ? returnMouse$.x : '' }} - {{ returnMouse$ ? returnMouse$.y : '' }}
    </div>
    <canvas id='canvas' width="500" height="500" style="display: block; border:1px dashed
                                              gray;"> </canvas>
    <el-button v-stream:click="click$">Move</el-button>
    <el-button v-stream:click="reset$">Reset</el-button>

  </div>
</template>

<script>
import { CanvasFactory } from '../service/canvasFactory.js'
import { timer, fromEvent, interval } from 'rxjs';
import { debounce, delay, map, exhaustMap, takeUntil, tap, repeat } from 'rxjs/operators';


export default {
  domStreams: ['click$', 'reset$'],

  subscriptions() {
    const tick$ = this.click$.pipe(
      exhaustMap(() => interval(500)),
      map(i => i++),
      tap((i) => {
        console.log(i)
        this.moveStepByStep()
      }),
      takeUntil(this.reset$),
      repeat(),
    )

    const back$ = this.reset$.pipe(
      tap(_ => {
        this.reset()
      })
    )
    const mouseMove$ = fromEvent(document, 'mousemove')
    const returnMouse$ = mouseMove$.pipe(
      map(_ => this.xy),
      debounce(() => timer(1000)),
      tap(x => console.log(x.x, x.y)),
      delay(1000)
    )

    return {
      tick$,
      back$,
      returnMouse$,
    }
  },

  data() {
    return {
      canvasService: null,
      xy: null
    }
  },
  mounted() {
    const factory = new CanvasFactory('canvas')
    this.canvasService = factory.createAnimation();
    this.draw()
    this.xy = this.getmouse();
  },
  methods: {
    draw() {
      this.canvasService.drawBlock()
    },
    moveStepByStep() {
      this.canvasService.clearCanvas()
      this.canvasService.moveBlock()
    },
    reset() {
      this.canvasService.reset()
    },
    getmouse() {
      return this.canvasService.getCanvasMouse()
    }
  },
}
</script>

