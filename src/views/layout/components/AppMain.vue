<template>
  <section class="app-main">
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {}
  },
  computed: {
    cachedViews() {
      return []
    },
    key() {
      return ''
    },
  },
  method: {

  }
}
</script>
<style lang="scss">
.app-main {
  height: 100%;
  margin: 10px auto;
  color: blue;
}
</style>
