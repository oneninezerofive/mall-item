import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlugin from './element-ui/plugin'
elementPlugin();
import './element-ui/element.css';
import axios from 'axios';
Vue.prototype.$axios = axios;
import qs from 'qs';
Vue.prototype.$qs = qs;
Vue.config.productionTip = false;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
import elementUI from './element-ui/index'
elementUI()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
