<template>
  <div class="main">
    <el-container>
      <el-header>
        <navbar />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <sidebar />
        </el-aside>
        <el-container>
          <el-main>
            <app-main></app-main>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components';


export default {
  name: "Layout",
  components: {
    AppMain, Navbar, Sidebar
  },
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.main {
  display: flex;
  height: 100vh;
  min-height: 560px;
  overflow: hidden;

  .el-container {
    .el-header {
      line-height: 60px;
      color: $primary;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
