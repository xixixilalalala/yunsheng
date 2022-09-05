import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BaiduMap from 'vue-baidu-map';
Vue.config.productionTip=false
Vue.use(BaiduMap,{ak:'j7ebwwp1gQLwM9OIuyBv5D1U6u3KmA6o'})
Vue.use(ElementUI);
// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
