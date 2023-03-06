<template>
  <div class="ecology-main">
    <map-feature v-bind:disable-config="disableConfig" @detail="onDetail" />
  </div>
</template>

<script>
import mapFeature from '@/views/map/Map'
import { mapFeatureConfig as config } from '@/views/map/Map'
export default {
  name: 'ecology',
  components: {
    mapFeature
  },
  data() {
    return {
      disableConfig: [config.POPUP_INFO, config.MENU,]
    }
  },
  methods: {
    onDetail(e) {
      console.log('del', e)
    }

  },
}
</script>

<style lang="scss">
.ecology-main {
  height: 100%;
}
</style>
