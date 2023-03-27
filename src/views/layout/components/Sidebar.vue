<template>
  <section>
    <el-menu class="el-menu-vertical-demo" active-text-color="#fff" router :default-active="$route.path">
      <el-submenu v-for="(item, index) in sub_menu" :key="index" :index="item.path">
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
        /** {
           title: "CanvasBoard",
           icon: "el-icon-s-home",
           path: "/canvas",
         },
         */
        {
          title: "Dashboard",
          icon: "el-icon-s-home",
          path: "/map",
          children: [
            {
              title: "MapStore",
              path: "/map",
              icon: "el-icon-s-tools"
            },
            {
              title: "BookStore",
              path: "/chat",
              icon: "el-icon-s-tools"
            },
            {
              title: "Ecology",
              path: "/ecology",
              icon: "el-icon-s-tools"
            },
            {
              title: "Register",
              path: "/register",
              icon: "el-icon-s-tools"
            }
          ]
        },
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
  background: $--background-color-base;

  .el-menu-item {
    &.is-active {
      background-color: $--color-primary;
    }
  }
}
</style>
