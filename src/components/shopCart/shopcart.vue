<template>
    <div class="shopCart " :class="{'shopCartActive' : total.tPrice}">
        <div class="shopCartBottom flex">
            <div class="cartIcon" @click="isShowCartListFn"><span class="icon"><i class="icon-shopping_cart"></i></span><span class="iconNum">{{total.tNum}}</span></div>
            <div class="cartPrice flex-f1 flex" >
                <div class="cartPrice-l">￥{{total.tPrice}}</div>
                <div class="cartPrice-r">另需配送费 ￥ 4元</div>
            </div>
            <div class="cartBtn " :class="{'cartBtnActive': cartBtnActive}" @click="pay">{{btnText}}</div>
        </div>
        <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <div class="cartList " v-show="isShowCartList && isCartList">
            <div class="cartList-t flex flex-jube">
                <h4>购物车</h4>
                <p class="clearBtn" @click="clearList">清空</p>
            </div>

            <div class="cartList-b">
                <ul>
                    <transition v-for="list in cartList" :key="list.id" leave-active-class="animated fadeOutDown">
                    <li  v-if="list.num">
                        <p class="name">{{list.name}}</p>
                        <p class="price"><em>￥</em> {{list.price}}</p>
                        <p class="operate"><add-subtract :goodInfo="list"></add-subtract></p>
                    </li>
                    </transition>

                </ul>
            </div>
            <div style="height: 65px;"></div>
        </div></transition>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="shopCartMask" v-show="isShowCartList && isCartList" @click="isShowCartListFn"></div></transition>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    import { Toast } from 'mint-ui';

    export default {
        name: "shopcart",
        data () {
            return {
                isShowCartList: false,
                clickFlag: true,
                cartBtnActive: false
                // btnText: '￥20起送'
            }
        },
        methods: {
            ...mapActions('cart', {
                clearInfo: 'clearInfo'
            }),
            //是否显示购物车列表
            isShowCartListFn () {
                if(this.clickFlag) {

                    // console.log('购物车 是否有清单' + this.total.tPrice);
                    // if(!this.total.tPrice) {
                    //     this.isShowCartList = false;
                    //     alert('请优先选择菜单！');
                    //     return;
                    // }

                    if(!this.isCartList) {
                        // console.log(Toast);
                        Toast({
                            message: '请优先选择菜单',
                            duration: 2000,
                            iconClass: 'icon icon-favorite',
                            className: 'mytoast'
                        });
                        // alert('请优先选择菜单！');
                        return;
                    }

                    this.clickFlag = false;

                    this.isShowCartList = !this.isShowCartList;
                    setTimeout(() => {
                        this.clickFlag = true;
                    },1000);
                }
            },
            clearList () {
                //  清空购物车
                this.clearInfo();
            },
            pay () {
            //    跳转到支付页面
                if(this.cartBtnActive) {
                    Toast({
                        message: '跳转到支付页面',
                        duration: 2000,
                        iconClass: 'icon icon-check_circle',
                        className: 'mytoast'
                    });
                } else {
                    return
                }
            }
        },
        mounted () {
            // this.$nextTick( () => {
            //
            //     console.log(this.goods);
            // });
            // console.log(this.isCartList);
        },
        watch: {
            // cartList: list => {
            //     // console.log(this.id);
            //     console.log(this.cartList);
            //     console.log(list);
            //     // return list;
            // },

            // total: {
            //     handler: val =>  {
            //         // console.log('购物车1-------');
            //         console.log(val);
            //         // console.log(this.goods);
            //
            //     },
            //     deep: true
            // }
        },
        computed: {
            ...mapGetters('cart', {
                cartList: 'getterCartList',
                total: 'getterTotal'
            }),
            // ...mapGetters('sellInfo', {
            //     goods: 'gettreGoods'
            // }),
            isCartList: {
                get: function() {
                    let _this = this;
                    // 判断用户是否有选择food
                    if(_this.total.tPrice) {
                        return true;
                    } else {
                        // 如果去掉了选项，此处将列表设为隐藏
                        _this.isShowCartList = false;

                        return false;
                    }
                }
            },
            btnText () {
                let _this = this;
                if(_this.total.tPrice >= 20) {
                    _this.cartBtnActive = true;
                    return '去结算'
                } else if( _this.total.tPrice > 0 ) {
                    _this.cartBtnActive = false;
                    return `还差 ￥${ 20 - _this.total.tPrice }起送`
                } else {
                    _this.cartBtnActive = false;
                    return '￥20起送'
                }
            }


        }
    }
</script>
<style>
    .mytoast .icon {
        color: rgb(0,160,220);
    }
</style>
<style scoped lang="less">

    @primaryColor: rgba(255,255,255,0.4);

    .bgc(@alpha: 0.5) {
        background-color: rgba(20, 29, 39, @alpha);
    }
.shopCart {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    .bgc(0.8);
    color: @primaryColor;
    line-height: 50px;
    z-index: 2;
    .shopCartBottom {
        position: relative;
        z-index: 3;
        background-color: #141d27;
    }

    .cartIcon {
        margin: 0 12px;
        position: relative;
        top: -8px;
        background-color: #141d27;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        span.icon {
            display: inline-block;
            background-color: rgba(255,255,255,0.2);
            width: 50px;
            height: 50px;
            border: 6px solid #141d27;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;

            text-align: center;
            i {
                font-size: 24px;

                line-height: 24px;
            }
        }
        span.iconNum {
            position: absolute;
            top: -2px;
            right: -6px;
            /*width: 26px;*/
            height: 20px;
            padding: 0 6px;
            line-height: 20px;
            background-color: rgb(240,20,20);
            color: #fff;
            font-size: 10px;
            font-weight: bold;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
            text-align: center;
            display: none;
        }
    }
    .cartPrice {
        padding: 12px 0;
        line-height: 26px;
        .cartPrice-l {
            border-right: 1px solid @primaryColor;
            padding-right: 12px;
            font-size: 16px;
            font-weight: bold;
        }
        .cartPrice-r {
            font-size: 12px;
            font-weight: normal;
            padding-left: 12px;
            color: @primaryColor;
        }
    }
    .cartBtn {
        width: 110px;
        text-align: center;
        background-color: rgba(255,255,255,0.2);
        font-size: 14px;
        font-weight: bold;
        color: @primaryColor;
        &.cartBtnActive {
            background-color: #00b43c;
            color: #fff;
        }
    }
    &.shopCartActive {
        color: #fff;
        .cartIcon {
            span.icon {
                background-color: rgb(0,160,220);
            }
            span.iconNum {
                display: block;
            }
        }
    }
    .cartList {
        background-color: #fff;
        max-height: 345px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        color: #000;
        z-index: 2;
        /*height: 0;*/
        &.cartListShow {
            height: auto;
        }
        .cartList-t {
            height: 40px;
            line-height: 40px;
            padding: 0 18px;
            background-color: #f3f5f7;
            border-bottom: 1px solid rgba(7,17,27,0.1);
            h4 {
                font-size: 14px;
                font-weight: 200;
                color: rgba(7,17,27);
            }
            p.clearBtn {
                color: rgb(0,160,220);
                font-size: 12px;
            }
        }
        .cartList-b {
            padding: 0 18px;
            overflow-y: scroll;
            max-height: 240px;
            transition: all 1s ease;
            height: auto;
            li {
                height: 48px;
                line-height: 48px;
                border-bottom: 1px solid rgba(7,17,27,0.1);
                display: -webkit-box;	display: -webkit-flex;	display: flex;
                p.name {
                    -webkit-flex: 1; -ms-flex: 1; flex: 1;
                    font-size: 14px;
                    color: rgb(7,17,27);
                }
                p.price {
                    color: rgb(240,20,20);
                    padding: 0 12px 0 18px;
                    font-weight: bold;
                    font-size: 14px;
                    em {
                        font-size: 10px;
                        font-weight: normal;
                        /*font-style: normal;*/
                    }
                }
            }
            &::-webkit-scrollbar {
                width: 0;
                display: none;
            }
        }
    }
    .shopCartMask {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        .bgc(0.6);
        /*display: none;*/
        /*&.shopCartMaskShow {*/
        /*    display: block;*/
        /*}*/
    }
}
</style>