import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlugin from './element/plugin'
elementPlugin();
import './element/element.css';
import axios from 'axios';
// console.log(axios);
Vue.prototype.$axios = axios;
import qs from 'qs';
Vue.prototype.$qs = qs;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
