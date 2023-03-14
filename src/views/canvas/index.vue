<template>
  <div class="app-canvas">
    <canvas-nav />
    <router-view></router-view>
  </div>
</template>

<script>
import canvasNav from './components/canvasNav.vue';
export default {
  data() {
    return {

    }
  },
  components: { canvasNav },
  methods: {

  },
}
</script>

<style lang="scss">
.app-canvas {
  height: 100%;
}
</style>

