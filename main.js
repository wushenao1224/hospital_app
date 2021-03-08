import Vue from 'vue'
import App from './App'
import { http } from './utils/http.js'
// 挂载到 vue 全局变量
Vue.prototype.$http = http

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
