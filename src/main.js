// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
import Weather from './Weather'

Vue.use(vueAxios, axios)

Vue.prototype.$bus = new Vue()

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Weather/>',
  components: { Weather }
})
