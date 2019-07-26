/**
 * @Author: xuchao
 * @Date:   2019/7/25 15:31
 * @Project_Name: vue
 * @Name: store
 */

'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import cart from './modules/cart';
import sellInfo from './modules/sellInfo';

export default new Vuex.Store({
    modules: {
        cart,
        sellInfo
    }
})
