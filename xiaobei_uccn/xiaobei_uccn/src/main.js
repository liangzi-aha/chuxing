// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import '../src/api/api.js'

Vue.prototype.qs = qs
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// const service = axios.create({
//   baseURL: process.env.BASE_API,//自己定义一个baseURL，这里我写在了实例里面
// })
