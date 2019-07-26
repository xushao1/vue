<template>
    <div class="shopCart">
        <div class="shopCartBottom flex">
            <div class="cartIcon" @click="isShowCartListFn"><span class="icon"><i class="icon-shopping_cart"></i></span><span class="iconNum">111</span></div>
            <div class="cartPrice flex-f1 flex" >
                <div class="cartPrice-l">￥1000</div>
                <div class="cartPrice-r">另需配送费 ￥ 4元</div>
            </div>
            <div class="cartBtn">￥20起送</div>
        </div>
        <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <div class="cartList " v-show="isShowCartList">
            <div class="cartList-t flex flex-jube">
                <h4>购物车</h4>
                <p class="clearBtn">清空</p>
            </div>
            <div class="cartList-b">
                <ul>
                    <li>
                        <p class="name">清华链子</p>
                        <p class="price"><em>￥</em> 100</p>
                        <p class="operate"><add-subtract></add-subtract></p>
                    </li>
                </ul>
            </div>
            <div style="height: 65px;"></div>
        </div></transition>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="shopCartMask" v-show="isShowCartList" @click="isShowCartListFn"></div></transition>
    </div>
</template>

<script>

    export default {
        name: "shopcart",
        data () {
            return {
                isShowCartList: false
            }
        },
        methods: {
            //是否显示购物车列表
            isShowCartListFn () {
                // setTimeout(() => {},1000);
                this.isShowCartList = !this.isShowCartList;
            }
        }
    }
</script>

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