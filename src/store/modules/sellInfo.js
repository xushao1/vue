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
    getterSeller (state) {
        return state.seller
    },
    getterGoods (state) {
        return state.goods
    },
    getterRatings (state) {
        // console.log(state.ratings);
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

        state.ratings = info.ratings;


        //   随机给每一个小商品添加一个id
        // console.log(info.goods);
        let idNum = 0;
        info.goods.forEach( (food) => {
            // console.log(food);
            // console.log(index);
            food.foods.forEach( item => {
                // console.log(item);
                item['id'] = idNum;
                idNum++;
            });
        });

        state.goods = info.goods;

        // console.log(state);
    }
};

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
};

