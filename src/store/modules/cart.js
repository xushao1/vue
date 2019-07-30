/**
 * @Author: xuchao
 * @Date:   2019/7/25 15:33
 * @Project_Name: vue
 * @Name: cart
 */

'use strict';


//state
const state = {
    cartList: JSON.parse(localStorage.getItem('cartList')) ? JSON.parse(localStorage.getItem('cartList')) : []
    // cartList: []
};

//getters
const getters = {
    // getterTotalPrice (state) {
    //     return state.totalPrice;
    // },
    // gettreSeller (state) {
    //     return state.seller
    // },
    // gettreGoods (state) {
    //     return state.goods
    // },
    // gettreRatings (state) {
    //     return state.ratings
    // },
    getterCartList (state) {
        // console.log(getters);
        // console.log(state.cartList);
        return state.cartList;
        // return localStorage.getItem('cartList');
    },
    getterTotal (state) {
        // console.log(state.cartList);
        // let cartList = localStorage.getItem('cartList')
        let cartList = state.cartList;
        // console.log(cartList);
        // console.log(typeof cartList);
        // console.log(cartList.length);
        let total = {
            tNum : 0,
            tPrice : 0
        };
        if(cartList) {
            // console.log(cartList);
            // cartList.forEach( item => {
            //     total.tNum += item.num;
            //     total.tPrice += item.num * item.price;
            // });
            for (let i = 0; i < cartList.length; i++) {
                // console.log(cartList[i].num);
                // console.log(typeof cartList[i].num);
                // console.log(cartList[i].price);
                // console.log(typeof cartList[i].price);
                total.tNum += Number(cartList[i].num);
                total.tPrice += Number(cartList[i].num) * Number(cartList[i].price);
            }
        }

        // console.log(total);
        return total;
    }
};

//action
const actions = {
    addInfo (context, info) {
        // console.log(info);
        context.commit('addToCartList',info);
    },
    removeInfo (context, info) {
        context.commit('removeToCartList',info);
    },
    clearInfo (context) {
        context.commit('clearToCartList');
    }
};

//mutation

const mutations = {
    addToCartList (state,info) {
        console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');
        // console.log(info);
        //添加到购物车中
        // let list = state.cartList ? state.cartList : [];
        let list = state.cartList;
        // let list = localStorage.getItem('cartList');

        if(list && list.length !== 0) {
            // console.log(222);
            //已经有值
            let flag = false;
            // list.forEach( (item) => {
            //
            // });
            for (let i = 0; i < list.length; i++) {
                // console.log(list[i]);
                // console.log(info);
                // console.log(list[i].id === info);
                // console.log(333);
                if(list[i].id === info.id) {
                    // console.log('增加数据');
                    list[i].num ++;
                    // break;
                    flag = false;
                    break;
                    // return;
                }else {
                    flag = true;
                }
            }
            if(flag) {
                // console.log('输出几次');
                // console.log('追加一条数据');
                list.push({
                    id: info.id,
                    name: info.name,
                    price: info.price,
                    num: 1
                });
            }
            // break;
        } else {
            //首次添加
            // console.log(111);
            // console.log('首次添加');
            list.push({
                id: info.id,
                name: info.name,
                price: info.price,
                num: 1
            })
        }
        // console.log(cartList);
        localStorage.setItem('cartList', JSON.stringify(list));
        // state.cartList = list;
        // console.log(state.cartList);
    },
    removeToCartList (state, info) {
        // console.log(info);
        console.log('---------------------------------------------------');

        // let list = state.cartList ? state.cartList : [];
        let list = state.cartList;
        // let list = localStorage.getItem('cartList');


        for (let i = 0; i < list.length; i++) {
            // console.log(list[i]);
            // console.log(info);
            // console.log(list[i].id === info);
            // console.log(333);
            if(list[i].id === info.id) {
                if(list[i].num > 0) {
                    list[i].num --;
                }
                break;
                // return;
            }
        }

        localStorage.setItem('cartList', JSON.stringify(list));
        // state.cartList = list;
    },
    clearToCartList (state) {
        //清空购物车
        state.cartList = [];

        localStorage.removeItem('cartList');
    }

};

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
};

