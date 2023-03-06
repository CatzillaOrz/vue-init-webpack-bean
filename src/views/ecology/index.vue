<template>
  <div class="ecology-main">
    <map-feature v-bind:disable-config="['PopupInfo','Menu','OptionMenu']"/> 
  </div>
</template>

<script>
import mapFeature from '@/views/map/Map'
export default {
  name: 'ecology',
  components: {
    mapFeature
  },
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss">
.ecology-main{
    height: 100%;
  }
</style>
