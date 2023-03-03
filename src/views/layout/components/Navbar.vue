<template>
  <div class="nav-bar">
    <h2>Header Mock</h2>
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
@import '~@/styles/variables';
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
