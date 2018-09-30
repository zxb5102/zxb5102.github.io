// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from "vue-amap";
// import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueAMap);
// Vue.prototype.axios = axios;
VueAMap.initAMapApiLoader({
  key: "8469f8ad9edc63e3afd9ceaa787844d7",
  plugin: [
    // "AMap.Autocomplete",
    // "AMap.PlaceSearch"
    // "AMap.Scale",
    // "AMap.OverView",
    // "AMap.ToolBar",
    // "AMap.MapType",
    // "AMap.PolyEditor",
    // "AMap.CircleEditor"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4"
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
