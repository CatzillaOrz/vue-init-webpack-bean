<template>
  <section class="app-main">
    <p>Main container</p>
    <transition name="fade-transform" mode="out-in" attr="效果2">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
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
  margin: 10px auto;
  color: blue;
}
</style>
