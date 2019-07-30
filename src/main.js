import Vue from 'vue';
// 引入router
import vueRouter from 'vue-router';

Vue.use(vueRouter);
// 引入公共样式 在线修改了下
import './assets/static/css/reset.css';
// font css
import './assets/static/css/style.css';
// 引入animate.css
import '../node_modules/animate.css/animate.css';

// 引入mint-ui
import 'mint-ui/lib/style.css';
import { Toast, Header } from 'mint-ui';

Vue.component(Header.name,Header);
// Vue.use(Toast);
Vue.component(Toast);

window.Toast = Toast;


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

// vue preview
import  VuePreview from 'vue-preview';
Vue.use(VuePreview);


//引入moment
import moment from 'moment';

//自定义过滤器
Vue.filter('moment', (val) =>  {
  // console.log(val);
  return moment(val).format('YYYY-MM-DD HH:mm:ss');
});


//自定义组件

import heade from './components/heade/heade.vue';
import shopCart from './components/shopCart/shopcart.vue';
import addSubtract from './components/addSubtract/addSubtract';
import star from './components/star/star';

Vue.component('heade',heade);
Vue.component('shopCart',shopCart);
Vue.component('addSubtract',addSubtract);
Vue.component('star',star);

// 主文件

import App from './app.vue';

//引入 vuex store文件
import store from './store/store.js';


//引入 router component
import sell from './components/sell/Sell.vue';
import goods from './components/goods/goods';
import rating from './components/rating/rating';
import sellInfo from './components/sellInfo/sellInfo';
import goodsDetail from './components/goods/goodsDetail/goodsDetail';

const router = new vueRouter({
  // linkActiveClass:'mui-active',
  // mode: 'history',
  routes: [
    {path: '/',redirect: '/sell'},
    {path: '/goodsDetail',name: 'goodsDetail',component: goodsDetail},
    {path: '/sell',name: 'sell', component: sell, children: [
        {path: '/',redirect: 'goods'},
        {path: 'goods',name: 'goods', component: goods},
        {path: 'rating',name: 'rating', component: rating},
        {path: 'sellInfo',name: 'sellInfo', component: sellInfo},
      ]},
    {path: '*',redirect: '/sell'},

  ]
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
  created () {
    let _this = this;
    _this.$ajax.get('data.json').then( response => {
      // console.log(response);
      // _this.$nextTick(() =>{
      //   _this.sell = response.data.seller;
      //   console.log( _this.sell );
      // });
      // console.log(this.$store );
      _this.$store.dispatch('sellInfo/addinfo', response.data)

    }).catch( err => {
      console.log( err );
    });
    // function train(data) {
    //   console.log(data);
    // }
    // train(./data.json);
  }
}).$mount('#app');
