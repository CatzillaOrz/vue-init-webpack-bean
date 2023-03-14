<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal"  router :default-active="$route.path">
      <component :is="item.multi ? 'el-submenu' : 'el-menu-item'" v-for="(item, index_i) in sub_menu" :key="index_i"
        :index="item.path">
        <template slot="title">{{ item.title }}</template>
        <el-submenu v-if="item.multi" v-for="(child, index_j) in item.children" :key="index_j" :index='child.path'>
          <template slot="title">{{ child.title }}</template>
          <el-menu-item v-for="(list, index_k) in child.children" :key="index_k" :index="list.path">
            {{ list.title }}
            {{ index_k }}
          </el-menu-item>
        </el-submenu>
      </component>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'canvasNav',
  data() {
    return {
      sub_menu: [
        {
          title: 'test',
          path: '/canvas',
          multi: false
        },
        {
          title: 'rect',
          path: '/rect',
          multi: false
        },
        {
          title: "lines",
          icon: "el-icon-s-home",
          path: "/line",
          multi: true,
          children: [
            {
              title: "line",
              path: "/line",
              icon: "el-icon-s-tools",
              children: [
                {
                  title: 'test0',
                  path: '/line'
                }
              ]
            },
            {
              title: "Chat",
              path: "/chat",
              icon: "el-icon-s-tools",
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
