<template>
  <div class="nav-bar">
  <router-link to="/">
    <h2>Header Mock</h2>
  </router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 60px;
  background: #F5F7FA;
  line-height: 60px;
  border-bottom: none;
  text-align: center;
}
</style>
