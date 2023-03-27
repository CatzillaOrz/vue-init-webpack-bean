// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import './router/before'
//import './styles/index.scss'
import './plugins/element.js'
import axios from 'axios'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueRx from 'vue-rx'


Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(PiniaVuePlugin)
Vue.use(VueRx)
const pinia = createPinia()


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  pinia,
})
