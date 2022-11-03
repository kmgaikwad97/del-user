import Vue from 'vue'
import App from './App.vue'

import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
