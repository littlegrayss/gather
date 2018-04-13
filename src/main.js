// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'

import App from './App'
import router from './router/index'
import store from './store/index'

import axios from 'axios'
Vue.prototype.$http = axios

import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.use(VueAwesomeSwiper)

// Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
