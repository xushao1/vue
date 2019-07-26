import Vue from 'vue';

// 引入公共样式
import './assets/static/css/reset.css';
// font css
import './assets/static/css/style.css';
// 引入animate.css
import '../node_modules/animate.css/animate.css'


// Axios:引入axios
import Axios from 'axios';
//Axios:挂载原型
Vue.prototype.$ajax = Axios;

// Axios:默认配置
// Axios.defaults.baseURL = 'http://localhost:8080';

// Axios 拦截器
// Add a request interceptor
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  // console.log(response);
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

//自定义组件

import heade from './components/heade/heade.vue';
import shopCart from './components/shopCart/shopcart.vue';
import addSubtract from './components/addSubtract/addSubtract';

Vue.component('heade',heade);
Vue.component('shopCart',shopCart);
Vue.component('addSubtract',addSubtract);

import sell from './Sell.vue';

//引入 vuex store文件
import store from './store/store.js';


Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(sell),
  created () {
    let _this = this;
    _this.$ajax.get('data.json').then( response => {
      // console.log(response);
      // _this.$nextTick(() =>{
      //   _this.sell = response.data.seller;
      //   console.log( _this.sell );
      // });
      // console.log(this.$store );
      this.$store.dispatch('sellInfo/addinfo', response.data)

    }).catch( err => {
      console.log( err );
    });
  }
}).$mount('#app');
