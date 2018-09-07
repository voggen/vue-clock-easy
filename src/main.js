import Vue from 'vue'
import App from './App.vue'

import ds from './index.js'
Vue.use(ds);

new Vue({
  el: '#app',
  render: h => h(App)
})
