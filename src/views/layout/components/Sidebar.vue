<template>
  <section>
    <el-menu class="el-menu-vertical-demo" active-text-color="#fff" router :default-active="$route.path">
      <el-submenu v-for="(item, index) in sub_menu" :key="index" :index="index.toString()">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item v-for="(entry, ind) in item.children" :key="ind" :index="entry.path">
          <i :class="entry.icon"></i>
          <span>{{ entry.title }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </section>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      sub_menu: [
        {
          title: "Title1",
          icon: "el-icon-s-tools",
          children: [
            {
              title: "Admin",
              path: "/admin",
              icon: "el-icon-s-tools"
            }
          ]
        }
      ]
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;

  .el-menu-item {
    &.is-active {
      background-color: green;
    }
  }
}
</style>
