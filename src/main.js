import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "@common/components";
import VueTouch from 'vue-touch'
import "@common/filter"
import store from "./store"
import "./lib/loading/index.js"
Vue.config.productionTip = false
Vue.use(VueTouch, { name: 'v-touch' })
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
