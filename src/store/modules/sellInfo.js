/**
 * @Author: xuchao
 * @Date:   2019/7/25 15:33
 * @Project_Name: vue
 * @Name: cart
 */

'use strict';


//state
const state = {
    totalPrice: 100,
    seller: {},
    goods: [],
    ratings: []

};

//getters
const getters = {
    getterTotalPrice (state) {
        return state.totalPrice;
    },
    gettreSeller (state) {
        return state.seller
    },
    gettreGoods (state) {
        return state.goods
    },
    gettreRatings (state) {
        return state.ratings
    },
};

//action
const actions = {
    addinfo (context, info) {
        // console.log(info);
        context.commit('getinfo',info);
    }
};

//mutation

const mutations = {
    getinfo (state,info) {
        // console.log(info);
        state.seller = info.seller;
        state.goods = info.goods;
        state.ratings = info.ratings;
    }
};

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
};

